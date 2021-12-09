import * as _ from 'lodash';
import parsers from './parsers';
import testcases from './testcases';

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



export function testCaseRunner(parsers: Parser[], testcases: TestCase[]) {
    const failedParser: string[] = [];
    console.log(`Running ${testcases.length} testcases on ${parsers.length} parsers`);

    for (const parser of parsers) {
        console.log(`\tTesting Parser ${parser.name}`);
        const failedTest: string[] = [];
        for (const test of testcases) {
            console.log(`\t\tRunning tests for profile : ${test.profile.name}`);
            const failedMessage: string[] = [];
            for (const expectation of test.expectations) {
                const [result, remaining] = parser.fn(test.profile.nodes, expectation.message.message);
                const stringify_result = JSON.stringify(result, null, 2);
                const stringify_expectation = JSON.stringify(expectation.parseAs, null, 2);

                if (stringify_result !== stringify_expectation) {
                    failedMessage.push(expectation.message.name || '');
                    console.log(`\t\t\t* Test Message : ${expectation.message.name} => Failed`);
                } else {
                    console.log(`\t\t\t* Test Message : ${expectation.message.name} => Success`);
                }
            }
            if (failedMessage.length > 0) {
                failedTest.push(test.profile.name)
                console.log(`\t\t * Profile : ${test.profile.name} - Failed ${failedMessage.length}/${test.expectations.length} (${failedMessage.join(',')})`);
            } else {
                console.log(`\t\t * Profile : ${test.profile.name} - Success ${test.expectations.length}/${test.expectations.length}`);
            }
        }
        if (failedTest.length > 0) {
            failedParser.push(parser.name)
            console.log(`\t* Parser : ${parser.name} - Failed ${failedTest.length}/${testcases.length} (${failedTest.join(',')})`);
        } else {
            console.log(`\t* Parser : ${parser.name} - Success ${testcases.length}/${testcases.length}`);
        }
    }
    if (failedParser.length > 0) {
        console.log(`Parsers Failed ${failedParser.length}/${parsers.length} (${failedParser.join(',')})`);
    } else {
        console.log(`Parsers Success ${parsers.length}/${parsers.length}`);
    }
}

testCaseRunner(parsers, testcases);