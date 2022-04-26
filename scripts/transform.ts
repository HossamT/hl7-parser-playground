import { MessageNode, ProfileNode, TestCase } from '../model/parser';
import { normalizeName } from '../utils/generator';

export interface IContext { counter: Record<string, number>, line: number }

let profilesMap: Record<string, string> = {};

export function transformTestCase(tc: TestCase): { spec: string[], payload: string } {
    profilesMap = {};
    const profileVarName = `${tc.profile.name}_profile`;
    const profileDefinition = profile(tc.profile.nodes, tc.profile.name);
    const mockData = tc.expectations.map((exp) => {
        const mockName = normalizeName(`${exp.message.name}_${tc.profile.name}`);
        const mockMessage = `"""${exp.message.message.map(s => `/${s}`).join('\n\t')}""".stripMargin('/')`;
        const mockExpectation = message(exp.parseAs, tc.profile.name, { counter: {}, line: 0 });
        return [mockName, mockMessage, mockExpectation];
    });

    const spec = mockData.map((md) => {
        return `${md[0]} $${md[0]}_TEST`
    });

    // Test Definitions
    const testDefs = mockData.map((md) => {
        return `def ${md[0]}_TEST = check(${md[0]}, ${profileVarName})`
    }).join('\n\t');

    // Resources
    const resourceDefs = Object.keys(profilesMap).map((k) => {
        return `val ${k} = ${profilesMap[k]}`
    }).join('\n\t');

    // Profile
    const profileVarDef = `val ${profileVarName}: List[SegRefOrGroup] = ${profileDefinition}`

    // Mocks
    const mockDataDef = mockData.map((md) => {
        return `val ${md[0]} = (${md[1]}, ${md[2]})`
    }).join('\n\t');

    return {
        payload: `\n\t${[
            '// Test Definitions',
            testDefs,
            '// Resources',
            resourceDefs,
            '// Profile',
            profileVarDef,
            '// Mocks',
            mockDataDef
        ].join('\n\t')}\n\t`,
        spec,
    };
}


function profile(nodes: ProfileNode[], prefix: string): string {
    const list = nodes.map((node, i) => {
        if (node.complex) {
            return group(node, i + 1, prefix)
        } else {
            return segRef(node, i + 1, prefix)
        }
    }).join(',\n\t');

    return `List(${list})`;
}

function message(nodes: MessageNode[], prefix: string, context: IContext): string {
    const list = nodes.map((node, i) => {
        if (node.complex) {
            return groupInstance(node, prefix, context)
        } else {
            return segInstance(node, prefix, context)
        }
    }).join(',\n\t');

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
