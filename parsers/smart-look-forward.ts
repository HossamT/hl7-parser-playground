import { ParserFn, MessageNode, ProfileNode } from '../model/parser';
import { span } from '../utils/parser';
import _ from 'lodash';
import { greedyParser } from './greedy';

const match = (line: string, node: ProfileNode): boolean => {
    switch (node.complex) {
        case true:
            const [primitive_head, remaining] = span((node.children || []), child => child.complex === false);
            if (primitive_head.length === 0) {
                return remaining.some((child) => {
                    return match(line, child);
                })
            } else {
                return primitive_head.some((child) => {
                    return match(line, child);
                })
            }

        case false:
            return line === node.name;
    }
}

export const smartLookForward: ParserFn = greedyParser(match);