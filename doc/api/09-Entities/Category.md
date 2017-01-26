# Category

## CRUD
| CRUD         | Http Verb | Route          | Description |
|--------------|-----------|----------------|-------------|
| READ         | GET       | /category/{id} |             |
| CREATE       | POST      | /category      |             |
| UPDATE       | POST      | /category/{id} |             |
| DELETE       | DELETE    | /category/{id} |             |
| SEARCH       | GET       | /category      |             |
| BATCH DELETE | DELETE    | /category      |             |

## Model
| Field                 | Type               | Readonly            | Nullable            | Translatable        | Description |
|-----------------------|--------------------|---------------------|---------------------|---------------------|-------------|
| childLinks            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| childLinks[]          | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| childLinks[].id       | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| childLinks[].position | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| client_id             | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| color                 | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| created_at            | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| id                    | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| logo                  | int                | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| metadata              | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[].key        | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[].type       | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[].value      | mixed              | ![n/a][naIcon]      | ![true][trueIcon]   | ![false][falseIcon] |             |
| name                  | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   |             |
| parameters            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| parameters[]          | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| parentLinks           | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| parentLinks[]         | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| pois                  | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| pois[]                | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| rank                  | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| signature             | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| site                  | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| tags                  | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| tags[]                | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| type                  | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| updated_at            | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| version               | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |             |
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |             |


#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 200       | Success               | application/json | Category         |
| 400       | Invalid data          | application/json | Error            |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

### CREATE

#### Parameters
| Name                  | In     | Type               | Required            | Default             | Constraint                     | Description |
|-----------------------|--------|--------------------|---------------------|---------------------|--------------------------------|-------------|
| X-API-LOCALE          | Header | string             | ![false][falseIcon] | Site#locale         | Must be one of Site#languages  |             |
| childLinks            | Data   | array              | ![false][falseIcon] | []                  |                                |             |
| childLinks[]          | Data   | array              | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| childLinks[].id       | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Category#id on same site |             |
| childLinks[].position | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| client_id             | Data   | string &#124; null | ![false][falseIcon] | null                |                                |             |
| color                 | Data   | string &#124; null | ![false][falseIcon] | null                |                                |             |
| logo                  | Data   | int &#124; null    | ![false][falseIcon] | null                | Valid File#id on same site     |             |
| metadata              | Data   | array              | ![false][falseIcon] | []                  |                                |             |
| metadata[].key        | Data   | string             | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| metadata[].type       | Data   | string             | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| metadata[].value      | Data   | mixed              | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| name                  | Data   | string             | ![true][trueIcon]   | ![n/a][naIcon]      | Not empty string               |             |
| parameters            | Data   | array              | ![false][falseIcon] | []                  |                                |             |
| parameters[]          | Data   | string             | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| parentLinks           | Data   | array              | ![false][falseIcon] | []                  |                                |             |
| parentLinks[]         | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]      |                                |             |
| pois                  | Data   | array              | ![false][falseIcon] | []                  |                                |             |
| pois[]                | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Poi#id on same site      |             |
| rank                  | Data   | int                | ![false][falseIcon] | 0                   |                                |             |
| signature             | Data   | string &#124; null | null                | ![false][falseIcon] | null                           |             |
| site                  | Data   | int                | ![true][trueIcon]   | ![n/a][naIcon]      | Valid Site#id                  |             |
| tags                  | Data   | array              | ![false][falseIcon] | []                  |                                |             |
| tags[]                | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Tag#id on same site      |             |
| type                  | Data   | string &#124; null | null                | ![false][falseIcon] | null                           |             |


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
| Name                  | In     | Type               | Required            | Default         | Constraint                     | Description |
|-----------------------|--------|--------------------|---------------------|-----------------|--------------------------------|-------------|
| id                    | Route  | int                | ![true][trueIcon]   | ![n/a][naIcon]  |                                |             |
| X-API-LOCALE          | Header | string             | ![false][falseIcon] | Site#locale     | Must be one of Site#languages  |             |
| childLinks            | Data   | array              | ![false][falseIcon] | Preserves value |                                |             |
| childLinks[]          | Data   | array              | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| childLinks[].id       | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Category#id on same site |             |
| childLinks[].position | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| client_id             | Data   | string &#124; null | ![false][falseIcon] | Preserves value |                                |             |
| color                 | Data   | string &#124; null | ![false][falseIcon] | Preserves value |                                |             |
| logo                  | Data   | int &#124; null    | ![false][falseIcon] | Preserves value | Valid File#id on same site     |             |
| metadata              | Data   | array              | ![false][falseIcon] | Preserves value |                                |             |
| metadata[].key        | Data   | string             | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| metadata[].type       | Data   | string             | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| metadata[].value      | Data   | mixed              | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| name                  | Data   | string             | ![false][falseIcon] | Preserves value | Not empty string               |             |
| parameters            | Data   | array              | ![false][falseIcon] | Preserves value |                                |             |
| parameters[]          | Data   | string             | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| parentLinks           | Data   | array              | ![false][falseIcon] | Preserves value |                                |             |
| parentLinks[]         | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]  |                                |             |
| pois                  | Data   | array              | ![false][falseIcon] | Preserves value |                                |             |
| pois[]                | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Poi#id on same site      |             |
| rank                  | Data   | int                | ![false][falseIcon] | Preserves value |                                |             |
| signature             | Data   | string&#124;null   | ![false][falseIcon] | Preserves value |                                |             |
| site                  | Data   | int                | ![false][falseIcon] | ![n/a][naIcon]  | Valid Site#id                  |             |
| tags                  | Data   | array              | ![false][falseIcon] | Preserves value |                                |             |
| tags[]                | Data   | int                | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Tag#id on same site      |             |
| type                  | Data   | string&#124; null  | ![false][falseIcon] | Preserves value |                                |             |


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
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |             |

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
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------|
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |             |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |             |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |             |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |             |
| type         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |             |

#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 200       | Success               | application/json | Category[]       |
| 400       | Invalid data          | application/json | Error            |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

### BATCH DELETE

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint | Description |
|--------------|--------|--------|---------------------|----------------|------------|-------------|
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |            |             |
| id           | Query  | int[]  | ![true][trueIcon]   | ![n/a][naIcon] |            |             |

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