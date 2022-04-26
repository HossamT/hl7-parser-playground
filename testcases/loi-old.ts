import { TestCase } from '../model/parser';

export const LOIv1: TestCase = {
    profile: {
        name: 'LOIv1',
        nodes: [
            { name: 'MSH', cardinality: '1', complex: false },
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
                            {
                                name: 'PRIOR_RESULT', cardinality: '*', complex: true, children: [
                                    { name: 'SGH', cardinality: '1', complex: false },
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
                                                name: 'TIMING_PRIOR', cardinality: '*', complex: true, children: [
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
                                    { name: 'SGT', cardinality: '1', complex: false },
                                ]
                            },
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
                name: 'PT',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "DG1",
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
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                            ]
                        },
                    ]
                },

            ]
        },
        {
            message: {
                name: 'Sed Rate',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "TQ1",
                    "OBR",
                    "NTE",
                    "NTE",
                    "PRT",
                    "PRT",
                    "DG1",
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
                            name: 'TIMING', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'PRT', cardinality: '*', complex: false, instance: 2 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'CBC',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "PRT",
                    "DG1",
                    "SPM",
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
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'Lipid Panel',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "PRT",
                    "DG1",
                    "DG1",
                    "OBX",
                    "SPM",
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
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 2 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'Lipid Panel FI',
                message: [
                    "MSH",
                    "PID",
                    "PV1",
                    "IN1",
                    "GT1",
                    "ORC",
                    "OBR",
                    "PRT",
                    "DG1",
                    "DG1",
                    "OBX",
                    "SPM",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'PATIENT_VISIT', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'PV1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'INSURANCE', cardinality: '*', complex: true, instance: 1, children: [
                                { name: 'IN1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        { name: 'GT1', cardinality: '1', complex: false, instance: 1 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 2 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'Culture and Suscep',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "PRT",
                    "DG1",
                    "SPM",
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
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'Reflex Hepatitis',
                message: [
                    "MSH",
                    "PID",
                    "NK1",
                    "ORC",
                    "OBR",
                    "DG1",
                    "OBX",
                    "SPM",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                        { name: 'NK1', cardinality: '*', complex: false, instance: 1 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'Pap Smear',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "DG1",
                    "OBX",
                    "OBX",
                    "SPM",
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
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'GHP',
                message: [
                    "MSH",
                    "PID",
                    "NK1",
                    "NK1",
                    "ORC",
                    "TQ1",
                    "OBR",
                    "DG1",
                    "DG1",
                    "DG1",
                    "ORC",
                    "TQ1",
                    "OBR",
                    "DG1",
                    /* 					"ORC",
                                        "TQ1",
                                        "OBR",
                                        "DG1",  */
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                        { name: 'NK1', cardinality: '*', complex: false, instance: 1 },
                        { name: 'NK1', cardinality: '*', complex: false, instance: 2 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'TIMING', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 2 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 3 },
                            ]
                        },
                    ]
                },
                // this is where it fails
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 2, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'TIMING', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                            ]
                        },
                    ]
                },
                /*			{
                                name: 'ORDER', cardinality: '*', complex: true, instance: 3, children: [
                                    { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                    {
                                        name: 'TIMING', cardinality: '1', complex: true, instance: 1, children: [
                                            { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                                        ]
                                    },
                                    {
                                        name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                            { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                            { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                        ]
                                    },
                                ]
                            }, */
            ]
        },
        {
            message: {
                name: 'Creatinine Clearance',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "DG1",
                    "DG1",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SPM",
                    "SPM",
                    "ORC",
                    "OBR",
                    "DG1",
                    "DG1",
                    "OBX",
                    "OBX",
                    "SPM",
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
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 2 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 2, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 2 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'Prostate Biopsy',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
                    "SPM",
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
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 4, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 5, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 6, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 7, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 8, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 9, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 10, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'all segments - no reps',
                message: [
                    "MSH",
                    "SFT",
                    "NTE",
                    "PID",
                    "PD1",
                    "NTE",
                    "NK1",
                    "PV1",
                    "PV2",
                    "IN1",
                    "IN2",
                    "IN3",
                    "GT1",
                    "AL1",
                    "ORC",
                    "TQ1",
                    "TQ2",
                    "OBR",
                    "TCD",
                    "NTE",
                    "PRT",
                    "CTD",
                    "DG1",
                    "OBX",
                    "TCD",
                    "NTE",
                    "SPM",
                    "OBX",
                    "SAC",
                    "OBX",
                    "SGH",
                    "PID",
                    "PD1",
                    "PV1",
                    "PV2",
                    "AL1",
                    "ORC",
                    "OBR",
                    "NTE",
                    "TQ1",
                    "TQ2",
                    "OBX",
                    "NTE",
                    "SGT",
                    "FT1",
                    "CTI",
                    "BLG",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                { name: 'SFT', cardinality: '*', complex: false, instance: 1 },
                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                        { name: 'PD1', cardinality: '1', complex: false, instance: 1 },
                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                        { name: 'NK1', cardinality: '*', complex: false, instance: 1 },
                        {
                            name: 'PATIENT_VISIT', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'PV1', cardinality: '1', complex: false, instance: 1 },
                                { name: 'PV2', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'INSURANCE', cardinality: '*', complex: true, instance: 1, children: [
                                { name: 'IN1', cardinality: '1', complex: false, instance: 1 },
                                { name: 'IN2', cardinality: '1', complex: false, instance: 1 },
                                { name: 'IN3', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        { name: 'GT1', cardinality: '1', complex: false, instance: 1 },
                        { name: 'AL1', cardinality: '*', complex: false, instance: 1 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'TIMING', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                                { name: 'TQ2', cardinality: '*', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'TCD', cardinality: '1', complex: false, instance: 1 },
                                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'CTD', cardinality: '1', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'TCD', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'OBX', cardinality: '*', complex: false, instance: 1 },
                                        {
                                            name: 'CONTAINER', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'SAC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SGH', cardinality: '1', complex: false, instance: 1 },
                                        {
                                            name: 'PATIENT_PRIOR', cardinality: '1', complex: true, instance: 1, children: [
                                                { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'PD1', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        },
                                        {
                                            name: 'PATIENT_VISIT_PRIOR', cardinality: '1', complex: true, instance: 1, children: [
                                                { name: 'PV1', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'PV2', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        },
                                        { name: 'AL1', cardinality: '*', complex: false, instance: 1 },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                                {
                                                    name: 'TIMING_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                                                        { name: 'TQ2', cardinality: '*', complex: false, instance: 1 },
                                                    ]
                                                },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                                    ]
                                                },
                                            ]
                                        },
                                        { name: 'SGT', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                        { name: 'FT1', cardinality: '*', complex: false, instance: 1 },
                        { name: 'CTI', cardinality: '*', complex: false, instance: 1 },
                        { name: 'BLG', cardinality: '1', complex: false, instance: 1 },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'all segments - segment repetitions',
                message: [
                    "MSH",
                    "SFT",
                    "SFT",
                    "NTE",
                    "NTE",
                    "PID",
                    "PD1",
                    "NTE",
                    "NTE",
                    "NK1",
                    "NK1",
                    "PV1",
                    "PV2",
                    "IN1",
                    "IN2",
                    "IN3",
                    "GT1",
                    "AL1",
                    "AL1",
                    "ORC",
                    "TQ1",
                    "TQ2",
                    "TQ2",
                    "OBR",
                    "TCD",
                    "NTE",
                    "NTE",
                    "PRT",
                    "PRT",
                    "CTD",
                    "DG1",
                    "DG1",
                    "OBX",
                    "TCD",
                    "NTE",
                    "NTE",
                    "SPM",
                    "OBX",
                    "OBX",
                    "SAC",
                    "OBX",
                    "SGH",
                    "PID",
                    "PD1",
                    "PV1",
                    "PV2",
                    "AL1",
                    "AL1",
                    "ORC",
                    "OBR",
                    "NTE",
                    "NTE",
                    "TQ1",
                    "TQ2",
                    "TQ2",
                    "OBX",
                    "NTE",
                    "NTE",
                    "SGT",
                    "FT1",
                    "FT1",
                    "CTI",
                    "CTI",
                    "BLG",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                { name: 'SFT', cardinality: '*', complex: false, instance: 1 },
                { name: 'SFT', cardinality: '*', complex: false, instance: 2 },
                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                        { name: 'PD1', cardinality: '1', complex: false, instance: 1 },
                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                        { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                        { name: 'NK1', cardinality: '*', complex: false, instance: 1 },
                        { name: 'NK1', cardinality: '*', complex: false, instance: 2 },
                        {
                            name: 'PATIENT_VISIT', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'PV1', cardinality: '1', complex: false, instance: 1 },
                                { name: 'PV2', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        {
                            name: 'INSURANCE', cardinality: '*', complex: true, instance: 1, children: [
                                { name: 'IN1', cardinality: '1', complex: false, instance: 1 },
                                { name: 'IN2', cardinality: '1', complex: false, instance: 1 },
                                { name: 'IN3', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                        { name: 'GT1', cardinality: '1', complex: false, instance: 1 },
                        { name: 'AL1', cardinality: '*', complex: false, instance: 1 },
                        { name: 'AL1', cardinality: '*', complex: false, instance: 2 },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'TIMING', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                                { name: 'TQ2', cardinality: '*', complex: false, instance: 1 },
                                { name: 'TQ2', cardinality: '*', complex: false, instance: 2 },
                            ]
                        },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                { name: 'TCD', cardinality: '1', complex: false, instance: 1 },
                                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                                { name: 'PRT', cardinality: '*', complex: false, instance: 1 },
                                { name: 'PRT', cardinality: '*', complex: false, instance: 2 },
                                { name: 'CTD', cardinality: '1', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                { name: 'DG1', cardinality: '*', complex: false, instance: 2 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'TCD', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                        { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'OBX', cardinality: '*', complex: false, instance: 1 },
                                        { name: 'OBX', cardinality: '*', complex: false, instance: 2 },
                                        {
                                            name: 'CONTAINER', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'SAC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SGH', cardinality: '1', complex: false, instance: 1 },
                                        {
                                            name: 'PATIENT_PRIOR', cardinality: '1', complex: true, instance: 1, children: [
                                                { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'PD1', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        },
                                        {
                                            name: 'PATIENT_VISIT_PRIOR', cardinality: '1', complex: true, instance: 1, children: [
                                                { name: 'PV1', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'PV2', cardinality: '1', complex: false, instance: 1 },
                                            ]
                                        },
                                        { name: 'AL1', cardinality: '*', complex: false, instance: 1 },
                                        { name: 'AL1', cardinality: '*', complex: false, instance: 2 },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                                { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                                                {
                                                    name: 'TIMING_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
                                                        { name: 'TQ2', cardinality: '*', complex: false, instance: 1 },
                                                        { name: 'TQ2', cardinality: '*', complex: false, instance: 2 },
                                                    ]
                                                },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                                        { name: 'NTE', cardinality: '*', complex: false, instance: 2 },
                                                    ]
                                                },
                                            ]
                                        },
                                        { name: 'SGT', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                        { name: 'FT1', cardinality: '*', complex: false, instance: 1 },
                        { name: 'FT1', cardinality: '*', complex: false, instance: 2 },
                        { name: 'CTI', cardinality: '*', complex: false, instance: 1 },
                        { name: 'CTI', cardinality: '*', complex: false, instance: 2 },
                        { name: 'BLG', cardinality: '1', complex: false, instance: 1 },
                    ]
                },
            ]
        },
        {
            message: {
                name: 'multiple groups reps',
                message: [
                    "MSH",
                    "PID",
                    "IN1",
                    "IN1",
                    "ORC",
                    "OBR",
                    "OBX",
                    "NTE",
                    "OBX",
                    "NTE",
                    "OBX",
                    "OBX",
                    "SPM",
                    "SPM",
                    "SPM",
                    "OBX",
                    "SPM",
                    "OBX",
                ]
            },
            parseAs: [
                { name: 'MSH', cardinality: '1', complex: false, instance: 1 },
                {
                    name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
                        { name: 'PID', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'INSURANCE', cardinality: '*', complex: true, instance: 1, children: [
                                { name: 'IN1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        }, {
                            name: 'INSURANCE', cardinality: '*', complex: true, instance: 2, children: [
                                { name: 'IN1', cardinality: '1', complex: false, instance: 1 },
                            ]
                        },
                    ]
                },
                {
                    name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
                        { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                        {
                            name: 'OBSERVATION_REQUEST', cardinality: '1', complex: true, instance: 1, children: [
                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'NTE', cardinality: '*', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 4, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'OBX', cardinality: '*', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'SPECIMEN', cardinality: '*', complex: true, instance: 4, children: [
                                        { name: 'SPM', cardinality: '1', complex: false, instance: 1 },
                                        { name: 'OBX', cardinality: '*', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },

        {
            message: {
                name: 'one order group with prior results',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "DG1",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SGH",
                    "ORC",
                    "OBR",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SGT"
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
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },

                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SGH', cardinality: '1', complex: false, instance: 1 },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 2, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 3, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                },
                                            ]
                                        },
                                        { name: 'SGT', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },

        {
            message: {
                name: 'one order group with multiple prior results',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "DG1",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SGH",
                    "ORC",
                    "OBR",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SGT",
                    "SGH",
                    "ORC",
                    "OBR",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SGT"
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
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },

                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SGH', cardinality: '1', complex: false, instance: 1 },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 2, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 3, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                },
                                            ]
                                        },
                                        { name: 'SGT', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'SGH', cardinality: '1', complex: false, instance: 1 },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 2, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 3, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                },
                                            ]
                                        },
                                        { name: 'SGT', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },


        {
            message: {
                name: 'one order, one prior result, multiple order prior',
                message: [
                    "MSH",
                    "PID",
                    "ORC",
                    "OBR",
                    "DG1",
                    "OBX",
                    "OBX",
                    "OBX",
                    "SGH",
                    "ORC",
                    "OBR",
                    "OBX",
                    "OBX",
                    "OBX",
                    "ORC",
                    "OBR",
                    "OBX",
                    "OBX",
                    "OBX",
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
                                { name: 'DG1', cardinality: '*', complex: false, instance: 1 },
                                {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 2, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                }, {
                                    name: 'OBSERVATION', cardinality: '*', complex: true, instance: 3, children: [
                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },

                                {
                                    name: 'PRIOR_RESULT', cardinality: '*', complex: true, instance: 1, children: [
                                        { name: 'SGH', cardinality: '1', complex: false, instance: 1 },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 2, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 3, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'ORDER_PRIOR', cardinality: '*', complex: true, instance: 2, children: [
                                                { name: 'ORC', cardinality: '1', complex: false, instance: 1 },
                                                { name: 'OBR', cardinality: '1', complex: false, instance: 1 },
                                                {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 1, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 2, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                }, {
                                                    name: 'OBSERVATION_PRIOR', cardinality: '*', complex: true, instance: 3, children: [
                                                        { name: 'OBX', cardinality: '1', complex: false, instance: 1 },
                                                    ]
                                                },
                                            ]
                                        },
                                        { name: 'SGT', cardinality: '1', complex: false, instance: 1 },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        }


        /* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        } */


        /* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        } */


        /* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        } */


        /* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        } */


        /* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        } */


        /* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        } */
    ]
}