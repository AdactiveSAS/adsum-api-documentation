---
id: version-2.3-tuto-03-file
title: File
original_id: tuto-03-file
---
## Get a specific File

### Usage
```javascript
// url to GET the File id 1
const url = "https://api.adsum.io/2.1/file/1";
const callback = (file) => {
    console.log(file);
};

client.get(url, callback);
```

> Note: The class `Client` used come from tutorials `Authentication` to 
support WSSE authentication.

### Output
```
> {
      "name": "fileoELgBd.png",
      "provider_name": "sonata.media.provider.file",
      "reference": "462f88450d35437c6fb3a92ce0866dbda72d4f22.png",
      "context": "site",
      "file_type": "image/png",
      "site": 1,
      "id": 10,
      "content_hash": "e1d73b1ece494d9ec92bb2230a4590bc",
      "uri": "http://api.adsum.io/uploads/media/site/0005/69/462f88450d35437c6fb3a92ce0866dbda72d4f22.png"
  }
```

## Get All File of a Site

### Usage

```javascript
const url = "https://api.adsum.io/2.1/file?site=1";

const files = [];
let pageCount = 0;

const handlePage = (page, xhr) => {
    pageCount++;
    console.log(`Page ${pageCount} loaded`);
    
    const range = xhr.getResponseHeader("Content-Range");
    const matches = range.match(/^(-?[0-9]+)-(-?[0-9]+)\/([0-9]+)$/);
    const start = parseInt(matches[1]);
    const end = parseInt(matches[2]);
    const totalCount = parseInt(matches[3]);
    
    for(const file of page){
       files.push(file);
    }
    
    // Check if it's the final page
    if(end +1 < totalCount){
        client.get(`${url}&start=${end+1}`, handlePage);
    } else{
        console.log(files);
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
      "id": 1,
      ...
    },
    {
      "id": 10,
      ...
    },
    {
      "id": 15,
      ...
    },
    {
      "id": 21,
      ...
    },
    {
      "id": 581,
      ...
    },
    {
      "id": 5818,
      ...
    }
]
```

## Create a File

### Binary is passed by URI

#### Usage

```javascript
const url = "https://api.adsum.io/2.1/file";
const callback = (result) => {
    console.log(result.id);
    console.log(result.reference);
};

const data = {
    "site": 1,
    "file": "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
    "name": "test !"
 };

client.postJson(url, data, callback);
```

#### Output

```
> 158
> 43ea76bce0428935193f79a3d187ba65e5754acd.png
```

### Binary is uploaded

#### Usage

Consider this HTML:

```html
    <input type="file" id="input" />
```

If the user selects just one file, it is then only necessary to consider the first file of the list.

```javascript
const url = "https://api.adsum.io/2.1/file";
const callback = (result) => {
    console.log(result.id);
    console.log(result.reference);
};

const bin = document.getElementById('input').files[0];

const data = new FormData();
data.append("site", 1);
data.append("name", "test");
data.append("file", bin);

client.postJson(url, data, callback);
```

#### Output

```
> 158
> 43ea76bce0428935193f79a3d187ba65e5754acd.png
```

## Update a File

### Binary is passed by URI

#### Usage

```javascript
const url = "https://api.adsum.io/2.1/file/158";
const callback = (result) => {
    console.log(result);
};

const data = {
    "file": "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"
 };

client.postJson(url, data, callback);
```

#### Output

```
> null
```

### Binary is uploaded

#### Usage

Consider this HTML:

```html
    <input type="file" id="input" />
```

If the user selects just one file, it is then only necessary to consider the first file of the list.

```javascript
const url = "https://api.adsum.io/2.1/file/1";
const callback = (result) => {
    console.log(result);
};

const bin = document.getElementById('input').files[0];

const data = new FormData();
data.append("file", bin);

client.postJson(url, data, callback);
```

#### Output

```
> null
```
