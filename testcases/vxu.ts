import { TestCase } from '../model/parser';

/* VXU profile from ONC tool*/
export const VXU: TestCase = {
	profile: {
		name: 'VXU',
		nodes: [
			{ name: 'MSH', cardinality: '1', complex: false },
			{ name: 'SFT', cardinality: '*', complex: false },
			{ name: 'PID', cardinality: '1', complex: false },
			{ name: 'PD1', cardinality: '1', complex: false },
			{ name: 'NK1', cardinality: '*', complex: false },
			{
				name: 'PATIENT', cardinality: '1', complex: true, children: [
					{ name: 'PV1', cardinality: '1', complex: false },
					{ name: 'PV2', cardinality: '1', complex: false },
				]
			},
			{ name: 'GT1', cardinality: '*', complex: false },
			{
				name: 'INSURANCE', cardinality: '*', complex: true, children: [
					{ name: 'IN1', cardinality: '1', complex: false },
					{ name: 'IN2', cardinality: '1', complex: false },
					{ name: 'IN3', cardinality: '1', complex: false },
				]
			},
			{
				name: 'ORDER', cardinality: '*', complex: true, children: [
					{ name: 'ORC', cardinality: '1', complex: false },
					{
						name: 'TIMING', cardinality: '*', complex: true, children: [
							{ name: 'TQ1', cardinality: '1', complex: false },
							{ name: 'TQ2', cardinality: '1', complex: false },
						]
					},
					{ name: 'RXA', cardinality: '1', complex: false },
					{ name: 'RXR', cardinality: '1', complex: false },
					{
						name: 'OBSERVATION', cardinality: '*', complex: true, children: [
							{ name: 'OBX', cardinality: '1', complex: false },
							{ name: 'NTE', cardinality: '1', complex: false },
						]
					}
				]
			},
		]
	},
	expectations: [
		{
			message: {
				name: 'context free example',
				message: [
					"MSH",
					"PID",
					"PD1",
					"NK1",
					"ORC",
					"RXA",
					"RXR",
					"OBX",
					"OBX",
					"OBX",
					"OBX"
				]
			},
			parseAs: [
				{ name: 'MSH', cardinality: '1', complex: false, instance: 1 },
				{ name: 'PID', cardinality: '1', complex: false, instance: 1 },
				{ name: 'PD1', cardinality: '1', complex: false, instance: 1 },
				{ name: 'NK1', cardinality: '*', complex: false, instance: 1 },
				{
					name: 'ORDER', cardinality: '*', complex: true, instance: 1, children: [
						{ name: 'ORC', cardinality: '1', complex: false, instance: 1 },
						{ name: 'RXA', cardinality: '1', complex: false, instance: 1 },
						{ name: 'RXR', cardinality: '1', complex: false, instance: 1 },
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
					]
				},
			]
		},
		/* 		{
	message: {
		name: 'Admin_Child',
		message: [
			"MSH",
			"PID",
			"PD1",
			"NK1",
			"NK1",
			"ORC",
			"RXA",
			"RXR",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"ORC",
			"RXA",
			"RXR",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"ORC",
			"RXA",
			"RXR",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"ORC",
			"RXA",
			"ORC",
			"RXA"
		]
	},
	parseAs: [
		{ name: 'MSH', cardinality: '1', complex: false, instance : 1},
		{ name: 'PID', cardinality: '1', complex: false, instance : 1},
		{ name: 'PD1', cardinality: '1', complex: false, instance : 1},
		{ name: 'NK1', cardinality: '*', complex: false, instance : 1},
		{ name: 'NK1', cardinality: '*', complex: false, instance : 2},
		{
			name: 'ORDER', cardinality: '*', complex: true, instance : 1, children: [
				{ name: 'ORC', cardinality: '1', complex: false, instance : 1},
				{ name: 'RXA', cardinality: '1', complex: false, instance : 1},
				{ name: 'RXR', cardinality: '1', complex: false, instance : 1},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 5, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 6, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 7, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 8, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
			]
		},
		{
			name: 'ORDER', cardinality: '*', complex: true, instance : 2, children: [
				{ name: 'ORC', cardinality: '1', complex: false, instance : 1},
				{ name: 'RXA', cardinality: '1', complex: false, instance : 1},
				{ name: 'RXR', cardinality: '1', complex: false, instance : 1},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 1, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 2, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 3, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
				{
					name: 'OBSERVATION', cardinality: '*', complex: true, instance : 4, children: [
						{ name: 'OBX', cardinality: '1', complex: false, instance : 1},
					]
				},
			]
		},
	]
}, */
		/* 		{
	message: {
		name: '',
		message: [
			"MSH",
			"PID",
			"PD1",
			"ORC",
			"RXA",
			"RXR",
			"OBX",
			"OBX",
			"OBX",
			"OBX",
			"ORC",
			"RXA",
			"ORC",
			"RXA"
		]
	},
	parseAs: [
 
	]
}, */
		/* 		{
	message: {
		name: '',
		message: [
			"MSH",
			"PID",
			"PD1",
			"NK1",
			"ORC",
			"RXA",
			"RXR",
			"OBX",
			"OBX",
			"OBX",
			"OBX"
		]
	},
	parseAs: [
 
	]
}, */
		/* 		{
	message: {
		name: '',
		message: [
		"MSH",
		"PID",
		"PD1",
		"ORC",
		"RXA"
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