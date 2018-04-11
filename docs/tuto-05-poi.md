---
id: tuto-05-poi
title: Poi
---

## Get a specific Poi

### Usage
```javascript
// url to GET the Poi id 1
const url = "https://api.adsum.io/2.1/poi/1";
const callback = (poi) => {
    console.log(poi);
};

client.get(url, callback);
```

> Note: The class `Client` used come from tutorials `Authentication` to 
support WSSE authentication.

### Output
```
> {
  "type": "store",
  "categories": [
    2, 
    5
  ],
  "custom_objects": [
    4
  ],
  "tags": [],
  "places": [
    1
  ],
  "parents": [],
  "children": [],
  "pictures": [],
  "logos": [
    {
      "logo": {
        "name": "file2UVjVS.png",
        "provider_name": "sonata.media.provider.file",
        "reference": "5f8ba6a097a7a7c0d6ab910f123bc0f5a201eeaa.png",
        "context": "poi",
        "file_type": "image/png",
        "site": 1,
        "id": 15,
        "content_hash": "59cf1600d4ee7f5e02dd2aa2e3719f58",
        "uri": "http://api.adsum.io/uploads/media/poi/0005/09/5f8ba6a097a7a7c0d6ab910f123bc0f5a201eeaa.png"
      },
      "position": 0
    }
  ],
  "medias": [],
  "site": 1,
  "id": 1,
  "name": "Store",
  "description": "This is a store on the site 1",
  "new": false,
  "client_id": "614266",
  "signature": "614266",
  "metadata": {
    "type": {
      "key": "type",
      "type": "string",
      "value": "boutique"
    }
  },
  "version": 242,
  "created_at": "2016-11-18T02:01:00.000000Z",
  "updated_at": "2016-11-25T02:01:01.000000Z",
  "priority": 0,
  "opening_time": "24/7",
  "phone": "01 32 62 60 80",
  "url": "http://active.com"
}
```

> Note: In that case the poi is a `Store`, you may have any inherited 
entity of `Poi`.

## Get All Pois of a Site

### Usage

```javascript
const url = "https://api.adsum.io/2.1/poi?site=1";

const pois = [];
let pageCount = 0;

const handlePage = (page, xhr) => {
    pageCount++;
    console.log(`Page ${pageCount} loaded`);
    
    const range = xhr.getResponseHeader("Content-Range");
    const matches = range.match(/^(-?[0-9]+)-(-?[0-9]+)\/([0-9]+)$/);
    const start = parseInt(matches[1]);
    const end = parseInt(matches[2]);
    const totalCount = parseInt(matches[3]);
    
    for(const poi of page){
       pois.push(poi);
    }
    
    // Check if it's the final page
    if(end +1 < totalCount){
        client.get(`${url}&start=${end+1}`, handlePage);
    } else{
        console.log(pois);
    }
};

client.get(url, handlePage);
```

### Output

```
> Page 1 loaded
> Page 2 loaded
> [
    {
      "type": "store",
      "id": 1,
      ...
    },
    {
      "type": "person",
      "id": 10,
      ...
    },
    {
      "type": "person",
      "id": 15,
      ...
    },
    {
      "type": "product",
      "id": 21,
      ...
    },
    {
      "type": "room",
      "id": 581,
      ...
    },
    {
      "type": "service",
      "id": 5818,
      ...
    }
]
```
