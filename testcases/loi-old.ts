import { TestCase } from '../main';
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
                        name: 'TIMING', cardinality: '1', complex: true, children: [
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
/* 		{
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
 
            ]
        }, */
/* 		{
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
 
            ]
        }, */
/* 		{
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
 
            ]
        }, */
/* 		{
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
 
            ]
        }, */
/* 		{
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
 
            ]
        }, */
/* 		{
            message: {
                name: 'Reflex Hepatitis PH',
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
 
            ]
        }, */
/* 		{
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
 
            ]
        }, */
/* 		{
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
					"ORC",
					"TQ1",
					"OBR",
					"DG1",
                ]
            },
            parseAs: [
 
            ]
        }, */
/* 		{
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
 
            ]
        }, */
/* 		{
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
 
            ]
        } */
    ]
}