import path from 'path';
import * as fs from 'fs';
import { LOI } from '../testcases/loi-testcase';
import { LOIv1 } from '../testcases/loi-old';
import { VXU } from '../testcases/vxu';
import { ORU } from '../testcases/oru';
import { cwd } from 'process';
import { transformTestCase } from './transform';
import { TestCase } from '../model/parser';

const TESTCASEMAP: Record<string, TestCase> = {
    'LOI': LOI,
    'LOIv1': LOIv1,
    'ORU': ORU,
    'VXU': VXU
}

const TEMPLATE = path.join(__dirname, 'resources/template.scala');

function start(command: string) {
    if (command === 'ALL') {
        const testcases = Object.keys(TESTCASEMAP).reduce((acc, k) => {
            return [
                ...acc,
                { key: k, tc: TESTCASEMAP[k] },
            ]
        }, [] as { key: string, tc: TestCase }[]);
        generate(testcases);
    } else if (TESTCASEMAP[command]) {
        generate([{ key: command, tc: TESTCASEMAP[command] }])
    } else {
        throw new Error(`Unrecognized Command ${command}`);
    }
}

function generate(testCases: { key: string, tc: TestCase }[]) {
    const dest = path.join(cwd(), 'generated');
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }

    for (const test of testCases) {
        createTestFile(dest, test.key, test.tc);
    }
}

function createTestFile(dest: string, name: string, tc: TestCase) {
    const traitName = `${name}Spec`;
    const fileName = `${traitName}.scala`;
    const template = fs.readFileSync(TEMPLATE, { encoding: 'utf-8' });
    const testContent = transformTestCase(tc);
    const fileContent = template
        .replace('%trait%', traitName)
        .replace('%content%', testContent.payload);
    fs.writeFileSync(path.join(dest, fileName), fileContent);
    console.log(name);
    console.log('\n\t' + testContent.spec.join('\n\t') + '\n\t');
}

if (process.argv.length !== 3) {
    throw new Error(`One argument is required : \n\t${Object.keys(TESTCASEMAP).join('\n\t')}\n\tALL`);
} else {
    start(process.argv[2]);
}