---
id: reference-10-floorCalibration
title: FloorCalibration
---

## CRUD
| CRUD         | Http Verb | Route                  | Description                        |
|--------------|-----------|------------------------|------------------------------------|
| READ         | GET       | /floorcalibration/{id} | Retrieve a single FloorCalibration from it's id |
| CREATE       | POST      | /floorcalibration      | Create a FloorCalibration                       |
| UPDATE       | POST      | /floorcalibration/{id} | Update a FloorCalibration                       |
| DELETE       | DELETE    | /floorcalibration/{id} | Delete a FloorCalibration                       |
| SEARCH       | GET       | /floorcalibration      | Looking for FloorCalibrations                   |
| BATCH DELETE | DELETE    | /floorcalibration      | Delete multiple FloorCalibrations               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field                  | Type                | Readonly            | Nullable            | Translatable        | Description                                                                      |
|------------------------|---------------------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------|
| eye                    | object              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Camera position                                                                 |
| eye.x                  | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | X coordinate                                                                 |
| eye.y                  | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Y coordinate                                                                 |
| eye.z                  | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Z coordinate                                                                 |
| floor_id               | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Floor identifier                                                                       |
| id                     | int                 | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                       |
| site                   | Site#id             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                  |
| site_calibration       | SiteCalibration#id  | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | SiteCalibration identifier                                                                  |
| target                 | object              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Camera target position                                                                 |
| target.x               | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | X coordinate                                                                 |
| target.y               | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Y coordinate                                                                 |
| target.z               | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Z coordinate                                                                 |
| up                     | object              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Camera orientation                                                                 |
| up.x                   | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | X coordinate                                                                 |
| up.y                   | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Y coordinate                                                                 |
| up.z                   | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Z coordinate                                                                 |
| zoom_max               | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Maximum zoom value                                                                       |
| zoom_min               | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Minimum zoom value                                                                       |

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
| 200       | Success               | application/json | FloorCalibration              | The FloorCalibration serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### CREATE

#### Parameters
| Name                    | In     | Type                | Nullable            | Required            | Default        | Constraint                     |
|-------------------------|--------|---------------------|---------------------|---------------------|----------------|--------------------------------|
| X-API-LOCALE            | Header | string              | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages  |
| eye                     | Data   | object              | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |  |
| eye.x                   | Data   | object              | ![false][falseIcon] | ![true][trueIcon]   | 0 |  |
| eye.y                   | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | 0 |  |
| eye.z                   | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | 0 |  |
| floor_id                | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |                  |
| site                    | Data   | Site#id             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |
| site_calibration        | Data   | SiteCalibration#id  | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid SiteCalibration#id on same site |
| target                  | Data   | object              | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |  |
| target.x                | Data   | object              | ![false][falseIcon] | ![true][trueIcon]   | 0 |  |
| target.y                | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | 0 |  |
| target.z                | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | 0 |  |
| up                      | Data   | object              | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| up.x                    | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| up.y                    | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| up.z                    | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| zoom_max                | Data   | int                 | ![true][trueIcon]   | ![false][falseIcon] | null |                  |
| zoom_min                | Data   | int                 | ![true][trueIcon]   | ![false][falseIcon] | null |                  |

#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: FloorCalibration#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

#### Parameters
| Name                    | In     | Type                | Nullable            | Required            | Default        | Constraint                     |
|-------------------------|--------|---------------------|---------------------|---------------------|----------------|--------------------------------|
| X-API-LOCALE            | Header | string              | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages  |
| eye                     | Data   | object              | ![false][falseIcon] | ![false][falseIcon] | Preserves value |  |
| eye.x                   | Data   | object              | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| eye.y                   | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| eye.z                   | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| floor_id                | Data   | int                 | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                  |
| site                    | Data   | Site#id             | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Valid Site#id                  |
| site_calibration        | Data   | SiteCalibration#id  | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Valid SiteCalibration#id on same site |
| target                  | Data   | object              | ![false][falseIcon] | ![false][falseIcon] | Preserves value |  |
| target.x                | Data   | object              | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| target.y                | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| target.z                | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| up                      | Data   | object              | ![false][falseIcon] | ![false][falseIcon] | Preserves value |  |
| up.x                    | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| up.y                    | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| up.z                    | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| zoom_max                | Data   | int                 | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                  |
| zoom_min                | Data   | int                 | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |                  |

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
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | FloorCalibration[]            | The FloorCalibration serialisation will differs depending on X-API-MODE |
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
