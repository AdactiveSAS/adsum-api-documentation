# Site

## Model
| Field                     | Type                | Readonly            | Nullable            | Translatable        | Description |
|---------------------------|---------------------|---------------------|---------------------|---------------------|-------------|
| address                   | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| city                      | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| client_id                 | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| cp                        | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| created_at                | datetime (ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| description               | string              | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   |             |
| direction                 | string              | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   |             |
| email                     | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| gps_positions             | array               | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| gps_positions[]           | object              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_positions[].altitude  | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_positions[].longitude | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_positions[].latitude  | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_positions[].x         | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_positions[].y         | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_positions[].z         | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_transform             | array               | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| gps_transform[]           | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| gps_translate             | array               | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| gps_translate[]           | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| id                        | int                 | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| languages                 | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| languages[]               | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| locale                    | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| logo                      | File#id             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| metadata                  | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[]                | object              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[].key            | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[].type           | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| metadata[].value          | mixed               | ![n/a][naIcon]      | ![true][trueIcon]   | ![false][falseIcon] |             |
| name                      | string              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| opening                   | string              | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   |             |
| phone                     | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| signature                 | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] |             |
| target_platforms          | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| target_platforms[]        | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |             |
| version                   | int                 | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| updated_at                | datetime(ISO 8601)  | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |

## CRUD
| CRUD   | Http Verb | Route      | Description      |
|--------|-----------|------------|------------------|
| READ   | GET       | /site/{id} |                  |
| UPDATE | POST      | /site/{id} |                  |

### READ

#### Parameters
| Name         | In        | Type    | Required            | Default        | Constraint                    | Description |
|--------------|-----------|---------|---------------------|----------------|-------------------------------|-------------|
| id           | Route     | int     | ![true][trueIcon]   | ![n/a][naIcon] |                               |             |
| X-API-LOCALE | Header    | string  | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |             |

#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 200       | Success               | application/json | Site             |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

#### Examples

### UPDATE

#### Parameters
| Name                      | In    | Type    | Nullable            | Translatable        | Default        | Constraints                      |
|---------------------------|-------|---------|---------------------|---------------------|----------------|----------------------------------|
| address                   | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| city                      | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| client_id                 | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| cp                        | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| description               | Body  | string  | ![true][trueIcon]   | ![true][trueIcon]   | null           |                                  |
| direction                 | Body  | string  | ![true][trueIcon]   | ![true][trueIcon]   | null           |                                  |
| email                     | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| gps_positions             | Body  | array   | ![true][trueIcon]   | ![false][falseIcon] | null           |                                  |
| gps_positions[]           | Body  | object  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_positions[].altitude  | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_positions[].longitude | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_positions[].latitude  | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_positions[].x         | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_positions[].y         | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_positions[].z         | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_transform             | Body  | array   | ![true][trueIcon]   | ![false][falseIcon] | null           | Count: 6                         |
| gps_transform[]           | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| gps_translate             | Body  | array   | ![true][trueIcon]   | ![false][falseIcon] | null           | Count: 3                         |
| gps_translate[]           | Body  | float   | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| id                        | Route | int     | ![false][falseIcon] | ![false][falseIcon] | Auto-generated | Strictly Positive                |
| languages                 | Body  | array   | ![false][falseIcon] | ![false][falseIcon] | []             |                                  |
| languages[]               | Body  | string  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| locale                    | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                                  |
| logo                      | Body  | File#id | ![true][trueIcon]   | ![false][falseIcon] | null           | File must exists                 |
| metadata                  | Body  | array   | ![false][falseIcon] | ![false][falseIcon] | []             |                                  |
| metadata[]                | Body  | object  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| metadata[].key            | Body  | string  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| metadata[].type           | Body  | string  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| metadata[].value          | Body  | mixed   | ![true][trueIcon]   | ![false][falseIcon] | ![n/a][naIcon] |                                  |
| name                      | Body  | string  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] | Max length: 255                  |
| opening                   | Body  | string  | ![true][trueIcon]   | ![true][trueIcon]   | null           |                                  |
| phone                     | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| signature                 | Body  | string  | ![true][trueIcon]   | ![false][falseIcon] | null           | Max length: 255                  |
| target_platforms          | Body  | array   | ![false][falseIcon] | ![false][falseIcon] | []             |                                  |
| target_platforms[]        | Body  | string  | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] | Choice: "web", "kiosk", "mobile" |

#### Responses
| Http Code | Description           | Response type    | Response Content |
|-----------|-----------------------|------------------|------------------|
| 200       | Success               | application/json | Site             |
| 400       | Invalid data          | application/json | Error            |
| 403       | Authentication Error  | application/json | Error            |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |
| 500       | Internal Server Error | application/json | Error            |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |

[trueIcon]: https://maxcdn.icons8.com/Color/PNG/24/Very_Basic/checkmark-24.png
[falseIcon]: https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png
[naIcon]: https://maxcdn.icons8.com/Color/PNG/24/Business/not_applicable-24.png