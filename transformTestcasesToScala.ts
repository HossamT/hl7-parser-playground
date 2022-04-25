import { TestCase, ProfileNode, MessageNode } from './main';
import { LOI } from './testcases/loi-testcase';
import { LOIv1 } from './testcases/loi-old';

export interface IContext { counter: Record<string, number>, line: number }

const profilesMap: Record<string, string> = {};


function transformTestCase(tc: TestCase): string {
    const prof = profile(tc.profile.nodes, tc.profile.name);
    const msgs = [...tc.expectations].map((exp) => {
        const name = (exp.message.name || '').toUpperCase().replace(new RegExp(' ', 'g'), '_');
        console.log(`def ${tc.profile.name}_${name}_TEST = check(${tc.profile.name}_${name})`);
        return `val ${tc.profile.name}_${name} = ("""${exp.message.message.map(s => `/${s}`).join('\n')}""".stripMargin('/'), ${message(exp.parseAs, tc.profile.name, { counter: {}, line: 0 })})`
    }).join('\n');
    const resources = Object.keys(profilesMap).map((k) => {
        return `val ${k} = ${profilesMap[k]}`
    }).join('\n');
    return `
    // Resources
    ${resources}

    //TestCase ${tc.profile.name}
    val ${tc.profile.name}_profile: List[SegRefOrGroup] = ${prof}
    ${msgs}
    `;
}

function profile(nodes: ProfileNode[], prefix: string): string {
    const list = nodes.map((node, i) => {
        if (node.complex) {
            return group(node, i + 1, prefix)
        } else {
            return segRef(node, i + 1, prefix)
        }
    }).join(',\n');

    return `List(${list})`;
}

function message(nodes: MessageNode[], prefix: string, context: IContext): string {
    const list = nodes.map((node, i) => {
        if (node.complex) {
            return groupInstance(node, prefix, context)
        } else {
            return segInstance(node, prefix, context)
        }
    }).join(',\n');

    return `List(${list})`;
}

function segRef(node: ProfileNode, i: number, prefix: string): string {
    const id = `${prefix}_${node.name}`;
    const str = `SegmentRef(${req(node, i)}, ${seg(node)})`;
    profilesMap[id] = str;
    return id;
}

function req(node: ProfileNode, i: number): string {
    return `Req(${i}, "${node.name}", Usage.O, Some(Range(1, "${node.cardinality}")), None, None, Nil, None, hide = false, None)`;
}

function seg(node: ProfileNode): string {
    return `Segment("${node.name}", "${node.name}", "${node.name}", Nil, Nil)`
}

function group(node: ProfileNode, i: number, prefix: string): string {
    const id = `${prefix}_${node.name}`;
    const str = `Group("${node.name}", "${node.name}", ${node.children ? profile(node.children, id) : 'Nil'}, ${req(node, i)})`;
    profilesMap[id] = str;
    return id;
}

function groupInstance(node: MessageNode, prefix: string, context: IContext): string {
    const id = `${prefix}_${node.name}`;
    if (!profilesMap[id]) {
        throw new Error(`Couldnt find ${id}`);
    }
    return `GroupInstance(${id}, ${node.instance}, ${node.children ? message(node.children, id, context) : 'Nil'})`
}

function segInstance(node: MessageNode, prefix: string, context: IContext): string {
    const id = `${prefix}_${node.name}`;
    context.line += 1;
    context.counter[node.name] = context.counter[node.name] ? context.counter[node.name] + 1 : 1;

    if (!profilesMap[id]) {
        throw new Error(`Couldnt find ${id}`);
    }
    return `SegmentInstance(${id}, ${location(node, context)}, ${node.instance}, Nil, hasExtra = true, "${node.name}")`
}

function location(node: MessageNode, context: IContext): string {
    return `Location(EType.Segment, "${node.name}", "${node.name}", ${context.line}, 1, "${node.name}[${context.counter[node.name]}]")`
}



console.log(transformTestCase(LOIv1));

