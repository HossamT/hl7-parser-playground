import { ProfileNode, MessageNode } from '../model/parser';


export function span<T>(list: T[], predicate: (node: T, index?: number) => boolean): [T[], T[]] {
    let stop = false;
    const matches = [];
    const remaining = [];
    let i = 0;
    for (const n of list) {
        if (stop || !predicate(n, i)) {
            remaining.push(n);
            stop = true;
        } else {
            matches.push(n);
        }
        i++;
    }
    return [matches, remaining];
}

export function makeNode(n: ProfileNode, missing?: boolean, i?: number): MessageNode {
    return {

        name: n.name,
        cardinality: n.cardinality,
        complex: n.complex,
        missing: missing ? true : undefined,
        instance: i,
    }
}

