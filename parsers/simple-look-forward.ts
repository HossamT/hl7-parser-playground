import { ParserFn, MessageNode, ProfileNode } from '../model/parser';
import { greedyParser } from './greedy';


const match = (line: string, node: ProfileNode): boolean => {
    switch (node.complex) {
        case true:
            return (node.children || []).some((child) => {
                return match(line, child);
            })
        case false:
            return line === node.name;
    }
}

export const simpleLookForward: ParserFn = greedyParser(match);