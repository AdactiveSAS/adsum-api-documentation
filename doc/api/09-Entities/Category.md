# Category

## CRUD
| CRUD         | Http Verb | Route          | Description                             |
|--------------|-----------|----------------|-----------------------------------------|
| READ         | GET       | /category/{id} | Retrieve a single Category from it's id |
| CREATE       | POST      | /category      | Create a Category                       |
| UPDATE       | POST      | /category/{id} | Update a Category                       |
| DELETE       | DELETE    | /category/{id} | Delete a Category                       |
| SEARCH       | GET       | /category      | Looking for Categories                  |
| BATCH DELETE | DELETE    | /category      | Delete multiple Categories              |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field                 | Type               | Readonly            | Nullable            | Translatable        | Description                                                                                                                                                      |
|-----------------------|--------------------|---------------------|---------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| children              | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of children Categories                                                                                                                                      |
| children[]            | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                  |
| children[].id         | Category#id        | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Child Category identifier                                                                                                                                        |
| children[].position   | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Child Category position used to sort children. The sorting order is descending regarless position, in case of equals positions lower identifier will come first. |
| client_id             | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | An arbitrary field used to store external identfier to match our own                                                                                             |
| color                 | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Color in HTML form such as "#ffffff"                                                                                                                             |
| created_at            | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                                                                                                  |
| id                    | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                                                                                                       |
| logo                  | File#id            | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | File identifier that contains the logo image.                                                                                                                    |
| metadata              | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | An array of metadatum used to store additional arbitrary data                                                                                                    |
| metadata[]            | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                  |
| metadata[].key        | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Metadatum unique key                                                                                                                                             |
| metadata[].type       | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Metadatum value type                                                                                                                                             |
| metadata[].value      | mixed              | ![n/a][naIcon]      | ![true][trueIcon]   | ![false][falseIcon] | Metadatum value                                                                                                                                                  |
| name                  | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Name                                                                                                                                                             |
| parameters            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | [Depreciated]                                                                                                                                                    |
| parameters[]          | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                  |
| parents               | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of parent Categories                                                                                                                                        |
| parents[]             | Category#id        | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Parent Category identifier                                                                                                                                       |
| pois                  | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Pois belonging on that Category                                                                                                                          |
| pois[]                | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Poi identifier                                                                                                                                                   |
| rank                  | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Rank used to sort root Categories (The one without parent). Higher come first.                                                                                   |
| signature             | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Unique optional identifier used to reference that Site to be used in data import                                                                                 |
| site                  | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                                                                                                  |
| tags                  | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Tags                                                                                                                                                     |
| tags[]                | Tag#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Tag identifier                                                                                                                                                   |
| type                  | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Type used to store arbitrary role of that Category in client applications.                                                                                       |
| version               | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change                                                                                                                |
| updated_at            | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                                                                                                                                            |

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |


#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | Category         | The Category serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### CREATE

#### Parameters
| Name                  | In     | Type        | Nullable            | Required            | Default        | Constraint                     |
|-----------------------|--------|-------------|---------------------|---------------------|----------------|--------------------------------|
| X-API-LOCALE          | Header | string      | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages  |
| children              | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| children[]            | Data   | array       | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| children[].id         | Data   | Category#id | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Category#id on same site |
| children[].position   | Data   | int         | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| client_id             | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| color                 | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| logo                  | Data   | File#id     | ![true][trueIcon]   | ![false][falseIcon] | null           | Valid File#id on same site     |
| metadata              | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| metadata[].key        | Data   | string      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| metadata[].type       | Data   | string      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| metadata[].value      | Data   | mixed       | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| name                  | Data   | string      | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string               |
| parameters            | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| parameters[]          | Data   | string      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| parents               | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| parents[]             | Data   | Category#id | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| pois                  | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| pois[]                | Data   | Poi#id      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Poi#id on same site      |
| rank                  | Data   | int         | ![false][falseIcon] | ![false][falseIcon] | 0              |                                |
| signature             | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| site                  | Data   | int         | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |
| tags                  | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| tags[]                | Data   | Tag#id      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Tag#id on same site      |
| type                  | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |


#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: Category#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

#### Parameters
| Name                  | In     | Type        | Nullable            | Required            | Default         | Constraint                     |
|-----------------------|--------|-------------|---------------------|---------------------|-----------------|--------------------------------|
| id                    | Route  | int         | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon]  |                                |
| X-API-LOCALE          | Header | string      | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages  |
| children              | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| children[]            | Data   | array       | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| children[].id         | Data   | Category#id | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Category#id on same site |
| children[].position   | Data   | int         | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| client_id             | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                                |
| color                 | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                                |
| logo                  | Data   | File#id     | ![true][trueIcon]   | ![false][falseIcon] | Preserves value | Valid File#id on same site     |
| metadata              | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| metadata[].key        | Data   | string      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| metadata[].type       | Data   | string      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| metadata[].value      | Data   | mixed       | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| name                  | Data   | string      | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Not empty string               |
| parameters            | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| parameters[]          | Data   | string      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| parents               | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| parents[]             | Data   | Category#id | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |
| pois                  | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| pois[]                | Data   | Poi#id      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Poi#id on same site      |
| rank                  | Data   | int         | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| signature             | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                                |
| site                  | Data   | Site#id     | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon]  | Valid Site#id                  |
| tags                  | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| tags[]                | Data   | Tag#id      | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Tag#id on same site      |
| type                  | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                                |


#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 204       | Success               | application/json | ![n/a][naIcon]      |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### DELETE

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    |
|--------------|--------|--------|---------------------|----------------|-------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |

#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 204       | Success               | application/json | ![n/a][naIcon]   |
| 400       | Invalid data          | application/json | Error            |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

### SEARCH

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    |
|--------------|--------|--------|---------------------|----------------|-------------------------------|
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |
| type         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | Category[]       | The Category serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### BATCH DELETE

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint |
|--------------|--------|--------|---------------------|----------------|------------|
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |            |
| id           | Query  | int[]  | ![true][trueIcon]   | ![n/a][naIcon] |            |

#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 204       | Success               | application/json | ![n/a][naIcon]   |
| 400       | Invalid data          | application/json | Error            |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

[trueIcon]: https://maxcdn.icons8.com/Color/PNG/24/Very_Basic/checkmark-24.png
[falseIcon]: https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png
[naIcon]: https://maxcdn.icons8.com/Color/PNG/24/Business/not_applicable-24.png