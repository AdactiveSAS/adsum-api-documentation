---
id: reference-07-customObject
title: CustomObject
---

## CRUD
| CRUD         | Http Verb | Route              | Description                                 |
|--------------|-----------|--------------------|---------------------------------------------|
| READ         | GET       | /customobject/{id} | Retrieve a single CustomObject from it's id |
| CREATE       | POST      | /customobject      | Create a CustomObject                       |
| UPDATE       | POST      | /customobject/{id} | Update a CustomObject                       |
| DELETE       | DELETE    | /customobject/{id} | Delete a CustomObject                       |
| SEARCH       | GET       | /customobject      | Looking for CustomObjects                   |
| BATCH DELETE | DELETE    | /customobject      | Delete multiple CustomObjects               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

> CAUTION: CustomObject is an abstract class, so you can't create a CustomObject, you will always have to create an inherited entity of CustomObject.

### CustomObject <abstract>
| Field             | Type     | Readonly            | Nullable            | Translatable        | Description                                                                                                                                                                                                                                    |
|-------------------|----------|---------------------|---------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| autoscale         | bool     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Whether the CustomObject is scale depends on zoom level to keep same size on screen independing from zoom level.                                                                                                                               |
| id                | int      | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                       |
| offset            | object   | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | CustomObejct offset                                                                                                                                                                                                                            |
| offset.x          | float    | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The offset on `x` coordinate                                                                                                                                                                                                                   |
| offset.y          | float    | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The offset on `y` coordinate                                                                                                                                                                                                                   |
| offset.z          | float    | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | The offset on `z` coordinate                                                                                                                                                                                                                   |
| orientation_mode  | string   | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | CustomObject orientation mode: 'BILLBOARD' (always orientated to camera), 'STATIC' (glue to the floor), 'FLIP'.                                                                                                                                |
| permanent_display | bool     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Whether the CustomObject is always visible by default                                                                                                                                                                                          |
| place             | Place#id | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | The Place where the CustomObject belong to                                                                                                                                                                                                     |
| poi               | Poi#id   | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Attached Poi, if the re is a Poi attached to CustomObject the CustomObject will represent that Poi. So if it's a Label, the Label#name value will be same as Poi#name and if it's a Picto, the Picto#file will be same as the first Poi#logos. |
| site              | Site#id  | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                                                                                                                                                                                |
| type              | string   | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | CustomObject discriminator field                                                                                                                                        |

### Discriminator Map

| Discriminator Value | Class |
|---------------------|-------|
| label               | Label |
| picto               | Picto |

### Label
| Field            | Type   | Readonly            | Nullable            | Translatable        | Description                                             |
|------------------|--------|---------------------|---------------------|---------------------|---------------------------------------------------------|
| alignment        | string | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | The text alignement, for now only "center" is supported |
| background_color | string | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Backgroud color in hexa HTML format such as "#ffffff"   |
| font             | string | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | The font to use. Not supported for now                  |
| font_color       | string | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Font color in hexa HTML format such as "#ffffff"        |
| font_size        | string | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Font size                                               |
| label            | string | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Label is the text displayed                             |

### Picto
| Field        | Type    | Readonly            | Nullable            | Translatable        | Description                                                                                                                                   |
|--------------|---------|---------------------|---------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| file         | File#id | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | The file display as the Picto                                                                                                                 |
| height       | int     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Height                                                                                                                                        |
| original_md5 | string  | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Orginal md5 used to generate the picto#file. As the picto#File is resized, we need to keep the original file md5 to prevent useless resizing. |
| width        | int     | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Width                                                                                                                                         |

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
| 200       | Success               | application/json | CustomObject     | The CustomObject serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            |              |
| 403       | Authentication Error  | application/json | Error            |              |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |              |
| 500       | Internal Server Error | application/json | Error            |              |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |              |

### CREATE

> You cannot create a CustomObject as it's abstract, you must choose an inherited entity.

#### Parameters
##### Shared Parameters
| Name              | In     | Type     | Nullable            | Required            | Default         | Constraint                    |
|-------------------|--------|----------|---------------------|---------------------|-----------------|-------------------------------|
| X-API-LOCALE      | Header | string   | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages |
| autoscale         | Data   | boolean  | ![false][falseIcon] | ![false][falseIcon] | false           |                               |
| offset            | Data   | object   | ![false][falseIcon] | ![false][falseIcon] | {x:0, y:0, z:0} |                               |
| offset.x          | Data   | float    | ![n/a][naIcon]      | ![n/a][naIcon]      | 0               |                               |
| offset.y          | Data   | float    | ![n/a][naIcon]      | ![n/a][naIcon]      | 0               |                               |
| offset.z          | Data   | float    | ![n/a][naIcon]      | ![n/a][naIcon]      | 0               |                               |
| orientation_mode  | Data   | string   | ![n/a][naIcon]      | ![false][falseIcon] | "STATIC"        |                               |
| permanent_display | Data   | boolean  | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon]  |                               |
| place             | Data   | Place#id | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon]  | Valid Place#id on same site   |
| poi               | Data   | Poi#id   | ![true][trueIcon]   | ![false][falseIcon] | null            | Valid Poi#id on same Site     |
| site              | Data   | int      | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon]  | Valid Site#id                 |
| type              | Data   | string   | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon]  | One of discriminator value    |

