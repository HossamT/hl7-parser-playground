import { ParserFn, MessageNode, ProfileNode } from '../main';
import { span, makeNode } from '../utils';
import _ from 'lodash';

export const greedyParser: ParserFn = (profile: ProfileNode[], message: string[]): [MessageNode[], string[]] => {
    return parse(profile, message);
}

function parse(nodes: ProfileNode[], stack: string[]): [MessageNode[], string[]] {
    let ps: MessageNode[] = [];
    let rs: string[] = [...stack];

    for (const node of nodes) {
        switch (node.complex) {
            case true:
                const [parsed_, remaining_] = parseComplex(rs, node, 1)
                ps = [
                    ...ps,
                    ...parsed_
                ];
                rs = [
                    ...remaining_,
                ];
                break;
            case false:
                const [parsed, remaining] = parsePrimitive(rs, node);
                ps = [
                    ...ps,
                    ...parsed
                ];
                rs = [
                    ...remaining
                ];
                break;
        }
    }
    return [ps, rs];
    throw new Error('Issue ?');
}


function parseComplex(stack: string[], node: ProfileNode, i: number): [MessageNode[], string[]] {
    const matchAt = (node.children || []).findIndex((child) => match(stack[0], child))
    if (matchAt !== -1) {


        const [_m, nodes] = span((node.children || []), (_children, i) => i !== matchAt);

        const [parsed, remaining] = parse(nodes, stack);

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
            const [instances, left] = parseComplex(remaining, node, i + 1);
            return [[instance, ...instances], left]

        } else {
            return [[instance], remaining]
        }

    } else {
        return [[], stack]
    }
}

function parsePrimitive(stack: string[], node: ProfileNode): [MessageNode[], string[]] {
    // Span is greedy
    const [matches, remaining] = span(stack, line => match(line, node));
    if (matches.length > 0) {
        return [matches.map((_x, i) => makeNode(node, false, i + 1)), remaining]
    } else {
        return [[], remaining]
    }
}

function makeEmptyNode(parsed: MessageNode[], node: ProfileNode): MessageNode[] {
    if (parsed.length === 0) {
        return [makeNode(node, true, 0)];
    } else {
        return [];
    }
}

export function match(line: string, node: ProfileNode): boolean {
    switch (node.complex) {
        case true:
            return (node.children || []).some((child) => {
                return match(line, child);
            })
        case false:
            return line === node.name;
    }
}