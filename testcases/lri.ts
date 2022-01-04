import { TestCase } from '../main';
export const ORU_LRI: TestCase = {
    profile: {
        name: 'ORU_LRI',
        nodes: [
            { name: 'MSH', cardinality: '1', complex: false},
            { name: 'SFT', cardinality: '*', complex: false},
            {
                name: 'PATIENT_RESULT', cardinality: '*', complex: true, children: [
					{
                        name: 'PATIENT', cardinality: '1', complex: true, children: [
							{ name: 'PID', cardinality: '1', complex: false},
							{ name: 'PD1', cardinality: '1', complex: false},
							{ name: 'NTE', cardinality: '*', complex: false},
							{ name: 'NK1', cardinality: '*', complex: false},
							{
								name: 'VISIT', cardinality: '1', complex: true, children: [
									{ name: 'PV1', cardinality: '1', complex: false},
									{ name: 'PV2', cardinality: '1', complex: false},
								]
							}
                        ]
                    },
					{
						name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, children: [
							{ name: 'ORC', cardinality: '1', complex: false},
							{ name: 'OBR', cardinality: '1', complex: false},
							{ name: 'NTE', cardinality: '*', complex: false},
							{
								name: 'TIMING_QTY', cardinality: '*', complex: true, children: [
									{ name: 'TQ1', cardinality: '1', complex: false},
									{ name: 'TQ2', cardinality: '*', complex: false},
								]
							},
							{ name: 'CTD', cardinality: '1', complex: false},
							{
								name: 'OBSERVATION', cardinality: '*', complex: true, children: [
									{ name: 'OBX', cardinality: '1', complex: false},
									{ name: 'NTE', cardinality: '*', complex: false},
								]
							},
							{ name: 'FT1', cardinality: '*', complex: false},
							{ name: 'CTI', cardinality: '*', complex: false},
							{
								name: 'SPECIMEN', cardinality: '*', complex: true, children: [
									{ name: 'SPM', cardinality: '1', complex: false},
									{ name: 'OBX', cardinality: '*', complex: false},
								]
							},
						]
					},
                ]
            },
			{ name: 'DSC', cardinality: '1', complex: false},
        ]
    },
    expectations: [
		 {
            message: {
                name: 'Sed rate #1',
                message: [
					"MSH",
					"PID",
					"ORC",
					"OBR",
					"NTE",
					"TQ1",
					"OBX",
					"SPM"
                ]
            },
            parseAs: [
				{ name: 'MSH', cardinality: '1', complex: false, instance: 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance: 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance: 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance: 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance: 1 },
								{ name: 'NTE', cardinality: '*', complex: false, instance: 1 },
								{
									name: 'TIMING_QTY', cardinality: '*', complex: true, instance: 1, children: [
										{ name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
									]
								},
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
				}
            ]
        },
		{
            message: {
                name: 'Sed rate #1 - no ORC',
                message: [
					"MSH",
					"PID",
					"OBR",
					"NTE",
					"TQ1",
					"OBX",
					"SPM"
                ]
            },
            parseAs: [
				{ name: 'MSH', cardinality: '1', complex: false, instance: 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance: 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance: 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
								{ name: 'OBR', cardinality: '1', complex: false, instance: 1 },
								{ name: 'NTE', cardinality: '*', complex: false, instance: 1 },
								{
									name: 'TIMING_QTY', cardinality: '*', complex: true, instance: 1, children: [
										{ name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
									]
								},
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
				}
            ]
        },
		{
            message: {
                name: 'Sed rate #2',
                message: [
					"MSH",
					"PID",
					"ORC",
					"OBR",
					"NTE",
					"TQ1",
					"OBX",
					"NTE",
					"SPM"
                ]
            },
            parseAs: [
				{ name: 'MSH', cardinality: '1', complex: false, instance: 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance: 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance: 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance: 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance: 1 },
								{ name: 'NTE', cardinality: '*', complex: false, instance: 1 },
								{
									name: 'TIMING_QTY', cardinality: '*', complex: true, instance: 1, children: [
										{ name: 'TQ1', cardinality: '1', complex: false, instance: 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
										{ name: 'NTE', cardinality: '*', complex: false, instance: 1 },
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
				}
 
            ]
        },
		{
            message: {
                name: 'Sed rate #3',
                message: [
					"MSH",
					"PID",
					"ORC",
					"OBR",
					"SPM"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance: 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance: 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance: 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance: 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance: 1 },
								{
									name: 'SPECIMEN', cardinality: '*', complex: true, instance: 1, children: [
										{ name: 'SPM', cardinality: '1', complex: false, instance: 1 },
									]
								},
							]
						},
					]
				} 
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
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"SPM"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance: 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance: 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance: 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance: 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance: 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance: 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance: 1 },
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
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 5, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 6, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 7, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 8, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 9, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 10, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 11, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 12, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 13, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 14, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 15, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 16, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 17, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 18, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 19, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},
								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 20, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 21, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 22, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 23, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 24, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 25, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},								
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 26, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 27, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance: 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance: 28, children: [
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
				} 
            ]
        },
		{
            message: {
                name: 'Culture and susceptibility #2',
                message: [
					"MSH",
					"PID",
					"ORC",
					"OBR",
					"OBX",
					"OBX",
					"OBX",
					"SPM",
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
					"ORC",
					"OBR",
					"OBX",
					"OBX",
					"OBX"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance : 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance : 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance : 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance : 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'SPECIMEN', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'SPM', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
					]
				} 
            ]
        },
	 	{
            message: {
                name: 'Reflex #1',
                message: [
					"MSH",
					"PID",
					"ORC",
					"OBR",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"NTE",
					"SPM",
					"ORC",
					"OBR",
					"OBX"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance : 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance : 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance : 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance : 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 5, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 6, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 7, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 8, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 9, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
										{ name: 'NTE', cardinality: '*', complex: false, instance : 1 },
									]
								},
								{
									name: 'SPECIMEN', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'SPM', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
					]
				} 
            ]
        },
	 	{
            message: {
                name: 'Reflex #1 - no ORC',
                message: [
					"MSH",
					"PID",
					"OBR",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"NTE",
					"SPM",
					"OBR",
					"OBX"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance : 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance : 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance : 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance : 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 5, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 6, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 7, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 8, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 9, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
										{ name: 'NTE', cardinality: '*', complex: false, instance : 1 },
									]
								},
								{
									name: 'SPECIMEN', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'SPM', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
					]
				} 
            ]
        },	
	 	{
            message: {
                name: 'Reflex #1 - the first ORC present',
                message: [
					"MSH",
					"PID",
					"ORC",
					"OBR",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"NTE",
					"SPM",
					"OBR",
					"OBX"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance : 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance : 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance : 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance : 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 5, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 6, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 7, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 8, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 9, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
										{ name: 'NTE', cardinality: '*', complex: false, instance : 1 },
									]
								},
								{
									name: 'SPECIMEN', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'SPM', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
					]
				} 
            ]
        },
	 	{
            message: {
                name: 'Reflex #1 - the second ORC present',
                message: [
					"MSH",
					"PID",
					"OBR",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"OBX",
					"NTE",
					"SPM",
					"ORC",
					"OBR",
					"OBX"
                ]
            },
            parseAs: [
 				{ name: 'MSH', cardinality: '1', complex: false, instance : 1 },
				{
					name: 'PATIENT_RESULT', cardinality: '*', complex: true, instance : 1, children: [
						{
							name: 'PATIENT', cardinality: '1', complex: true, instance : 1, children: [
								{ name: 'PID', cardinality: '1', complex: false, instance : 1 },
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 5, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 6, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 7, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 8, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 9, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
										{ name: 'NTE', cardinality: '*', complex: false, instance : 1 },
									]
								},
								{
									name: 'SPECIMEN', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'SPM', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
						{
							name: 'ORDER_OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
								{ name: 'ORC', cardinality: '1', complex: false, instance : 1 },
								{ name: 'OBR', cardinality: '1', complex: false, instance : 1 },
								{
									name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
										{ name: 'OBX', cardinality: '1', complex: false, instance : 1 },
									]
								},
							]
						},
					]
				} 
            ]
        },		
		/* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        }, */
				/* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        }, */
				/* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        }, */
				/* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        }, */
				/* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        }, */
				/* 		{
            message: {
                name: '',
                message: [

                ]
            },
            parseAs: [
  
            ]
        }, */
    ]
}