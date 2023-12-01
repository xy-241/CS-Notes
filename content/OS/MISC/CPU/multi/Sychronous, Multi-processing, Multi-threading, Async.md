---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
	Threads are less resource heavy than process ^qnV0NHFK

Frequent Access to Shared Data ^RNzfUtBO

Single Core, CPU Bounded ^2E3HHoE5

Single Core, IO/Network Bounded ^jxHmKFg7

Multi Core, CPU Bounded ^Cbjkm5eX

Multi Core, IO/Network Bounded ^bR9i8e0q

Async
Synchronous ^scLY5XCQ

Multi-processing & Multi-threading will just result in context switching overhead ^vrb5OnD9

Multi-threading Async ^B9BRla3g

Multi-processing context switching too ex

Synchronous is is blocking, waiting time is all wasted ^gDYuYHwM

Async
Multi-threading  ^HPDd5hfw

Async should be slighly faster,
since only one thread to create,
and not context switching overhead(ignorable) ^AXO1bNY8

no ^Vm5k12YP

Async ^Tp8d77az

We need mutex to prevent race condition, and risk of deadlock for multi-threading ^8LToJsw6

yes ^QgrcKg7e

Multi-processing
Multi-threading ^jUsxbxsj

Async & Synchronous are single threaded,
cant take advantage of Multi Core ^khxb5OUH

Frequent Access to Shared Data ^4dYlbMgg

Conclusion: 
1)Async works well when there is single core, in both CPU & IO/Bounded tasks
2) Multi-processing cant make it ^P2eTQyyS

Muti-threading ^OZO6b19R

no ^NvW5f4t0

Multi-processing ^o4iAx7Vp

yes ^WV8suVOE

For multi-threading, Race conditions & deadlocks are complex to program with
Overhead incurred from mutex ^ojInYC9x

Multi-threading
Multi-processing
Async ^F1cS0y33

Want high concurrency ^RtWYA6U3

Multi-threading
Multi-processing
Async ^fcQLMJjj

No ^9PA9saVG

Synchronous means one thread that is blocking
So we can only carry out the next task when we finish waiting ^6GWsbRB8

Frequent Access to Shared Data ^kfvjFSOH

Multi-threading
Multi-processing
Async ^mZgwpXxo

No ^T6tStDzm

Multi-processing
Async ^oTm2TRXj

Yes ^oL9kRFuL


For multi-threading, Race conditions & deadlocks are complex to program with
Overhead incurred from mutex ^6wGy0qOc

Multi-processing
Async ^QbNBfZQ4

Multi-processing requires more resources to create
And context switching is exprensive if we want more processes than the number of CPU cores ^fgL08xbx

Yes ^6qVPpGF6

Frequent Access to Shared Data ^vbx1kRKe

Multi-threading Async ^ZtFyXIus

No ^UZwG22MS

Async ^EgFIR7kY

Yes ^IQbFEm27


For multi-threading, Race conditions & deadlocks are complex to program with
Overhead incurred from mutex ^NarY1BaA

Conclusion: 
1) Async doesn't work well when there is multi core, CPU bounded tasks
2) Async works well when there is multi core, IO/Network bounded tasks, the un-used cores can be used for CPU bounded tasks like encryption

