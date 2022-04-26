export interface Profile {
    name: string;
    nodes: ProfileNode[];
}

export interface Message {
    name?: string;
    message: string[];
}

export interface ProfileNode {
    name: string;
    cardinality: string;
    complex: boolean;
    children?: ProfileNode[];
}

export interface MessageNode {
    name: string;
    cardinality: string;
    complex: boolean;
    missing?: boolean;
    instance?: number;
    children?: MessageNode[];
}

export interface Expectation {
    message: Message;
    parseAs: MessageNode[];
}

export interface TestCase {
    profile: Profile;
    expectations: Expectation[];
}

export interface Parser {
    name: string;
    fn: ParserFn;
}

export type ParserFn = (profile: ProfileNode[], message: string[]) => [MessageNode[], string[]];