##### Label specific parameters (type="label")
| Name             | In   | Type   | Nullable            | Required            | Default        | Constraint              |
|------------------|------|--------|---------------------|---------------------|----------------|-------------------------|
| alignment        | Data | string | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Only "center" supported |
| background_color | Data | string | ![true][trueIcon]   | ![false][falseIcon] | null           |                         |
| font             | Data | float  | ![true][trueIcon]   | ![false][falseIcon] | null           |                         |
| font_color       | Data | float  | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |                         |
| font_size        | Data | float  | ![false][falseIcon] | ![false][falseIcon] | 10             |                         |
| label            | Data | string | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] |                         |

##### Picto specific parameters (type="picto")
| Name         | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|--------------|------|---------|---------------------|---------------------|----------------|----------------------------|
| file         | Data | File#id | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid File#id on same site |
| height       | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 10             |                            |
| original_md5 | Data | string  | ![true][trueIcon]   | ![false][falseIcon] | null           |                            |
| width        | Data | int     | ![false][falseIcon] | ![false][falseIcon] | 10             |                            |

### UPDATE
#### Parameters
##### Shared Parameters
| Name              | In     | Type     | Nullable            | Required            | Default         | Constraint                    |
|-------------------|--------|----------|---------------------|---------------------|-----------------|-------------------------------|
| X-API-LOCALE      | Header | string   | ![false][falseIcon] | ![false][falseIcon] | Site#locale     | Must be one of Site#languages |
| autoscale         | Data   | boolean  | ![false][falseIcon] | ![false][falseIcon] | Preserves values|                               |
| offset            | Data   | object   | ![false][falseIcon] | ![false][falseIcon] | Preserves values|                               |
| offset.x          | Data   | float    | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                               |
| offset.y          | Data   | float    | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                               |
| offset.z          | Data   | float    | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]  |                               |
| orientation_mode  | Data   | string   | ![n/a][naIcon]      | ![false][falseIcon] | Preserves values|                               |
| permanent_display | Data   | boolean  | ![false][falseIcon] | ![false][falseIcon] | Preserves values|                               |
| place             | Data   | Place#id | ![false][falseIcon] | ![false][falseIcon] | Preserves values| Valid Place#id on same site   |
| poi               | Data   | Poi#id   | ![true][trueIcon]   | ![false][falseIcon] | Preserves values| Valid Poi#id on same Site     |

##### Label specific parameters (type="label")
| Name             | In   | Type   | Nullable            | Required            | Default          | Constraint              |
|------------------|------|--------|---------------------|---------------------|------------------|-------------------------|
| alignment        | Data | string | ![false][falseIcon] | ![false][falseIcon] | Preserves values | Only "center" supported |
| background_color | Data | string | ![true][trueIcon]   | ![false][falseIcon] | Preserves values |                         |
| font             | Data | float  | ![true][trueIcon]   | ![false][falseIcon] | Preserves values |                         |
| font_color       | Data | float  | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                         |
| font_size        | Data | float  | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                         |
| label            | Data | string | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                         |

##### Picto specific parameters (type="picto")
| Name         | In   | Type    | Nullable            | Required            | Default          | Constraint                 |
|--------------|------|---------|---------------------|---------------------|------------------|----------------------------|
| file         | Data | File#id | ![false][falseIcon] | ![false][falseIcon] | Preserves values | Valid File#id on same site |
| height       | Data | int     | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                            |
| original_md5 | Data | string  | ![true][trueIcon]   | ![false][falseIcon] | Preserves values |                            |
| width        | Data | int     | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                            |

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
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------|
| X-API-LOCALE | Header | string | ![false][falseIcon] | Site#locale    | Must be one of Site#languages |              |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |              |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |              |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |              |
| type         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |              |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|-------------|
| 200       | Success               | application/json | CustomObject[]            | The CustomObject serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            |              |
| 403       | Authentication Error  | application/json | Error            |              |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |              |
| 500       | Internal Server Error | application/json | Error            |              |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |              |

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
