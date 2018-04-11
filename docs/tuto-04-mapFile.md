---
id: tuto-04-mapFile
title: MapFile
---

## Search MapPath

https://api.adsum.io/2.1/map?site={site_id}&type=path

```json
[{
		"site": 366,
		"file": {
			"name": "phpyXmqua.xml",
			"provider_name": "sonata.media.provider.file",
			"reference": "5c63a4f5dc9ffb8a3e30def7ef24ac1f72791e57.xml",
			"context": "map",
			"file_type": "application\/xml",
			"site": 366,
			"id": 457976,
			"content_hash": "657ece559529431ac8baaedd5871b5a3",
			"path": "http:\/\/api.adsum.io\/uploads\/media\/map\/0005\/58\/5c63a4f5dc9ffb8a3e30def7ef24ac1f72791e57.xml"
		},
		"id": 1843,
		"name": "20",
		"type": "path",
		"paths": {
			"nodes": [
				{
					"id": 1,
					"location": {
						"type": "STORE",
						"id": 10
					},
					"position": {
						"x": 15.133586543275,
						"y": -6.7341998915938,
						"z": 0
					},
					"isGate": true,
					"links": [5, 12],
					"groundId": 3
				}, {
					"id": 2,
					"location": {
						"type": "STORE",
						"id": 11
					},
					"position": {
						"x": 26.280905574666,
						"y": -10.195876525842,
						"z": 0
					},
					"isGate": true,
					"links": [6],
					"groundId": 3
				}, ....
			],
			"links": [{
					"id": 5,
					"type": 0,
					"bidirectional": true,
					"weight": 1,
					"from": 1,
					"to": 4
				}, {
					"id": 6,
					"type": 0,
					"bidirectional": true,
					"weight": 1,
					"from": 4,
					"to": 2
				},  ...
			]
		},
		"version": 13,
		"created_at": "2016-09-02T13:25:03.000000Z",
		"updated_at": "2016-09-02T14:24:10.000000Z"
	}
]
```
