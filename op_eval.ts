interface EvaluationResult {
    pass: number;
    fail: number;
}

enum ConstraintType {
    ATLEASTONE,
    ONE,
    ALL,
    COUNT,
}

interface Constraint {
    type: ConstraintType,
    value?: number;
}

type Operator = (a: any, b: any) => boolean;

function evaluate(a: any, b: any[], op: Operator): EvaluationResult {
    const evaluation = b.map((e) => op(a, e))
    return {
        pass: evaluation.filter((bool) => bool === true).length,
        fail: evaluation.filter((bool) => bool === false).length
    }
}

function innerMap(ev: EvaluationResult, constraint: Constraint): boolean {
    switch (constraint.type) {
        case ConstraintType.ATLEASTONE:
            return ev.pass >= 1;
        case ConstraintType.ONE:
            return ev.pass === 1;
        case ConstraintType.ALL:
            return ev.fail === 0;
        case ConstraintType.COUNT:
            return ev.pass === constraint.value;
    }
}

function outerMap(inner: boolean[], constraint: Constraint): boolean {
    const pass = inner.filter((bool) => bool === true).length
    switch (constraint.type) {
        case ConstraintType.ATLEASTONE:
            return pass >= 1;
        case ConstraintType.ONE:
            return pass === 1;
        case ConstraintType.ALL:
            return pass === inner.length;
        case ConstraintType.COUNT:
            return pass === constraint.value;
    }
}

function compare(constraintA: Constraint, listA: any, op: Operator, constraintB: Constraint, listB: any): boolean {
    const evalResult = listA.map((a: any) => evaluate(a, listB, op))
    const inner = evalResult.map((ev: any) => innerMap(ev, constraintB))
    return outerMap(inner, constraintA)
}

function constraintString(constraint: Constraint) {
    switch (constraint.type) {
        case ConstraintType.ATLEASTONE:
            return 'At least one element from ';
        case ConstraintType.ONE:
            return 'Exactly one element from ';
        case ConstraintType.ALL:
            return 'All elements from ';
        case ConstraintType.COUNT:
            return `${constraint.value} elements from `;
    }
}

function str(constraintA: Constraint, listA: any, op: string, constraintB: Constraint, listB: any) {
    return `${constraintString(constraintA)} ${JSON.stringify(listA)} ${op} ${constraintString(constraintB)} ${JSON.stringify(listB)}`
}

const eq: Operator = (a, b) => a === b;
const lt: Operator = (a, b) => a < b;
const gt: Operator = (a, b) => a > b;


const allConstraints: Constraint[] = [
    {
        type: ConstraintType.ATLEASTONE,
    },
    {
        type: ConstraintType.ONE,
    },
    {
        type: ConstraintType.ALL,
    },
    {
        type: ConstraintType.COUNT,
        value: 2,
    }
]

const examples = [
    [1, 2, 3],
    [1, 1, 1, 1],
    [1, 2, 2],
    [1],
    [4, 5, 6],
    [2],
    [1, 1, 1]
]

for (const e1 of examples) {
    for (const e2 of examples) {
        for (const c1 of allConstraints) {
            for (const c2 of allConstraints) {
                const res = compare(c1, e1, eq, c2, e2);
                console.log(str(c1, e1, ' equals ', c2, e2) + ' => ' + res);
            }
        }
    }
}