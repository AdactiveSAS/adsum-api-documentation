# Device

## CRUD
| CRUD         | Http Verb | Route       | Description                          |
|--------------|-----------|-------------|--------------------------------------|
| READ         | GET       | /device/{id} | Retrieve a single Device from it's id |
| CREATE       | POST      | /device      | Create a Device                       |
| UPDATE       | POST      | /device/{id} | Update a Device                       |
| DELETE       | DELETE    | /device/{id} | Delete a Device                       |
| SEARCH       | GET       | /device      | Looking for Devices                   |
| BATCH DELETE | DELETE    | /device      | Delete multiple Devices               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

> CAUTION: Device is an abstract class, so you can't create a Device, you will always have to create an inherited entity of Device.


### Device <abstract>
| Field                | Type               | Readonly            | Nullable            | Translatable        | Description                                                                                                                                           |
|----------------------|--------------------|---------------------|---------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                   | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                                                                                            |
| core_version         | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Core Version                                                                                                                                                  |
| height               | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Device height                                                                                                                               |
| name                 | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Name                                                                                                                                                  |
| site                 | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                                                                                       |
| site_calibration     | SiteCalibration#id | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | SiteCalibration identifier                                                                                                                                       |
| type                 | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Device discriminator field                                                                                                                               |
| validate_at          | datetime(ISO 8601) | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Device error last acknowledgment date                                                                                                                             |
| width                | int                | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Device width                                                                                                                               |

### Discriminator Map
| Discriminator Value | Class       |
|---------------------|-------------|
| kiosk               | Kiosk       |
| mobile              | Mobile      |
| web                 | Web         |

### Kiosk
| Field       | Type    | Readonly            | Nullable            | Translatable        | Description                                                                                        |
|-------------|---------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------------------------|
| location    | string  | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Kiosk text location, used to give textual information                                              |
| position    | object  | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | [Deprecated] Kiosk position, use SiteCalibration#start_point and SiteCalibration#start_point_floor |
| os          | string  | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Operating System                                                                                   |
| position.x  | int     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Kiosk position x coordinate                                                                        |
| position.y  | int     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Kiosk position y coordinate                                                                        |
| position.z  | int     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Kiosk position z coordinate                                                                        |

### Mobile

> No additional fields

### Web

> No additional fields

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|-------------|
| 200       | Success               | application/json | Device           | The Device serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            |              |
| 403       | Authentication Error  | application/json | Error            |              |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |              |
| 500       | Internal Server Error | application/json | Error            |              |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |              |

### CREATE

> You cannot create a Poi as it's abstract, you must choose an inherited entity.

#### Parameters
##### Shared Parameters
| Name                 | In     | Type               | Nullable            | Required            | Default        | Constraint                     |
|----------------------|--------|--------------------|---------------------|---------------------|----------------|--------------------------------|
| X-API-LOCALE         | Header | string             | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages  |
| core_version         | Data   | string             | ![true][trueIcon]   | ![false][falseIcon] | null           | Not empty string               |
| name                 | Data   | string             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string               |
| site                 | Data   | int                | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |
| site_calibration     | Data   | int                | ![true][trueIcon]   | ![false][falseIcon] | null           | Valid SiteCalibration#id       |
| type                 | Data   | string             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | One of discriminator value     |
| validate_at          | Data   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | null           | Valid date                     |

##### Kiosk specific parameters (type="kiosk")
| Name         | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|--------------|------|---------|---------------------|---------------------|----------------|----------------------------|
| height       | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 1080           | Positive integer           |
| location     | Data | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                            |
| os           | Data | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                            |
| position     | Data | object  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                            |
| position.x   | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 0              |                            |
| position.y   | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 0              |                            |
| position.z   | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 0              |                            |
| width        | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 1920           | Positive integer           |

##### Mobile specific parameters (type="mobile")
| Name         | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|--------------|------|---------|---------------------|---------------------|----------------|----------------------------|
| height       | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 640            | Positive integer           |
| width        | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 340            | Positive integer           |

##### Web specific parameters (type="web")
| Name         | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|--------------|------|---------|---------------------|---------------------|----------------|----------------------------|
| height       | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 479            | Positive integer           |
| width        | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 1187           | Positive integer           |


[trueIcon]: https://maxcdn.icons8.com/Color/PNG/24/Very_Basic/checkmark-24.png
[falseIcon]: https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png
[naIcon]: https://maxcdn.icons8.com/Color/PNG/24/Business/not_applicable-24.png