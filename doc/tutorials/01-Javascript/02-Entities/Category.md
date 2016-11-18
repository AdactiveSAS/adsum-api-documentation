# Category

## Get a specific Category

### Usage
```javascript
// url to GET the Category id 1
const url = "https://api.adsum.io/2.1/category/1";
const callback = (category) => {
    console.log(category);
};

client.get(url, callback);
```

> Note: The class `Client` used come from tutorials `Authentication` to 
support WSSE authentication.

### Output
```javascript
> {
    "children": [],
    "client_id": "81",
    "color": null,
    "created_at": "2016-01-05T02:00:05.000000Z",
    "id": 1,
    "logo": null,
    "metadata": {},
    "name": "Fitness Center",
    "parameters": [],
    "parents": [
      873
    ],
    "pois": [
      35
    ],
    "rank": 0,
    "signature": "81",
    "site": 1,
    "tags": [],
    "type": null,
    "updated_at": "2016-11-18T02:00:59.000000Z",
    "version": 242
}
```

## Get All Categories of a Site

### Usage

```javascript
const url = "https://api.adsum.io/2.1/category?site=1";

const categorys = [];
let pageCount = 0;

const handlePage = (page, xhr) => {
    pageCount++;
    console.log(`Page ${pageCount} loaded`);
    
    const range = xhr.getResponseHeader("Content-Range");
    const matches = range.match(/^(-?[0-9]+)-(-?[0-9]+)\/([0-9]+)$/);
    const start = parseInt(matches[1]);
    const end = parseInt(matches[2]);
    const totalCount = parseInt(matches[3]);
    
    for(const category of page){
       categorys.push(category);
    }
    
    // Check if it's the final page
    if(end +1 < totalCount){
        client.get(`${url}&start=${end+1}`, handlePage);
    } else{
        console.log(categorys);
    }
};

client.get(url, handlePage);
```

### Output

```javascript
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
