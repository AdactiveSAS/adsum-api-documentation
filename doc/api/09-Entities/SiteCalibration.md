# SiteCalibration

## CRUD
| CRUD         | Http Verb | Route     | Description                        |
|--------------|-----------|-----------|------------------------------------|
| READ         | GET       | /sitecalibration/{id} | Retrieve a single SiteCalibration from it's id |
| CREATE       | POST      | /sitecalibration      | Create a SiteCalibration                       |
| UPDATE       | POST      | /sitecalibration/{id} | Update a SiteCalibration                       |
| DELETE       | DELETE    | /sitecalibration/{id} | Delete a SiteCalibration                       |
| SEARCH       | GET       | /sitecalibration      | Looking for SiteCalibrations                   |
| BATCH DELETE | DELETE    | /sitecalibration      | Delete multiple SiteCalibrations               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field                  | Type                | Readonly            | Nullable            | Translatable        | Description                                                                      |
|------------------------|---------------------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------|
| device                 | Device#id           | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Device identifier                                                                  |
| floor_calibrations     | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Floor calibrations                                                                  |
| floor_calibrations[]   | FloorCalibration#id | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Floor calibration identifier                                                                  |
| id                     | int                 | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                       |
| site                   | Site#id             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                  |
| start_floor            | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Start floor id, identifying the floor to show by default                                                                 |
| start_point_floor      | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Start point floor id, identifying the floor where the device is on                                                                 |
| start_point_position   | object              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Start point position, identifying the device position into the floor identified by start_point_floor                                                                 |
| start_point_position.x | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | X coordinate                                                                 |
| start_point_position.y | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Y coordinate                                                                 |
| start_point_position.z | int                 | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Z coordinate                                                                 |

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
| 200       | Success               | application/json | SiteCalibration              | The SiteCalibration serialisation will differs depending on X-API-MODE |
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
| device                  | Data   | Device#id           | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Device#id which doesn't have a site_calibration |
| floor_calibrations      | Data   | array               | ![false][falseIcon] | ![false][falseIcon] | []             |                   |
| floor_calibrations[]    | Data   | FloorCalibration#id | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid FloorCalibration#id                 |
| site                    | Data   | Site#id             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |
| start_floor             | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| start_point_floor       | Data   | int                 | ![true][trueIcon]   | ![false][falseIcon] | null           |  |
| start_point_position    | Data   | object              | ![true][trueIcon]   | ![false][falseIcon] | null           |  |
| start_point_position.x  | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| start_point_position.y  | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |
| start_point_position.z  | Data   | int                 | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |  |

#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: SiteCalibration#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

#### Parameters
| Name                    | In     | Type                | Nullable            | Required            | Default        |  Constraint                     |
|-------------------------|--------|---------------------|---------------------|---------------------|-----------------|--------------------------------|
| X-API-LOCALE            | Header | string              | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages  |
| device                  | Data   | Device#id           | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Valid Device#id which doesn't have a site_calibration |
| floor_calibrations      | Data   | array               | ![false][falseIcon] | ![false][falseIcon] | Preserves value |                   |
| floor_calibrations[]    | Data   | FloorCalibration#id | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  | Valid FloorCalibration#id                 |
| site                    | Data   | Site#id             | ![false][falseIcon] | ![false][falseIcon] | Preserves value | Valid Site#id                  |
| start_floor             | Data   | int                 | ![false][falseIcon] | ![false][falseIcon] | Preserves value |  |
| start_point_floor       | Data   | int                 | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |  |
| start_point_position    | Data   | object              | ![true][trueIcon]   | ![false][falseIcon] | Preserves value |  |
| start_point_position.x  | Data   | int                 | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |  |
| start_point_position.y  | Data   | int                 | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |  |
| start_point_position.z  | Data   | int                 | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |  |

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
| device       | Query  | int    | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | SiteCalibration[]            | The SiteCalibration serialisation will differs depending on X-API-MODE |
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