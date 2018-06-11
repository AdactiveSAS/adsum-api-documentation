---
id: version-2.3-reference-01-site
title: Site
original_id: reference-01-site
---

## CRUD
| CRUD   | Http Verb | Route      | Description                         |
|--------|-----------|------------|-------------------------------------|
| READ   | GET       | /site/{id} | Retrieve a single Site from it's id |
| UPDATE | POST      | /site/{id} | Update a single Site                |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ operation). So if you use the legacy one 
(standard), the model may differs on some fields.

| Field                     | Type                | Readonly            | Nullable            | Translatable        | Description                                                                                                                                                               |
|---------------------------|---------------------|---------------------|---------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| address                   | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Postal address                                                                                                                                                            |
| city                      | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | City name                                                                                                                                                                 |
| client_id                 | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | An arbitrary field used to store external identfier to match our own                                                                                                      |
| cp                        | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Postal code                                                                                                                                                               |
| created_at                | datetime (ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                                                                                                           |
| description               | string              | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   | A field used to give general information about the Site                                                                                                                   |
| direction                 | string              | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   | Information about how to go to the Site                                                                                                                                   |
| email                     | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Contact email address of the Site                                                                                                                                         |
| gps_positions             | array               | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Array of gps positions references used to geolocalize the Site                                                                                                            |
| gps_positions[]           | object              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                           |
| gps_positions[].altitude  | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The altitude of the point in real world                                                                                                                                   |
| gps_positions[].longitude | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The longitude of the point in real world                                                                                                                                  |
| gps_positions[].latitude  | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The latitude of the point in real world                                                                                                                                   |
| gps_positions[].x         | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The x coordinate in our 3D system                                                                                                                                         |
| gps_positions[].y         | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The y coordinate in our 3D system                                                                                                                                         |
| gps_positions[].z         | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The z coordinate in our 3D system                                                                                                                                         |
| gps_transform             | array               | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | 3*3 transformation matrix used to convert UTM system to 3D system                                                                                                         |
| gps_transform[]           | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                           |
| gps_translate             | array               | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | 3D translation vector used to convert UTM system to 3D system                                                                                                             |
| gps_translate[]           | float               | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                           |
| id                        | int                 | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | The identifier                                                                                                                                                            |
| languages                 | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of available locales used in that Site. This means all translatable data may be available in each of theses languages.                                               |
| languages[]               | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | One of supported locale: "en", "fr", "de", "it", "es", "zh", "ja", "ko", "da", "cs".  Need more ? Ask us.                                                                 |
| locale                    | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Use to define the default locale to use on that Site. It must be one of Site#languages locale. May be null only if localization is not needed with empty languages array. |
| logo                      | File#id             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | The File identifier that contains the logo image.                                                                                                                         |
| metadata                  | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | An array of metadatum used to store additional arbitrary data                                                                                                             |
| metadata[]                | object              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                           |
| metadata[].key            | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Metadatum unique key                                                                                                                                                      |
| metadata[].type           | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Metadatum value type                                                                                                                                                      |
| metadata[].value          | mixed               | ![n/a][naIcon]      | ![true][trueIcon]   | ![false][falseIcon] | Metadatum value                                                                                                                                                           |
| name                      | string              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Name                                                                                                                                                                      |
| opening                   | string              | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   | Opening hours                                                                                                                                                             |
| phone                     | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Phone number                                                                                                                                                              |
| signature                 | string              | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Unique optional identifier used to reference that Site to be used in data import                                                                                          |
| target_platforms          | array               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | [Depreciated]                                                                                                                                                             |
| target_platforms[]        | string              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                           |
| version                   | int                 | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change                                                                                                                         |
| updated_at                | datetime(ISO 8601)  | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                                                                                                                                                     |

### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |

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
