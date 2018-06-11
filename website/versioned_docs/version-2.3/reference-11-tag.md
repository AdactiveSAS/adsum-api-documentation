---
id: version-2.3-reference-11-tag
title: Tag
original_id: reference-11-tag
---

## CRUD
| CRUD         | Http Verb | Route     | Description                        |
|--------------|-----------|-----------|------------------------------------|
| READ         | GET       | /tag/{id} | Retrieve a single Tag from it's id |
| CREATE       | POST      | /tag      | Create a Tag                       |
| UPDATE       | POST      | /tag/{id} | Update a Tag                       |
| DELETE       | DELETE    | /tag/{id} | Delete a Tag                       |
| SEARCH       | GET       | /tag      | Looking for Tags                   |
| BATCH DELETE | DELETE    | /tag      | Delete multiple Tags               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field        | Type               | Readonly            | Nullable            | Translatable        | Description                                                                      |
|--------------|--------------------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------|
| categories   | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of associated Categories                                                    |
| categories[] | Category#id        | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Associated Category identifier                                                   |
| created_at   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                  |
| id           | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                       |
| medias       | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |  List of associated Medias                                                       |
| medias[]     | Media#id           | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Associated Media identifier                                                      |
| name         | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Name                                                                             |
| playlists    | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of associated Playlists                                                     |
| playlists[]  | Playlist#id        | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Associated Playlist identifier                                                   |
| pois         | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |  List of associated POIs                                                         |
| pois[]       | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Associated POI identifier                                                        |
| signature    | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Unique optional identifier used to reference that Site to be used in data import |
| site         | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                  |
| updated_at   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                                                            |
| version      | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change                                |

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |


#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|--- | 
| 200       | Success               | application/json | Tag              | The Tag serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### CREATE

#### Parameters
| Name         | In     | Type        | Nullable            | Required            | Default        | Constraint                     |
|--------------|--------|-------------|---------------------|---------------------|----------------|--------------------------------|
| X-API-LOCALE | Header | string      | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages  |
| categories   | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| categories[] | Data   | Category#id | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Category#id on same site |
| medias       | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| medias[]     | Data   | Media#id    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Media#id on same site    |
| name         | Data   | string      | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string               |
| playlists    | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| playlists[]  | Data   | Playlist#id | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Playlist#id on same site |
| pois         | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| pois[]       | Data   | Poi#id      | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Poi#id on same site      |
| signature    | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| site         | Data   | Site#id     | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |


#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: Tag#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

#### Parameters
| Name         | In     | Type        | Nullable            | Required            | Default         | Constraint                     |
|--------------|--------|-------------|---------------------|---------------------|-----------------|--------------------------------|
| X-API-LOCALE | Header | string      | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages  |
| categories   | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| categories[] | Data   | Category#id | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Category#id on same site |
| medias       | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| medias[]     | Data   | Media#id    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Media#id on same site    |
| name         | Data   | string      | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Not empty string               |
| playlists    | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| playlists[]  | Data   | Playlist#id | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Playlist#id on same site |
| pois         | Data   | array       | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |
| pois[]       | Data   | Poi#id      | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Poi#id on same site      |
| signature    | Data   | string      | ![true][trueIcon]   | ![false][falseIcon] | Preserves value | null                           |
| site         | Data   | Site#id     | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Valid Site#id                  |


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
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | Tag[]            | The Tag serialisation will differs depending on X-API-MODE |
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