3) Multi-processing shines when no high concurrency is needed ^M7ghc3bo

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.9.10",
	"elements": [
		{
			"type": "rectangle",
			"version": 359,
			"versionNonce": 217218669,
			"isDeleted": false,
			"id": "z5gpFWeDe-kULOhB1F962",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1235.5716015706832,
			"y": -1099.6058287415328,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 327,
			"height": 80,
			"seed": 1473660941,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "2E3HHoE5"
				},
				{
					"id": "gcZ7eM5t4DMTGDhPyGMcK",
					"type": "arrow"
				}
			],
			"updated": 1699861306705,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 530,
			"versionNonce": 826657453,
			"isDeleted": false,
			"id": "2E3HHoE5",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1191.8555600057418,
			"y": -1094.6058287415328,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 239.5679168701172,
			"height": 70,
			"seed": 74959373,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926279183,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "Single Core, CPU \nBounded",
			"rawText": "Single Core, CPU Bounded",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "z5gpFWeDe-kULOhB1F962",
			"originalText": "Single Core, CPU Bounded",
			"lineHeight": 1.25,
			"baseline": 60
		},
		{
			"type": "rectangle",
			"version": 247,
			"versionNonce": 706620301,
			"isDeleted": false,
			"id": "ipkYEnZmch2kj_YIAT-t_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1157.4475477214942,
			"y": -957.0738205265283,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 63,
			"seed": 1732953197,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "gcZ7eM5t4DMTGDhPyGMcK",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "scLY5XCQ"
				}
			],
			"updated": 1699860685665,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 219,
			"versionNonce": 962684963,
			"isDeleted": false,
			"id": "scLY5XCQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1127.9006727214942,
			"y": -949.5738205265283,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 128.90625,
			"height": 48,
			"seed": 2021794189,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861326655,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Async\nSynchronous",
			"rawText": "Async\nSynchronous",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ipkYEnZmch2kj_YIAT-t_",
			"originalText": "Async\nSynchronous",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "text",
			"version": 305,
			"versionNonce": 1442009667,
			"isDeleted": false,
			"id": "qnV0NHFK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 750.0672960334275,
			"y": -671.98769910378,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 544.3995971679688,
			"height": 25,
			"seed": 1800532739,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861231842,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "\tThreads are less resource heavy than process",
			"rawText": "\tThreads are less resource heavy than process",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "\tThreads are less resource heavy than process",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "diamond",
			"version": 522,
			"versionNonce": 331615501,
			"isDeleted": false,
			"id": "bx5SdgtSBtmrAeZjgqnAu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1231.2831550214798,
			"y": -428.89450066179916,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 315,
			"height": 303,
			"seed": 760984621,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "RNzfUtBO"
				},
				{
					"id": "asN0MTEWuhz-e6jhb65Xv",
					"type": "arrow"
				},
				{
					"id": "DWpcAbvUVwws9s-vV4684",
					"type": "arrow"
				},
				{
					"id": "NlhlpMiVYt0lPqOAhl4LQ",
					"type": "arrow"
				}
			],
			"updated": 1699860931930,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 673,
			"versionNonce": 286293645,
			"isDeleted": false,
			"id": "RNzfUtBO",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1138.473111686519,
			"y": -314.64450066179916,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 129.87991333007812,
			"height": 75,
			"seed": 123073411,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926279194,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Frequent \nAccess to \nShared Data",
			"rawText": "Frequent Access to Shared Data",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "bx5SdgtSBtmrAeZjgqnAu",
			"originalText": "Frequent Access to Shared Data",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "rectangle",
			"version": 479,
			"versionNonce": 880180483,
			"isDeleted": false,
			"id": "KJRvmKHfuNNeuVtgwDsaf",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1241.6512158696967,
			"y": -764.0758560848479,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 361,
			"height": 80,
			"seed": 681379011,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "jxHmKFg7"
				},
				{
					"id": "qR6-C3fUHgcOF2V45pvgI",
					"type": "arrow"
				}
			],
			"updated": 1699861308891,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 746,
			"versionNonce": 1703018317,
			"isDeleted": false,
			"id": "jxHmKFg7",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1231.167146045478,
			"y": -759.0758560848479,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 340.0318603515625,
			"height": 70,
			"seed": 1623553123,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926279196,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "Single Core, IO/Network \nBounded",
			"rawText": "Single Core, IO/Network Bounded",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "KJRvmKHfuNNeuVtgwDsaf",
			"originalText": "Single Core, IO/Network Bounded",
			"lineHeight": 1.25,
			"baseline": 60
		},
		{
			"type": "rectangle",
			"version": 587,
			"versionNonce": 294387021,
			"isDeleted": false,
			"id": "ptwYgrEaCws0G5KVMocwL",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 103.98255870624189,
			"y": -1128.3332555356571,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 301,
			"height": 80,
			"seed": 52316557,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Cbjkm5eX"
				},
				{
					"id": "CjinsY_KbeoYKGDaU65YC",
					"type": "arrow"
				}
			],
			"updated": 1699861313649,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 773,
			"versionNonce": 2124042253,
			"isDeleted": false,
			"id": "Cbjkm5eX",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 137.83459422870283,
			"y": -1123.3332555356571,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 233.29592895507812,
			"height": 70,
			"seed": 2031587309,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926279198,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "Multi Core, CPU \nBounded",
			"rawText": "Multi Core, CPU Bounded",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ptwYgrEaCws0G5KVMocwL",
			"originalText": "Multi Core, CPU Bounded",
			"lineHeight": 1.25,
			"baseline": 60
		},
		{
			"type": "rectangle",
			"version": 668,
			"versionNonce": 819100643,
			"isDeleted": false,
			"id": "5rLdGXX9-GBAFqmb5YV9r",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 141.38393227678273,
			"y": -170.21989758475877,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 510,
			"height": 80,
			"seed": 1158915011,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "bR9i8e0q"
				},
				{
					"id": "eIXULbRzRXkmabxY3Kd0P",
					"type": "arrow"
				}
			],
			"updated": 1699926446785,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1019,
			"versionNonce": 1682884205,
			"isDeleted": false,
			"id": "bR9i8e0q",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 173.49001137834523,
			"y": -147.71989758475877,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 445.787841796875,
			"height": 35,
			"seed": 319828835,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926279199,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "Multi Core, IO/Network Bounded",
			"rawText": "Multi Core, IO/Network Bounded",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "5rLdGXX9-GBAFqmb5YV9r",
			"originalText": "Multi Core, IO/Network Bounded",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "arrow",
			"version": 503,
			"versionNonce": 855601923,
			"isDeleted": false,
			"id": "gcZ7eM5t4DMTGDhPyGMcK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1072.5520483005278,
			"y": -1014.9866787742488,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 3.4901324562649734,
			"height": 53.02369982920834,
			"seed": 218221133,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653255,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "z5gpFWeDe-kULOhB1F962",
				"gap": 4.6191499672839775,
				"focus": -0.014786238250829033
			},
			"endBinding": {
				"elementId": "ipkYEnZmch2kj_YIAT-t_",
				"gap": 4.889158418512331,
				"focus": -0.15602492638950047
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-3.4901324562649734,
					53.02369982920834
				]
			]
		},
		{
			"type": "text",
			"version": 65,
			"versionNonce": 1387780397,
			"isDeleted": false,
			"id": "vrb5OnD9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -942.1303061007445,
			"y": -955.8414762411842,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 784.6592407226562,
			"height": 25,
			"seed": 1690732621,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699860684281,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-processing & Multi-threading will just result in context switching overhead",
			"rawText": "Multi-processing & Multi-threading will just result in context switching overhead",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Multi-processing & Multi-threading will just result in context switching overhead",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 393,
			"versionNonce": 1348377261,
			"isDeleted": false,
			"id": "_jG0oTjGvIbAOFAZD7iob",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1169.7877351538164,
			"y": -626.7312738358859,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 63,
			"seed": 1545901389,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "B9BRla3g"
				},
				{
					"id": "qR6-C3fUHgcOF2V45pvgI",
					"type": "arrow"
				},
				{
					"id": "asN0MTEWuhz-e6jhb65Xv",
					"type": "arrow"
				}
			],
			"updated": 1699860553171,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 343,
			"versionNonce": 1307533709,
			"isDeleted": false,
			"id": "B9BRla3g",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1153.2976609961015,
			"y": -620.2312738358859,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 155.0198516845703,
			"height": 50,
			"seed": 987653037,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926279200,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-threading \nAsync",
			"rawText": "Multi-threading Async",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_jG0oTjGvIbAOFAZD7iob",
			"originalText": "Multi-threading Async",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 179,
			"versionNonce": 1481802851,
			"isDeleted": false,
			"id": "qR6-C3fUHgcOF2V45pvgI",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1078.7210258720845,
			"y": -680.9327990632404,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.051071928344527,
			"height": 50.802517159823196,
			"seed": 1729887043,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653265,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "KJRvmKHfuNNeuVtgwDsaf",
				"gap": 3.1430570216075466,
				"focus": 0.09197281486718153
			},
			"endBinding": {
				"elementId": "_jG0oTjGvIbAOFAZD7iob",
				"gap": 3.3990080675313266,
				"focus": -0.049723357189922615
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.051071928344527,
					50.802517159823196
				]
			]
		},
		{
			"type": "text",
			"version": 49,
			"versionNonce": 1369009091,
			"isDeleted": false,
			"id": "gDYuYHwM",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -950.1606488147123,
			"y": -619.0923153911409,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 512.07958984375,
			"height": 75,
			"seed": 795451235,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699860543644,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-processing context switching too ex\n\nSynchronous is is blocking, waiting time is all wasted",
			"rawText": "Multi-processing context switching too ex\n\nSynchronous is is blocking, waiting time is all wasted",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Multi-processing context switching too ex\n\nSynchronous is is blocking, waiting time is all wasted",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 149,
			"versionNonce": 1760165891,
			"isDeleted": false,
			"id": "asN0MTEWuhz-e6jhb65Xv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1078.3664259253674,
			"y": -559.2561444725936,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.9632847577559005,
			"height": 127.37516282794115,
			"seed": 1775081219,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653266,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_jG0oTjGvIbAOFAZD7iob",
				"gap": 4.47512936329224,
				"focus": 0.03316052953774599
			},
			"endBinding": {
				"elementId": "bx5SdgtSBtmrAeZjgqnAu",
				"gap": 3.9728322475112208,
				"focus": -0.0015163409973811778
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.9632847577559005,
					127.37516282794115
				]
			]
		},
		{
			"type": "rectangle",
			"version": 491,
			"versionNonce": 693533123,
			"isDeleted": false,
			"id": "YdXVTNLHbQrXKypJ-4LTv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -821.936782155702,
			"y": -316.4385341974456,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 111,
			"seed": 174677037,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "HPDd5hfw"
				},
				{
					"id": "DWpcAbvUVwws9s-vV4684",
					"type": "arrow"
				}
			],
			"updated": 1699927688351,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 453,
			"versionNonce": 1614854893,
			"isDeleted": false,
			"id": "HPDd5hfw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -815.827407155702,
			"y": -284.9385341974456,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 175.78125,
			"height": 48,
			"seed": 380063373,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699927698047,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Async\nMulti-threading",
			"rawText": "Async\nMulti-threading ",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "YdXVTNLHbQrXKypJ-4LTv",
			"originalText": "Async\nMulti-threading ",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "text",
			"version": 39,
			"versionNonce": 1727445133,
			"isDeleted": false,
			"id": "AXO1bNY8",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -598.1597374632909,
			"y": -332.673124131398,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 448.1995849609375,
			"height": 75,
			"seed": 1970753613,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699860583164,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Async should be slighly faster,\nsince only one thread to create,\nand not context switching overhead(ignorable)",
			"rawText": "Async should be slighly faster,\nsince only one thread to create,\nand not context switching overhead(ignorable)",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Async should be slighly faster,\nsince only one thread to create,\nand not context switching overhead(ignorable)",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 182,
			"versionNonce": 1548814243,
			"isDeleted": false,
			"id": "DWpcAbvUVwws9s-vV4684",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -914.1366694069717,
			"y": -268.1531860021131,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 87.65627363076612,
			"height": 3.6503791166741735,
			"seed": 707249005,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653270,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "bx5SdgtSBtmrAeZjgqnAu",
				"gap": 8.148268462352036,
				"focus": 0.0192098492949867
			},
			"endBinding": {
				"elementId": "YdXVTNLHbQrXKypJ-4LTv",
				"gap": 4.543613620503493,
				"focus": -0.009080290528849531
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					87.65627363076612,
					3.6503791166741735
				]
			]
		},
		{
			"type": "text",
			"version": 6,
			"versionNonce": 1556051715,
			"isDeleted": false,
			"id": "Vm5k12YP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -889.4325382823935,
			"y": -347.19883396629825,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 28.587982177734375,
			"height": 35,
			"seed": 1151535811,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926540857,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "no",
			"rawText": "no",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "no",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "rectangle",
			"version": 580,
			"versionNonce": 604578893,
			"isDeleted": false,
			"id": "YtZdX0Ir7cMddroJylwQz",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1174.7084753552467,
			"y": -18.82381182922518,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 63,
			"seed": 1597588173,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Tp8d77az"
				},
				{
					"id": "NlhlpMiVYt0lPqOAhl4LQ",
					"type": "arrow"
				}
			],
			"updated": 1699860630213,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 543,
			"versionNonce": 499204941,
			"isDeleted": false,
			"id": "Tp8d77az",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1110.0053503552467,
			"y": 0.6761881707748216,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 58.59375,
			"height": 24,
			"seed": 570515757,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861339139,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Async",
			"rawText": "Async",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "YtZdX0Ir7cMddroJylwQz",
			"originalText": "Async",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "arrow",
			"version": 114,
			"versionNonce": 1219894083,
			"isDeleted": false,
			"id": "NlhlpMiVYt0lPqOAhl4LQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1072.189429442016,
			"y": -119.47695054958953,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.5247576366441535,
			"height": 87.72975701701907,
			"seed": 507904621,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653272,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "bx5SdgtSBtmrAeZjgqnAu",
				"gap": 6.612481430246788,
				"focus": -0.027545134149269738
			},
			"endBinding": {
				"elementId": "YtZdX0Ir7cMddroJylwQz",
				"gap": 12.923381703345285,
				"focus": 0.06581035155152806
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.5247576366441535,
					87.72975701701907
				]
			]
		},
		{
			"type": "text",
			"version": 2,
			"versionNonce": 1400319555,
			"isDeleted": false,
			"id": "8LToJsw6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -962.9906186449733,
			"y": 6.326356323069149,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 813.5193481445312,
			"height": 25,
			"seed": 123483405,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699860636490,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "We need mutex to prevent race condition, and risk of deadlock for multi-threading",
			"rawText": "We need mutex to prevent race condition, and risk of deadlock for multi-threading",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "We need mutex to prevent race condition, and risk of deadlock for multi-threading",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 7,
			"versionNonce": 1880467309,
			"isDeleted": false,
			"id": "QgrcKg7e",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1038.3000818733274,
			"y": -96.75108416037062,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 43.6519775390625,
			"height": 35,
			"seed": 1240968387,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926543220,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "yes",
			"rawText": "yes",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "yes",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "rectangle",
			"version": 618,
			"versionNonce": 659838883,
			"isDeleted": false,
			"id": "qnpDxV8_JWPBr9fgFR9wW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 155.6798547836504,
			"y": -992.1088329856215,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 60,
			"seed": 1398219491,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "jUsxbxsj"
				},
				{
					"id": "CjinsY_KbeoYKGDaU65YC",
					"type": "arrow"
				},
				{
					"id": "fpUr-HtqF58Zj7tF6Jbbd",
					"type": "arrow"
				}
			],
			"updated": 1699861229441,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 58,
			"versionNonce": 815930989,
			"isDeleted": false,
			"id": "jUsxbxsj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 173.7699426742754,
			"y": -987.1088329856215,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 151.81982421875,
			"height": 50,
			"seed": 424296525,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861229441,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-processing\nMulti-threading",
			"rawText": "Multi-processing\nMulti-threading",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "qnpDxV8_JWPBr9fgFR9wW",
			"originalText": "Multi-processing\nMulti-threading",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 202,
			"versionNonce": 2054666979,
			"isDeleted": false,
			"id": "CjinsY_KbeoYKGDaU65YC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 245.3962139650332,
			"y": -1044.6676649109309,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.2189571919029163,
			"height": 48.228439646993706,
			"seed": 867914125,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653276,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ptwYgrEaCws0G5KVMocwL",
				"gap": 3.665590624726292,
				"focus": 0.06725570040183647
			},
			"endBinding": {
				"elementId": "qnpDxV8_JWPBr9fgFR9wW",
				"gap": 4.330392278315571,
				"focus": -0.023185263893092917
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.2189571919029163,
					48.228439646993706
				]
			]
		},
		{
			"type": "text",
			"version": 103,
			"versionNonce": 1963837645,
			"isDeleted": false,
			"id": "khxb5OUH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 362.4081303155914,
			"y": -987.8184963458859,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 406.81964111328125,
			"height": 50,
			"seed": 1390865539,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861229441,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Async & Synchronous are single threaded,\ncant take advantage of Multi Core",
			"rawText": "Async & Synchronous are single threaded,\ncant take advantage of Multi Core",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Async & Synchronous are single threaded,\ncant take advantage of Multi Core",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "diamond",
			"version": 628,
			"versionNonce": 1965430925,
			"isDeleted": false,
			"id": "-qtQjxTtlP3QmLQ6bqnhA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 93.42882679315767,
			"y": -818.1428203184453,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 315,
			"height": 303,
			"seed": 209274093,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "4dYlbMgg"
				},
				{
					"id": "fpUr-HtqF58Zj7tF6Jbbd",
					"type": "arrow"
				},
				{
					"id": "QeClDAkVeRgZMm2o4VVbY",
					"type": "arrow"
				},
				{
					"id": "VOnrlE0ZNqb41xHUyPPHH",
					"type": "arrow"
				}
			],
			"updated": 1699926458849,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 776,
			"versionNonce": 1783579331,
			"isDeleted": false,
			"id": "4dYlbMgg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 186.2388701281186,
			"y": -703.8928203184453,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 129.87991333007812,
			"height": 75,
			"seed": 1211899725,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926458849,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Frequent \nAccess to \nShared Data",
			"rawText": "Frequent Access to Shared Data",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "-qtQjxTtlP3QmLQ6bqnhA",
			"originalText": "Frequent Access to Shared Data",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 167,
			"versionNonce": 175808035,
			"isDeleted": false,
			"id": "fpUr-HtqF58Zj7tF6Jbbd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 250.22172067704324,
			"y": -921.9149660663768,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.1542588711392625,
			"height": 97.48824996927033,
			"seed": 2034963245,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653278,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "qnpDxV8_JWPBr9fgFR9wW",
				"gap": 10.19386691924467,
				"focus": -0.0006991807297668669
			},
			"endBinding": {
				"elementId": "-qtQjxTtlP3QmLQ6bqnhA",
				"gap": 6.299785055333501,
				"focus": 0.014700386224185518
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.1542588711392625,
					97.48824996927033
				]
			]
		},
		{
			"type": "text",
			"version": 308,
			"versionNonce": 961503021,
			"isDeleted": false,
			"id": "P2eTQyyS",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1359.455481289463,
			"y": -1352.3987188168464,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1077.01953125,
			"height": 105,
			"seed": 786765421,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699927527515,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "Conclusion: \n1)Async works well when there is single core, in both CPU & IO/Bounded tasks\n2) Multi-processing cant make it",
			"rawText": "Conclusion: \n1)Async works well when there is single core, in both CPU & IO/Bounded tasks\n2) Multi-processing cant make it",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Conclusion: \n1)Async works well when there is single core, in both CPU & IO/Bounded tasks\n2) Multi-processing cant make it",
			"lineHeight": 1.25,
			"baseline": 95
		},
		{
			"type": "rectangle",
			"version": 375,
			"versionNonce": 726991203,
			"isDeleted": false,
			"id": "SZwhbHVK-a4gqYfkQavlb",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 541.0216057246394,
			"y": -696.7253492988807,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 63,
			"seed": 673342179,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "OZO6b19R"
				},
				{
					"id": "QeClDAkVeRgZMm2o4VVbY",
					"type": "arrow"
				}
			],
			"updated": 1699861229441,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 346,
			"versionNonce": 1108434659,
			"isDeleted": false,
			"id": "OZO6b19R",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 552.9903557246394,
			"y": -677.2253492988807,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 164.0625,
			"height": 24,
			"seed": 540675715,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861346768,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Muti-threading",
			"rawText": "Muti-threading",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "SZwhbHVK-a4gqYfkQavlb",
			"originalText": "Muti-threading",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "arrow",
			"version": 170,
			"versionNonce": 1370983683,
			"isDeleted": false,
			"id": "QeClDAkVeRgZMm2o4VVbY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 421.1581763444765,
			"y": -671.255628092917,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 111.98177665140793,
			"height": 1.5299704339562368,
			"seed": 531898243,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653281,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "-qtQjxTtlP3QmLQ6bqnhA",
				"gap": 13.539362450421649,
				"focus": -0.0457993120103517
			},
			"endBinding": {
				"elementId": "SZwhbHVK-a4gqYfkQavlb",
				"gap": 7.881652728754943,
				"focus": 0.09481164598303232
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					111.98177665140793,
					1.5299704339562368
				]
			]
		},
		{
			"type": "text",
			"version": 16,
			"versionNonce": 1687700643,
			"isDeleted": false,
			"id": "NvW5f4t0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 446.87258830447536,
			"y": -731.7461501080785,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 28.587982177734375,
			"height": 35,
			"seed": 369416749,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861229441,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "no",
			"rawText": "no",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "no",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "rectangle",
			"version": 455,
			"versionNonce": 1467642275,
			"isDeleted": false,
			"id": "9W0C2ZDArD0xDnIMxHzV_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 160.1616803093707,
			"y": -422.5996136287207,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 63,
			"seed": 2053674307,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "o4iAx7Vp"
				},
				{
					"id": "VOnrlE0ZNqb41xHUyPPHH",
					"type": "arrow"
				}
			],
			"updated": 1699926423555,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 426,
			"versionNonce": 1222192653,
			"isDeleted": false,
			"id": "o4iAx7Vp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 195.5679303093707,
			"y": -415.0996136287207,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 117.1875,
			"height": 48,
			"seed": 63632611,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926423555,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Multi-\nprocessing",
			"rawText": "Multi-processing",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9W0C2ZDArD0xDnIMxHzV_",
			"originalText": "Multi-processing",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "arrow",
			"version": 172,
			"versionNonce": 1306850467,
			"isDeleted": false,
			"id": "VOnrlE0ZNqb41xHUyPPHH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 254.60986769774144,
			"y": -507.96515208207984,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.6421381074116823,
			"height": 78.36408420247426,
			"seed": 90735117,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653283,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "-qtQjxTtlP3QmLQ6bqnhA",
				"gap": 8.066534785925612,
				"focus": -0.015116126481900553
			},
			"endBinding": {
				"elementId": "9W0C2ZDArD0xDnIMxHzV_",
				"gap": 7.001454250884876,
				"focus": 0.014914551787630813
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.6421381074116823,
					78.36408420247426
				]
			]
		},
		{
			"type": "text",
			"version": 17,
			"versionNonce": 72248269,
			"isDeleted": false,
			"id": "WV8suVOE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 278.73983319000695,
			"y": -488.3039317652549,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 43.6519775390625,
			"height": 35,
			"seed": 1001992323,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861229441,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "yes",
			"rawText": "yes",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "yes",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "text",
			"version": 61,
			"versionNonce": 2130232195,
			"isDeleted": false,
			"id": "ojInYC9x",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 382.58217100934075,
			"y": -414.47573245788965,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 766.359375,
			"height": 50,
			"seed": 1363632205,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699861229441,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "For multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"rawText": "For multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "For multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 89,
			"versionNonce": 1805744387,
			"isDeleted": false,
			"id": "s-N11X8ieSvZTtDrs9D8A",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1359.6993617611297,
			"y": -825.1532419007137,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1284.3395958675533,
			"height": 975.1766927281246,
			"seed": 955388291,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1699861243807,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 200,
			"versionNonce": 1631608141,
			"isDeleted": false,
			"id": "xGlXmIYgy6DvFMCiiTb1J",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1433.943970395399,
			"y": -1221.7192954073619,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1330.1889399762895,
			"height": 354.050960361121,
			"seed": 873516205,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1699926295072,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 101,
			"versionNonce": 1373980653,
			"isDeleted": false,
			"id": "IAto-KbdMOzS_fH1AAt0I",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 65.47070053999857,
			"y": -1166.5541660762108,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1186.946075524203,
			"height": 860.0669095655146,
			"seed": 268885293,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1699861257908,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 738,
			"versionNonce": 881606531,
			"isDeleted": false,
			"id": "Cw9uMdO-kKBGzm8G8qEBM",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 293.43937943210676,
			"y": 28.17612556158906,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 85,
			"seed": 2029743405,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "F1cS0y33"
				},
				{
					"id": "eIXULbRzRXkmabxY3Kd0P",
					"type": "arrow"
				},
				{
					"id": "VvvjqKpq4juU5Sx05fHCj",
					"type": "arrow"
				}
			],
			"updated": 1699926508697,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 176,
			"versionNonce": 1492889133,
			"isDeleted": false,
			"id": "F1cS0y33",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 311.52946732273176,
			"y": 33.17612556158906,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 151.81982421875,
			"height": 75,
			"seed": 1791967117,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926508697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-threading\nMulti-processing\nAsync",
			"rawText": "Multi-threading\nMulti-processing\nAsync",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Cw9uMdO-kKBGzm8G8qEBM",
			"originalText": "Multi-threading\nMulti-processing\nAsync",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 69,
			"versionNonce": 457467971,
			"isDeleted": false,
			"id": "eIXULbRzRXkmabxY3Kd0P",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 384.0591266765372,
			"y": -82.3398249592442,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.5772159922695437,
			"height": 108.84270562065979,
			"seed": 2001959149,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653284,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "5rLdGXX9-GBAFqmb5YV9r",
				"gap": 7.880072625514572,
				"focus": 0.05093764812274227
			},
			"endBinding": {
				"elementId": "Cw9uMdO-kKBGzm8G8qEBM",
				"gap": 1.6732449001734722,
				"focus": -0.012291088333451099
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.5772159922695437,
					108.84270562065979
				]
			]
		},
		{
			"type": "diamond",
			"version": 745,
			"versionNonce": 1108004237,
			"isDeleted": false,
			"id": "zPgjpjFT8zct_u3RxhsZA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 234.47170126899687,
			"y": 259.35577237148493,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 315,
			"height": 303,
			"seed": 1168384109,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "RtWYA6U3"
				},
				{
					"id": "VvvjqKpq4juU5Sx05fHCj",
					"type": "arrow"
				},
				{
					"id": "diciro4V9lpl0S9iMnhpG",
					"type": "arrow"
				},
				{
					"id": "pZKg7kYo1uduNyrczetdX",
					"type": "arrow"
				}
			],
			"updated": 1699926787148,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 921,
			"versionNonce": 1161605229,
			"isDeleted": false,
			"id": "RtWYA6U3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 337.8417497919461,
			"y": 386.10577237148493,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 108.75990295410156,
			"height": 50,
			"seed": 1585416909,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926588888,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Want high \nconcurrency",
			"rawText": "Want high concurrency",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "zPgjpjFT8zct_u3RxhsZA",
			"originalText": "Want high concurrency",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 96,
			"versionNonce": 21197699,
			"isDeleted": false,
			"id": "VvvjqKpq4juU5Sx05fHCj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.027791832844775932,
			"x": 386.7284767585049,
			"y": 126.17152728000879,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.8268017514909616,
			"height": 115.28779776961024,
			"seed": 2020463757,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653285,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Cw9uMdO-kKBGzm8G8qEBM",
				"gap": 12.992280138295314,
				"focus": -0.016455369575680383
			},
			"endBinding": {
				"elementId": "zPgjpjFT8zct_u3RxhsZA",
				"gap": 18.583795109320135,
				"focus": -0.044714512241527615
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.8268017514909616,
					115.28779776961024
				]
			]
		},
		{
			"type": "rectangle",
			"version": 860,
			"versionNonce": 1619544781,
			"isDeleted": false,
			"id": "W37YHsnEAGGEWnT8Ph5Iu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 706.1467269401508,
			"y": 364.6871840071342,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 85,
			"seed": 1827333635,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "fcQLMJjj"
				},
				{
					"id": "diciro4V9lpl0S9iMnhpG",
					"type": "arrow"
				},
				{
					"id": "nH9h79ZX90Z7QjicIKFA7",
					"type": "arrow"
				}
			],
			"updated": 1699926652987,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 296,
			"versionNonce": 51401859,
			"isDeleted": false,
			"id": "fcQLMJjj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 724.2368148307758,
			"y": 369.6871840071342,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 151.81982421875,
			"height": 75,
			"seed": 994389411,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926652987,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-threading\nMulti-processing\nAsync",
			"rawText": "Multi-threading\nMulti-processing\nAsync",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "W37YHsnEAGGEWnT8Ph5Iu",
			"originalText": "Multi-threading\nMulti-processing\nAsync",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 71,
			"versionNonce": 369876579,
			"isDeleted": false,
			"id": "diciro4V9lpl0S9iMnhpG",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 561.3432465714554,
			"y": 407.2566334029808,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 139.62026639300097,
			"height": 0.08724406802645035,
			"seed": 1997297293,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653287,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "zPgjpjFT8zct_u3RxhsZA",
				"gap": 12.40513559711988,
				"focus": -0.024455271438688395
			},
			"endBinding": {
				"elementId": "W37YHsnEAGGEWnT8Ph5Iu",
				"gap": 5.183213975694343,
				"focus": -0.005138069727012628
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					139.62026639300097,
					0.08724406802645035
				]
			]
		},
		{
			"type": "text",
			"version": 11,
			"versionNonce": 1528449059,
			"isDeleted": false,
			"id": "9PA9saVG",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 601.5477236161332,
			"y": 366.0326305529082,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 33.54399108886719,
			"height": 35,
			"seed": 872147459,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926532753,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "No",
			"rawText": "No",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "No",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "text",
			"version": 33,
			"versionNonce": 1180442115,
			"isDeleted": false,
			"id": "6GWsbRB8",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 529.7570017538383,
			"y": 52.631184168570485,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 616.9795532226562,
			"height": 50,
			"seed": 2130643043,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926562171,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Synchronous means one thread that is blocking\nSo we can only carry out the next task when we finish waiting",
			"rawText": "Synchronous means one thread that is blocking\nSo we can only carry out the next task when we finish waiting",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Synchronous means one thread that is blocking\nSo we can only carry out the next task when we finish waiting",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "diamond",
			"version": 708,
			"versionNonce": 2114703373,
			"isDeleted": false,
			"id": "ZnIGZqg0-4tcus1kShS9p",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 651.9739772683213,
			"y": 600.5003783854172,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 315,
			"height": 303,
			"seed": 1202622957,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "kfvjFSOH"
				},
				{
					"id": "nH9h79ZX90Z7QjicIKFA7",
					"type": "arrow"
				},
				{
					"id": "5GXl9V5DbyIqt59bwrxiX",
					"type": "arrow"
				},
				{
					"id": "4GM1TmDCpn9seuuVWYXsP",
					"type": "arrow"
				}
			],
			"updated": 1699926681446,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 853,
			"versionNonce": 1320837581,
			"isDeleted": false,
			"id": "kfvjFSOH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 744.7840206032822,
			"y": 714.7503783854172,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 129.87991333007812,
			"height": 75,
			"seed": 1765788749,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926595952,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Frequent \nAccess to \nShared Data",
			"rawText": "Frequent Access to Shared Data",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ZnIGZqg0-4tcus1kShS9p",
			"originalText": "Frequent Access to Shared Data",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 71,
			"versionNonce": 721150371,
			"isDeleted": false,
			"id": "nH9h79ZX90Z7QjicIKFA7",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 800.2015321216709,
			"y": 467.236614213352,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.127223308928706,
			"height": 124.3918810302124,
			"seed": 1644601389,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653291,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "W37YHsnEAGGEWnT8Ph5Iu",
				"gap": 17.549430206217835,
				"focus": 0.025277138312150258
			},
			"endBinding": {
				"elementId": "ZnIGZqg0-4tcus1kShS9p",
				"gap": 9.792506041183486,
				"focus": 0.015651024815807754
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					5.127223308928706,
					124.3918810302124
				]
			]
		},
		{
			"type": "rectangle",
			"version": 971,
			"versionNonce": 552783331,
			"isDeleted": false,
			"id": "Jl5a6T_4OIuF6X5bsgL_z",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1114.29227709683,
			"y": 692.1769635130854,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 237,
			"height": 106,
			"seed": 1655307341,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "mZgwpXxo"
				},
				{
					"id": "5GXl9V5DbyIqt59bwrxiX",
					"type": "arrow"
				}
			],
			"updated": 1699926953027,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 435,
			"versionNonce": 601191469,
			"isDeleted": false,
			"id": "mZgwpXxo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1139.04227709683,
			"y": 709.1769635130854,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 187.5,
			"height": 72,
			"seed": 975104685,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926953029,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Multi-threading\nMulti-processing\nAsync",
			"rawText": "Multi-threading\nMulti-processing\nAsync",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Jl5a6T_4OIuF6X5bsgL_z",
			"originalText": "Multi-threading\nMulti-processing\nAsync",
			"lineHeight": 1.2,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 190,
			"versionNonce": 717586563,
			"isDeleted": false,
			"id": "5GXl9V5DbyIqt59bwrxiX",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 975.5708369340077,
			"y": 749.1852090474719,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 135.00415500657255,
			"height": 1.7579325260402356,
			"seed": 1420810211,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653294,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ZnIGZqg0-4tcus1kShS9p",
				"gap": 9.04605850704128,
				"focus": -0.03286860776336541
			},
			"endBinding": {
				"elementId": "Jl5a6T_4OIuF6X5bsgL_z",
				"gap": 3.7172851562497726,
				"focus": -0.13489549623264666
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					135.00415500657255,
					1.7579325260402356
				]
			]
		},
		{
			"type": "text",
			"version": 3,
			"versionNonce": 1374361475,
			"isDeleted": false,
			"id": "T6tStDzm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1012.247950686769,
			"y": 699.4749371458979,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 23.959976196289062,
			"height": 25,
			"seed": 1971358691,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926666368,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "No",
			"rawText": "No",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "No",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 1083,
			"versionNonce": 1724885827,
			"isDeleted": false,
			"id": "_Wr2urMqhJ-io8H2oEoE-",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 719.5785170930194,
			"y": 1026.2444058720794,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 198,
			"height": 85,
			"seed": 1784481187,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "oTm2TRXj"
				},
				{
					"id": "4GM1TmDCpn9seuuVWYXsP",
					"type": "arrow"
				}
			],
			"updated": 1699926968193,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 539,
			"versionNonce": 1875238509,
			"isDeleted": false,
			"id": "oTm2TRXj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 724.8285170930194,
			"y": 1044.7444058720794,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 187.5,
			"height": 48,
			"seed": 1888639299,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926968193,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Multi-processing\nAsync",
			"rawText": "Multi-processing\nAsync",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_Wr2urMqhJ-io8H2oEoE-",
			"originalText": "Multi-processing\nAsync",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "arrow",
			"version": 208,
			"versionNonce": 1206417443,
			"isDeleted": false,
			"id": "4GM1TmDCpn9seuuVWYXsP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 812.4632173614057,
			"y": 907.5601264666832,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 3.6606886663525984,
			"height": 106.92640735890222,
			"seed": 1493337645,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653297,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ZnIGZqg0-4tcus1kShS9p",
				"gap": 5.041538536741115,
				"focus": 0.014816534452492074
			},
			"endBinding": {
				"elementId": "_Wr2urMqhJ-io8H2oEoE-",
				"gap": 11.757872046493958,
				"focus": -0.005943563951132971
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					3.6606886663525984,
					106.92640735890222
				]
			]
		},
		{
			"type": "text",
			"version": 10,
			"versionNonce": 1925779523,
			"isDeleted": false,
			"id": "oL9kRFuL",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 843.9552677599399,
			"y": 933.6212786093126,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 32.119964599609375,
			"height": 25,
			"seed": 1218503053,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926690730,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Yes",
			"rawText": "Yes",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Yes",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 57,
			"versionNonce": 1411209155,
			"isDeleted": false,
			"id": "6wGy0qOc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 934.9509446844822,
			"y": 1026.0328222926207,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 766.359375,
			"height": 75,
			"seed": 1497331363,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926722902,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "\nFor multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"rawText": "\nFor multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "\nFor multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "rectangle",
			"version": 1190,
			"versionNonce": 949758115,
			"isDeleted": false,
			"id": "TqD88rLZjGnHD9qRhjxNy",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 314.18807073250105,
			"y": 1274.7625169381997,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 85,
			"seed": 1660443501,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "QbNBfZQ4"
				},
				{
					"id": "pZKg7kYo1uduNyrczetdX",
					"type": "arrow"
				},
				{
					"id": "PgIkuZPTBrWz4UR_oPhED",
					"type": "arrow"
				}
			],
			"updated": 1699926838220,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 639,
			"versionNonce": 1293051661,
			"isDeleted": false,
			"id": "QbNBfZQ4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 332.27815862312605,
			"y": 1292.2625169381997,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 151.81982421875,
			"height": 50,
			"seed": 1536452045,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926838220,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-processing\nAsync",
			"rawText": "Multi-processing\nAsync",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "TqD88rLZjGnHD9qRhjxNy",
			"originalText": "Multi-processing\nAsync",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 70,
			"versionNonce": 554400707,
			"isDeleted": false,
			"id": "pZKg7kYo1uduNyrczetdX",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 391.1875019817022,
			"y": 578.0792221763863,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 15.571543853366563,
			"height": 688.4188666463399,
			"seed": 1505620525,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653298,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "zPgjpjFT8zct_u3RxhsZA",
				"gap": 15.742993434840997,
				"focus": 0.028994758572447904
			},
			"endBinding": {
				"elementId": "TqD88rLZjGnHD9qRhjxNy",
				"gap": 8.264428115473493,
				"focus": -0.002956674721701068
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					15.571543853366563,
					688.4188666463399
				]
			]
		},
		{
			"type": "text",
			"version": 4,
			"versionNonce": 540664899,
			"isDeleted": false,
			"id": "fgL08xbx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 553.7113653209167,
			"y": 1297.035912755653,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 926.6992797851562,
			"height": 50,
			"seed": 1304902829,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926801783,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Multi-processing requires more resources to create\nAnd context switching is exprensive if we want more processes than the number of CPU cores",
			"rawText": "Multi-processing requires more resources to create\nAnd context switching is exprensive if we want more processes than the number of CPU cores",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Multi-processing requires more resources to create\nAnd context switching is exprensive if we want more processes than the number of CPU cores",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 4,
			"versionNonce": 879407245,
			"isDeleted": false,
			"id": "6qVPpGF6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 424.44307263798987,
			"y": 862.8895712922385,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 32.119964599609375,
			"height": 25,
			"seed": 738848643,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926810349,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Yes",
			"rawText": "Yes",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Yes",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "diamond",
			"version": 840,
			"versionNonce": 1236311885,
			"isDeleted": false,
			"id": "9VleSnjXoWbvEAVVk6gQa",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 252.12850042000264,
			"y": 1500.8402399993652,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 315,
			"height": 303,
			"seed": 537957891,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "vbx1kRKe"
				},
				{
					"id": "PgIkuZPTBrWz4UR_oPhED",
					"type": "arrow"
				},
				{
					"id": "LNkeqtoyqJLkCU9S121gP",
					"type": "arrow"
				},
				{
					"id": "103vKgeWMGCdXYLOykT8C",
					"type": "arrow"
				}
			],
			"updated": 1699926879930,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 982,
			"versionNonce": 797914435,
			"isDeleted": false,
			"id": "vbx1kRKe",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 344.9385437549636,
			"y": 1615.0902399993652,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 129.87991333007812,
			"height": 75,
			"seed": 1580522915,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926827831,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Frequent \nAccess to \nShared Data",
			"rawText": "Frequent Access to Shared Data",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9VleSnjXoWbvEAVVk6gQa",
			"originalText": "Frequent Access to Shared Data",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "arrow",
			"version": 56,
			"versionNonce": 1878763267,
			"isDeleted": false,
			"id": "PgIkuZPTBrWz4UR_oPhED",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 412.21771618168765,
			"y": 1375.8361699965067,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 3.3667990760495172,
			"height": 114.50372654397938,
			"seed": 1008465005,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653299,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "TqD88rLZjGnHD9qRhjxNy",
				"gap": 16.073653058306945,
				"focus": -0.060387700974723665
			},
			"endBinding": {
				"elementId": "9VleSnjXoWbvEAVVk6gQa",
				"gap": 10.529095334605103,
				"focus": -0.03518060000259803
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-3.3667990760495172,
					114.50372654397938
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1247,
			"versionNonce": 1577977421,
			"isDeleted": false,
			"id": "d-s4xP98ZwvRGTbyUtTbI",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 752.5397344615424,
			"y": 1609.3908872697536,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 85,
			"seed": 1806516003,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "ZtFyXIus"
				},
				{
					"id": "LNkeqtoyqJLkCU9S121gP",
					"type": "arrow"
				}
			],
			"updated": 1699926863371,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 702,
			"versionNonce": 1732854829,
			"isDeleted": false,
			"id": "ZtFyXIus",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 758.6491094615424,
			"y": 1627.8908872697536,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 175.78125,
			"height": 48,
			"seed": 513761987,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926938165,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Multi-threading\nAsync",
			"rawText": "Multi-threading Async",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "d-s4xP98ZwvRGTbyUtTbI",
			"originalText": "Multi-threading Async",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "arrow",
			"version": 65,
			"versionNonce": 1802944995,
			"isDeleted": false,
			"id": "LNkeqtoyqJLkCU9S121gP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 586.9791858436884,
			"y": 1648.703703739067,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 158.21554218683264,
			"height": 4.650621518582284,
			"seed": 391711501,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653302,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "9VleSnjXoWbvEAVVk6gQa",
				"gap": 20.181033367065083,
				"focus": -0.058413259720680386
			},
			"endBinding": {
				"elementId": "d-s4xP98ZwvRGTbyUtTbI",
				"gap": 7.345006431021375,
				"focus": -0.0981461523761751
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					158.21554218683264,
					4.650621518582284
				]
			]
		},
		{
			"type": "text",
			"version": 3,
			"versionNonce": 842556867,
			"isDeleted": false,
			"id": "UZwG22MS",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 624.4430726379906,
			"y": 1589.7188395849214,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 23.959976196289062,
			"height": 25,
			"seed": 1726652963,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926860407,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "No",
			"rawText": "No",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "No",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 1309,
			"versionNonce": 2073072717,
			"isDeleted": false,
			"id": "HSxYjqGTHgZV5FD_N0SKe",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 312.5026072225942,
			"y": 1936.5501920048905,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 188,
			"height": 85,
			"seed": 2019831149,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "EgFIR7kY"
				},
				{
					"id": "103vKgeWMGCdXYLOykT8C",
					"type": "arrow"
				}
			],
			"updated": 1699926930608,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 769,
			"versionNonce": 179156813,
			"isDeleted": false,
			"id": "EgFIR7kY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 377.2057322225942,
			"y": 1967.0501920048905,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 58.59375,
			"height": 24,
			"seed": 934672333,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926941107,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Async",
			"rawText": "Async",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "HSxYjqGTHgZV5FD_N0SKe",
			"originalText": "Async",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "arrow",
			"version": 120,
			"versionNonce": 1470795139,
			"isDeleted": false,
			"id": "103vKgeWMGCdXYLOykT8C",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 410.51583074864766,
			"y": 1815.4434612402933,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.8198787759934021,
			"height": 116.34974000621332,
			"seed": 1164155853,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700031653304,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "9VleSnjXoWbvEAVVk6gQa",
				"gap": 11.637100080263068,
				"focus": 0.0016635146786520183
			},
			"endBinding": {
				"elementId": "HSxYjqGTHgZV5FD_N0SKe",
				"gap": 4.756990758383836,
				"focus": 0.05478404275937859
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.8198787759934021,
					116.34974000621332
				]
			]
		},
		{
			"type": "text",
			"version": 10,
			"versionNonce": 487745901,
			"isDeleted": false,
			"id": "IQbFEm27",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 439.07721897945385,
			"y": 1833.6212786093115,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 32.119964599609375,
			"height": 25,
			"seed": 2145282499,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926886468,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Yes",
			"rawText": "Yes",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Yes",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 49,
			"versionNonce": 617142819,
			"isDeleted": false,
			"id": "NarY1BaA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 552.8547890061307,
			"y": 1930.7171961016898,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 766.359375,
			"height": 75,
			"seed": 1123220355,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699926914229,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "\nFor multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"rawText": "\nFor multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "\nFor multi-threading, Race conditions & deadlocks are complex to program with\nOverhead incurred from mutex",
			"lineHeight": 1.25,
			"baseline": 68
		},
		{
			"type": "rectangle",
			"version": 151,
			"versionNonce": 1675996483,
			"isDeleted": false,
			"id": "4gYWlSLHkqPQdobIMfDC2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 66.7990892157352,
			"y": -243.4077681704141,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1685.6865115282017,
			"height": 2350.1518435594517,
			"seed": 389706179,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1699926990228,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 357,
			"versionNonce": 1168034883,
			"isDeleted": false,
			"id": "M7ghc3bo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 95.66142367648035,
			"y": -1411.4305509567168,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1988.5872802734375,
			"height": 175,
			"seed": 1467588771,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1699927496621,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "Conclusion: \n1) Async doesn't work well when there is multi core, CPU bounded tasks\n2) Async works well when there is multi core, IO/Network bounded tasks, the un-used cores can be used for CPU bounded tasks like encryption\n\n3) Multi-processing shines when no high concurrency is needed",
			"rawText": "Conclusion: \n1) Async doesn't work well when there is multi core, CPU bounded tasks\n2) Async works well when there is multi core, IO/Network bounded tasks, the un-used cores can be used for CPU bounded tasks like encryption\n\n3) Multi-processing shines when no high concurrency is needed",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Conclusion: \n1) Async doesn't work well when there is multi core, CPU bounded tasks\n2) Async works well when there is multi core, IO/Network bounded tasks, the un-used cores can be used for CPU bounded tasks like encryption\n\n3) Multi-processing shines when no high concurrency is needed",
			"lineHeight": 1.25,
			"baseline": 165
		},
		{
			"id": "y8QWkYWlX1c0TlFS5PZ9F",
			"type": "rectangle",
			"x": -958.8238794496581,
			"y": 374.7383939633198,
			"width": 264.453818581321,
			"height": 262.05777254971576,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 110650723,
			"version": 12,
			"versionNonce": 200228579,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1700031700336,
			"link": null,
			"locked": false
		},
		{
			"id": "zpDcYwry",
			"type": "text",
			"x": -646.0976332227406,
			"y": 496.7476713070698,
			"width": 43.8759765625,
			"height": 35,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1833296579,
			"version": 6,
			"versionNonce": 1557320909,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1700031700336,
			"link": null,
			"locked": false,
			"text": "hell",
			"rawText": "hell",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 25,
			"containerId": null,
			"originalText": "hell",
			"lineHeight": 1.25
		},
		{
			"id": "Y6Y2AN92qe_qIKRVNEM69",
			"type": "freedraw",
			"x": -655.6807076190473,
			"y": 351.5274176227658,
			"width": 277.8127496892755,
			"height": 136.617070978338,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 502122413,
			"version": 26,
			"versionNonce": 772500099,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1700031700336,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.3115567294033781,
					-0.9346701882102479
				],
				[
					0.6231134588067562,
					-1.3762040571732541
				],
				[
					25.935225053267004,
					65.4923872514205
				],
				[
					36.060680042613626,
					79.851601340554
				],
				[
					38.16500577059662,
					82.52716064453125
				],
				[
					39.227849786931756,
					83.94622802734375
				],
				[
					40.14975807883525,
					84.53285910866475
				],
				[
					40.4808738014915,
					84.58598743785501
				],
				[
					40.762883966619256,
					84.58598743785501
				],
				[
					41.88079833984375,
					84.58598743785501
				],
				[
					43.380598588423254,
					84.58598743785501
				],
				[
					48.721174760298254,
					83.15207741477275
				],
				[
					66.30665172230113,
					76.69386430220175
				],
				[
					101.82911265980113,
					60.588906028054
				],
				[
					151.34638006036926,
					32.90446888316751
				],
				[
					227.46429443359375,
					-14.954861727627758
				],
				[
					250.05243474786926,
					-30.86367520419026
				],
				[
					264.308027787642,
					-41.5740966796875
				],
				[
					271.81077436967325,
					-47.16463955965901
				],
				[
					275.06464177911926,
					-49.38618053089499
				],
				[
					277.56708318536926,
					-51.75295743075276
				],
				[
					277.8127496892755,
					-52.031083540482996
				],
				[
					277.8127496892755,
					-52.031083540482996
				]
			],
			"pressures": [],
			"simulatePressure": true,
			"lastCommittedPoint": [
				277.8127496892755,
				-52.031083540482996
			]
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 28,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 1399.5067241318313,
		"scrollY": 1144.161419602021,
		"zoom": {
			"value": 0.44000000000000006
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"currentStrokeOptions": null,
		"previousGridSize": null
	},
	"files": {}
}
```
%%