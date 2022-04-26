import { TestCase } from '../model/parser';

export const LOI: TestCase = {
    profile: {
        name: 'LOI',
        nodes: [
            { name: 'MSH', cardinality: '1', complex: false },
            { name: 'ARV', cardinality: '*', complex: false },
            { name: 'SFT', cardinality: '*', complex: false },
            { name: 'NTE', cardinality: '*', complex: false },
            {
                name: 'PATIENT', cardinality: '1', complex: true, children: [
                    { name: 'PID', cardinality: '1', complex: false },
                    { name: 'PD1', cardinality: '1', complex: false },
                    { name: 'NTE', cardinality: '*', complex: false },
                    { name: 'NK1', cardinality: '*', complex: false },
                    {
                        name: 'PATIENT_VISIT', cardinality: '1', complex: true, children: [
                            { name: 'PV1', cardinality: '1', complex: false },
                            { name: 'PV2', cardinality: '1', complex: false },
                        ]
                    },
                    {
                        name: 'INSURANCE', cardinality: '*', complex: true, children: [
                            { name: 'IN1', cardinality: '1', complex: false },
                            { name: 'IN2', cardinality: '1', complex: false },
                            { name: 'IN3', cardinality: '1', complex: false },
                        ]
                    },
                    { name: 'GT1', cardinality: '1', complex: false },
                    { name: 'AL1', cardinality: '*', complex: false },
                ]
            },
            {
                name: 'ORDER', cardinality: '*', complex: true, children: [
                    { name: 'ORC', cardinality: '1', complex: false },
                    {
                        name: 'TIMING', cardinality: '1', complex: true, children: [
                            { name: 'TQ1', cardinality: '1', complex: false },
                            { name: 'TQ2', cardinality: '*', complex: false },
                        ]
                    },
                    {
                        name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, children: [
                            { name: 'OBR', cardinality: '1', complex: false },
                            { name: 'TCD', cardinality: '1', complex: false },
                            { name: 'NTE', cardinality: '*', complex: false },
                            { name: 'PRT', cardinality: '*', complex: false },
                            { name: 'CTD', cardinality: '1', complex: false },
                            { name: 'DG1', cardinality: '*', complex: false },
                            {
                                name: 'OBSERVATION', cardinality: '*', complex: true, children: [
                                    { name: 'OBX', cardinality: '1', complex: false },
                                    { name: 'TCD', cardinality: '1', complex: false },
                                    { name: 'NTE', cardinality: '*', complex: false },
                                ]
                            },
                            {
                                name: 'SPECIMEN', cardinality: '*', complex: true, children: [
                                    { name: 'SPM', cardinality: '1', complex: false },
                                    { name: 'OBX', cardinality: '*', complex: false },
                                    {
                                        name: 'CONTAINER', cardinality: '*', complex: true, children: [
                                            { name: 'SAC', cardinality: '1', complex: false },
                                            { name: 'OBX', cardinality: '1', complex: false },
                                        ]
                                    }
                                ]
                            },
                            { name: 'SGH', cardinality: '1', complex: false },
                            {
                                name: 'PRIOR_RESULT', cardinality: '*', complex: true, children: [
                                    {
                                        name: 'PATIENT_PRIOR', cardinality: '1', complex: true, children: [
                                            { name: 'PID', cardinality: '1', complex: false },
                                            { name: 'PD1', cardinality: '1', complex: false },
                                        ]
                                    },
                                    {
                                        name: 'PATIENT_VISIT_PRIOR', cardinality: '1', complex: true, children: [
                                            { name: 'PV1', cardinality: '1', complex: false },
                                            { name: 'PV2', cardinality: '1', complex: false },
                                        ]
                                    },
                                    { name: 'AL1', cardinality: '*', complex: false },
                                    {
                                        name: 'ORDER_PRIOR', cardinality: '*', complex: true, children: [
                                            { name: 'ORC', cardinality: '1', complex: false },
                                            { name: 'OBR', cardinality: '1', complex: false },
                                            { name: 'NTE', cardinality: '*', complex: false },
                                            {
                                                name: 'TIMING_PRIOR', cardinality: '1', complex: true, children: [
                                                    { name: 'TQ1', cardinality: '1', complex: false },
                                                    { name: 'TQ2', cardinality: '*', complex: false },
                                                ]
                                            },
                                            {
                                                name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, children: [
                                                    { name: 'OBX', cardinality: '1', complex: false },
                                                    { name: 'NTE', cardinality: '*', complex: false },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                            { name: 'SGT', cardinality: '1', complex: false },
                        ]
                    },
                    { name: 'FT1', cardinality: '*', complex: false },
                    { name: 'CTI', cardinality: '*', complex: false },
                    { name: 'BLG', cardinality: '1', complex: false },
                ]
            },
        ]
    },
    expectations: [
        {
            message: {
                name: 'JAIMIE_VALID_MESSAGE',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "SPM",
                    "SGT",
                    "ORC",
                    "OBR",
                    "SPM",
                    "SGT",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                { name: 'SGT', cardinality: '1', complex: false, instance: 1 }
                            ]
                        }
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 2, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                { name: 'SGT', cardinality: '1', complex: false, instance: 1 }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            message: {
                name: 'JAIMIE_VALID_MESSAGE_WITH_ORDER_PRIOR',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "SPM",
                    "ORC",
                    "OBR",
                    "SGT",
                    "ORC",
                    "OBR",
                    "SPM",
                    "SGT",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 1, children: [
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        },
                                    ]
                                },
                                { name: 'SGT', cardinality: '1', complex: false, instance: 1 }
                            ]
                        }
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 2, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                { name: 'SGT', cardinality: '1', complex: false, instance: 1 }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
}