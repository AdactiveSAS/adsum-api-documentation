---
id: reference-02-place
title: Place
---

## CRUD
| CRUD         | Http Verb | Route     | Description                        |
|--------------|-----------|-----------|------------------------------------|
| READ         | GET       | /place/{id} | Retrieve a single Place from it's id |
| CREATE       | POST      | /place      | Create a Place                       |
| UPDATE       | POST      | /place/{id} | Update a Place                       |
| DELETE       | DELETE    | /place/{id} | Delete a Place                       |
| SEARCH       | GET       | /place      | Looking for Places                   |
| BATCH DELETE | DELETE    | /place      | Delete multiple Places               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field       | Type               | Readonly            | Nullable            | Translatable        | Description                                                                      |
|-------------|--------------------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------|
| building_id | int                | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | If the Place correspond to a building, here come the building identifier         |
| created_at  | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                  |
| floor_id    | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Floor identifier                                                                 |
| id          | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                       |
| name        | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Name                                                                             |
| pois        | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of associated POIs                                                          |
| pois[]      | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Associated POI identifier                                                        |
| shape_id    | int                | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | If the Place correspond to a shape, here come the shape identifier               |
| position    | object             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Centroid position                                                                |
| position.x  | float              | ![n/a][naIcon]      | ![n/a][naIcon]      | ![false][falseIcon] |                                                                                  |
| position.y  | float              | ![n/a][naIcon]      | ![n/a][naIcon]      | ![false][falseIcon] |                                                                                  |
| position.z  | float              | ![n/a][naIcon]      | ![n/a][naIcon]      | ![false][falseIcon] |                                                                                  |
| signature   | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Unique optional identifier used to reference that Site to be used in data import |
| site        | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                  |
| updated_at  | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                                                            |
| version     | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change                                |

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|--- | 
| 200       | Success               | application/json | Place            | The Place serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### CREATE

#### Parameters
| Name         | In     | Type    | Nullable            | Required            | Default        | Constraint                    |
|--------------|--------|---------|---------------------|---------------------|----------------|-------------------------------|
| building_id  | Data   | int     | ![true][trueIcon]   | ![false][falseIcon] | null           |                               |
| floor_id     | Data   | int     | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |                               |
| name         | Data   | string  | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string              |
| pois         | Data   | array   | ![false][falseIcon] | ![false][falseIcon] | []             |                               |
| pois[]       | Data   | Poi#id  | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Poi#id on same site     |
| shape_id     | Data   | int     | ![true][trueIcon]   | ![false][falseIcon] | null           |                               |
| position     | Data   | object  | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |                               |
| position.x   | Data   | float   | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                               |
| position.y   | Data   | float   | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                               |
| position.z   | Data   | float   | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                               |
| signature    | Data   | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                               |
| site         | Data   | Site#id | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                 |

#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: Place#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

#### Parameters
| Name         | In     | Type    | Nullable            | Required            | Default         | Constraint                    |
|--------------|--------|---------|---------------------|---------------------|-----------------|-------------------------------|
| building_id  | Data   | int     | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                               |
| floor_id     | Data   | int     | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                               |
| name         | Data   | string  | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Not empty string              |
| pois         | Data   | array   | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                               |
| pois[]       | Data   | Poi#id  | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Poi#id on same site     |
| shape_id     | Data   | int     | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                               |
| position     | Data   | object  | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                               |
| position.x   | Data   | float   | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  |                               |
| position.y   | Data   | float   | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  |                               |
| position.z   | Data   | float   | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  |                               |
| signature    | Data   | string  | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                               |


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
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | Place[]            | The Place serialisation will differs depending on X-API-MODE |
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
