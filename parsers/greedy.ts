import { ParserFn, MessageNode, ProfileNode } from '../main';
import { span, makeNode } from '../utils';
import _ from 'lodash';

export function greedyParser(match: (line: string, node: ProfileNode) => boolean): ParserFn {
    return (profile: ProfileNode[], message: string[]): [MessageNode[], string[]] => {
        return parse(profile, message, true, match);
    }
}

function parse(nodes: ProfileNode[], stack: string[], head: boolean, match: (line: string, node: ProfileNode) => boolean): [MessageNode[], string[]] {
    let ps: MessageNode[] = [];
    let rs: string[] = [...stack];
    for (const node of nodes) {
        switch (node.complex) {
            case true:
                const [parsed_, remaining_] = parseComplex(rs, node, 1, match)
                ps = [
                    ...ps,
                    ...parsed_
                ];
                rs = [
                    ...remaining_,
                ];
                break;
            case false:
                const [parsed, remaining] = parsePrimitive(rs, node, head, match);
                ps = [
                    ...ps,
                    ...parsed
                ];
                rs = [
                    ...remaining
                ];
                break;
        }
        head = false;
    }
    return [ps, rs];
}


function parseComplex(stack: string[], node: ProfileNode, i: number, match: (line: string, node: ProfileNode) => boolean): [MessageNode[], string[]] {
    if (match(stack[0], node)) {
        const matchAt = (node.children || []).findIndex((child) => match(stack[0], child))
        if (matchAt !== -1) {


            const [_m, nodes] = span((node.children || []), (_children, i) => i !== matchAt);

            const [parsed, remaining] = parse(nodes, stack, _m.length === 0, match);

            const instance: MessageNode = {
                ...makeNode(node, false, i),
                children: [
                    ...parsed,
                ]
            }

            const exists = parsed.length > 0;
            const hasMore = remaining.length > 0;

            // Greed!
            if (exists && hasMore) {
                const [instances, left] = parseComplex(remaining, node, i + 1, match);
                return [[instance, ...instances], left]

            } else {
                return [[instance], remaining]
            }

        } else {
            return [[], stack]
        }
    } else {
        return [[], stack]
    }
}

function parsePrimitive(stack: string[], node: ProfileNode, head: boolean, match: (line: string, node: ProfileNode) => boolean): [MessageNode[], string[]] {
    if (!head) {
        // Span is greedy
        const [matches, remaining] = span(stack, line => match(line, node));
        if (matches.length > 0) {
            return [matches.map((_x, i) => makeNode(node, false, i + 1)), remaining]
        } else {
            return [[], remaining]
        }
    } else {
        if (match(stack[0], node)) {
            stack.splice(0, 1);
            return [[makeNode(node, false, 1)], stack]
        } else {
            return [[], stack]
        }
    }
}


