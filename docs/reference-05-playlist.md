---
id: reference-05-playlist
title: Playlist
---

## CRUD
| CRUD         | Http Verb | Route     | Description                        |
|--------------|-----------|-----------|------------------------------------|
| READ         | GET       | /playlist/{id} | Retrieve a single Playlist from it's id |
| CREATE       | POST      | /playlist      | Create a Playlist                       |
| UPDATE       | POST      | /playlist/{id} | Update a Playlist                       |
| DELETE       | DELETE    | /playlist/{id} | Delete a Playlist                       |
| SEARCH       | GET       | /playlist      | Looking for Playlists                   |
| BATCH DELETE | DELETE    | /playlist      | Delete multiple Playlists               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field        | Type               | Readonly            | Nullable            | Translatable        | Description                                                                      |
|--------------|--------------------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------|
| client_id    | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |                                                                                  |
| created_at   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                  |
| description  | string             | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   |                                                                                  |
| id           | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                       |
| medias       | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |                                                                                  |
| medias[]     | Media#id           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![false][falseIcon] |                                                                                  |
| name         | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Name                                                                             |
| parameters   | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |                                                                                  |
| parameters[] | string             | ![n/a][naIcon]      | ![n/a][naIcon]      | ![false][falseIcon] |                                                                                  |
| tags         | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |                                                                                  |
| tags[]       | Tag#id             | ![n/a][naIcon]      | ![n/a][naIcon]      | ![false][falseIcon] |                                                                                  |
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
| 200       | Success               | application/json | Playlist            | The Playlist serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### CREATE

#### Parameters
| Name         | In     | Type    | Nullable            | Required            | Default        | Constraint                    |
|--------------|--------|---------|---------------------|---------------------|----------------|-------------------------------|
| X-API-LOCALE | header | string  | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |
| client_id    | Data   | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                               |
| description  | Data   |         | ![true][trueIcon]   | ![false][falseIcon] | null           |                               |
| medias       | Data   |         | ![false][falseIcon] | ![false][falseIcon] | []             |                               |
| medias[]     | Data   |         | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                               |
| name         | Data   | string  | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string              |
| parameters   | Data   |         | ![false][falseIcon] | ![false][falseIcon] | []             |                               |
| parameters[] | Data   |         | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                               |
| tags         | Data   |         | ![false][falseIcon] | ![false][falseIcon] | []             |                               |
| tags[]       | Data   |         | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                               |
| signature    | Data   | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                               |
| site         | Data   | Site#id | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                 |

#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: Playlist#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

#### Parameters
| Name         | In     | Type    | Nullable            | Required            | Default         | Constraint                    |
|--------------|--------|---------|---------------------|---------------------|-----------------|-------------------------------|
| X-API-LOCALE | header | string  | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages |
| client_id    | Data   | string  | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                               |
| description  | Data   |         | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                               |
| medias       | Data   |         | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                               |
| medias[]     | Data   |         | ![false][falseIcon] | ![n/a][naIcon]      | [n/a][naIcon]   |                               |
| name         | Data   | string  | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Not empty string              |
| parameters   | Data   |         | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                               |
| parameters[] | Data   |         | ![false][falseIcon] | ![n/a][naIcon]      | Preserves value |                               |
| tags         | Data   |         | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                               |
| tags[]       | Data   |         | ![false][falseIcon] | ![n/a][naIcon]      | Preserves value |                               |
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
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | Playlist[]            | The Playlist serialisation will differs depending on X-API-MODE |
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
