# Tag

## CRUD
| CRUD         | Http Verb | Route          | Description |
|--------------|-----------|----------------|-------------|
| READ         | GET       | /tag/{id} |             |
| CREATE       | POST      | /tag      |             |
| UPDATE       | POST      | /tag/{id} |             |
| DELETE       | DELETE    | /tag/{id} |             |
| SEARCH       | GET       | /tag      |             |
| BATCH DELETE | DELETE    | /tag      |             |

## Model
| Field        | Type               | Readonly            | Nullable            | Translatable        | Description |
|--------------|--------------------|---------------------|---------------------|---------------------|-------------|
| categories   | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| categories[] | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| created_at   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| id           | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| medias       | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| medias[]     | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| name         | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   |             |
| playlist     | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| playlist[]   | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| pois         | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| pois[]       | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| signature    | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| site         | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| updated_at   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| version      | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |             |
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |             |


#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 200       | Success               | application/json | Tag              |
| 400       | Invalid data          | application/json | Error            |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

### CREATE

#### Parameters
| Name         | In     | Type   | Nullable            | Required            | Default             | Constraint                     | Description |
|--------------|--------|--------|---------------------|---------------------|---------------------|--------------------------------|-------------|
| X-API-LOCALE | Header | string | ![false][falseIcon] | ![false][falseIcon] | Site#locale         | Must be one of Site#languages  |             |
| categories   | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | []                  |                                |             |
| categories[] | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Category#id on same site |             |
| medias       | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | []                  |                                |             |
| medias[]     | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Media#id on same site    |             |
| name         | Data   | string | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon]      | Not empty string               |             |
| playlists    | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | []                  |                                |             |
| playlists[]  | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Playlist#id on same site |             |
| pois         | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | []                  |                                |             |
| pois[]       | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]      | Valid Poi#id on same site      |             |
| signature    | Data   | string | ![true][trueIcon]   | ![false][falseIcon] | null                |                                |             |
| site         | Data   | int    | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon]      | Valid Site#id                  |             |


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
| Name         | In     | Type   | Nullable            | Required            | Default         | Constraint                     | Description |
|--------------|--------|--------|---------------------|---------------------|-----------------|--------------------------------|-------------|
| X-API-LOCALE | Header | string | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages  |             |
| categories   | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |             |
| categories[] | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Category#id on same site |             |
| medias       | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |             |
| medias[]     | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Media#id on same site    |             |
| name         | Data   | string | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Not empty string               |             |
| playlists    | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |             |
| playlists[]  | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Playlist#id on same site |             |
| pois         | Data   | array  | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                                |             |
| pois[]       | Data   | int    | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid Poi#id on same site      |             |
| signature    | Data   | string | ![true][trueIcon]   | ![false][falseIcon] | Preserves value | null                           |             |
| site         | Data   | int    | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Valid Site#id                  |             |


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

#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 200       | Success               | application/json | Tag[]       |
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