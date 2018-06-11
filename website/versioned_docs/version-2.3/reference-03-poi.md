---
id: version-2.3-reference-03-poi
title: Poi
original_id: reference-03-poi
---

## CRUD
| CRUD         | Http Verb | Route     | Description                        |
|--------------|-----------|-----------|------------------------------------|
| READ         | GET       | /poi/{id} | Retrieve a single Poi from it's id |
| CREATE       | POST      | /poi      | Create a Poi                       |
| UPDATE       | POST      | /poi/{id} | Update a Poi                       |
| DELETE       | DELETE    | /poi/{id} | Delete a Poi                       |
| SEARCH       | GET       | /poi      | Looking for POIs                   |
| BATCH DELETE | DELETE    | /poi      | Delete multiple POIs               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

> CAUTION: Poi is an abstract class, so you can't create a Poi, you will always have to create an inherited entity of Poi.

### Poi <abstract>
| Field               | Type               | Readonly            | Nullable            | Translatable        | Description                                                                                                                                                    |
|---------------------|--------------------|---------------------|---------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| categories          | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Categories of that Poi                                                                                                                                 |
| categories[]        | Category#id        | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Category identifier                                                                                                                                            |
| children            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of children POIs                                                                                                                                          |
| children[]          | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                |
| children[].id       | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Child Poi identifier                                                                                                                                           |
| children[].position | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Child Poi position used to sort children. The sorting order is descending regarless position, in case of equals positions lower identifier will come first.    |
| client_id           | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | An arbitrary field used to store external identfier to match our own                                                                                           |
| created_at          | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                                                                                                |
| custom_objects      | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of attached CustomObjects                                                                                                                                 |
| custom_objects[]    | CustomObject#id    | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | CustomObject identifier                                                                                                                                        |
| description         | string             | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   | Description                                                                                                                                                    |
| id                  | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                                                                                                     |
| logos               | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of File used as logo                                                                                                                                      |
| logos[]             | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                |
| logos[].id          | File#id            | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Logo File identifier                                                                                                                                           |
| logos[].position    | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Logo File position used to sort logos. The sorting order is descending regarless position, in case of equals positions lower identifier will come first.       |
| medias              | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of attached Medias                                                                                                                                        |
| medias[]            | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                |
| medias[].id         | Media#id           | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Media identifier                                                                                                                                               |
| medias[].position   | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Media position used to sort medias. The sorting order is descending regarless position, in case of equals positions lower identifier will come first.          |
| metadata            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | An array of metadatum used to store additional arbitrary data                                                                                                  |
| metadata[]          | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                |
| metadata[].key      | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Metadatum unique key                                                                                                                                           |
| metadata[].type     | string             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Metadatum value type                                                                                                                                           |
| metadata[].value    | mixed              | ![n/a][naIcon]      | ![true][trueIcon]   | ![false][falseIcon] | Metadatum value                                                                                                                                                |
| name                | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Name                                                                                                                                                           |
| new                 | bool               | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | [Deprecated] Flag to mark a POI as new                                                                                                                         |
| parents             | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of parent POIs                                                                                                                                            |
| parents[]           | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Parent Poi identifier                                                                                                                                          |
| pictures            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | [Deprecated] List of File used as picture                                                                                                                      |
| pictures[]          | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                                |
| pictures[].id       | File#id            | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Picture File identifier                                                                                                                                        |
| pictures[].position | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Picture File position used to sort pictures. The sorting order is descending regarless position, in case of equals positions lower identifier will come first. |
| places              | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Place that Poi is attached to                                                                                                                          |
| places[]            | Place#id           | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Place identifier                                                                                                                                               |
| signature           | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Unique optional identifier used to reference that Site to be used in data import                                                                               |
| site                | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                                                                                                |
| tags                | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Tags                                                                                                                                                   |
| tags[]              | Tag#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Tag identifier                                                                                                                                                 |
| type                | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Poi discriminator field                                                                                                                                        |
| updated_at          | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                                                                                                                                          |
| version             | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change                                                                                                              |

### Discriminator Map

| Discriminator Value | Class     |
|---------------------|-----------|
| exhibitor           | Exhibitor |
| person              | Person    |
| product             | Product   |
| room                | Room      |
| service             | Service   |
| store               | Store     | 

### Exhibitor
| Field | Type   | Readonly            | Nullable          | Translatable        | Description  |
|-------|--------|---------------------|-------------------|---------------------|--------------|
| phone | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Phone number |
| url   | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Custom Url   |

### Person
| Field       | Type   | Readonly            | Nullable          | Translatable        | Description  |
|-------------|--------|---------------------|-------------------|---------------------|--------------|
| desk_phone  | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Desk phone   |
| firstname   | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | First name   |
| lastname    | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Last name    |
| mobile_phone| string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Mobile phone |

### Product
| Field             | Type            | Readonly            | Nullable          | Translatable        | Description                  |
|-------------------|-----------------|---------------------|-------------------|---------------------|------------------------------|
| brandName         | string          | ![false][falseIcon] | ![true][trueIcon] | ![true][trueIcon]   | Brand name                   |
| currency          | string          | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Currency                     |
| description1      | string          | ![false][falseIcon] | ![true][trueIcon] | ![true][trueIcon]   | First description part       |
| description2      | string          | ![false][falseIcon] | ![true][trueIcon] | ![true][trueIcon]   | Second description part      |
| discount_value    | int             | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Discount value               |
| ean               | string          | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | International Article Number |
| feature_values     | array           | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | List of features values      |
| feature_values[]   | FeatureValue#id | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | FeatureValue identifier      |
| full_description   | string          | ![false][falseIcon] | ![true][trueIcon] | ![true][trueIcon]   | Complete description         |
| full_name          | string          | ![false][falseIcon] | ![true][trueIcon] | ![true][trueIcon]   | Complete name                |
| price             | float           | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Price                        |
| priority          | int             | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Priority                     |
| reference         | string          | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Reference                    |
| rating            | float           | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Rating value                 |
| rating_count       | int             | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Number of rating             |
| remaining_quantity | int             | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Remaining quantities         |
| status            | string          | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Status                       |
| url               | string          | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Url to the product           |

### Room
| Field     | Type   | Readonly            | Nullable          | Translatable        | Description  |
|-----------|--------|---------------------|-------------------|---------------------|--------------|
| capacity  | int    | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Capacity     |
| kind      | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Kind         |
| phone     | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Phone number |
| reference | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Reference    |

### Service
| Field    | Type  | Readonly            | Nullable            | Translatable        | Description                                                       |
|----------|-------|---------------------|---------------------|---------------------|-------------------------------------------------------------------|
| schedule | mixed | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Custom structure used to store service schedule such as bus line  |

### Store
| Field       | Type   | Readonly            | Nullable            | Translatable        | Description               |
|-------------|--------|---------------------|---------------------|---------------------|---------------------------|
| opening_time | string | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Opening time              |
| phone       | string | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Phone number              |
| priority    | int    | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Priority                  |
| url         | string | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Link to the Store webpage |

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
| 200       | Success               | application/json | Poi             | The Poi serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            |              |
| 403       | Authentication Error  | application/json | Error            |              |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   |              |
| 500       | Internal Server Error | application/json | Error            |              |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   |              |

### CREATE

> You cannot create a Poi as it's abstract, you must choose an inherited entity.

#### Parameters

##### Shared Parameters
| Name                | In     | Type            | Nullable            | Required            | Default        | Constraint                     |
|---------------------|--------|-----------------|---------------------|---------------------|----------------|--------------------------------|
| X-API-LOCALE        | Header | string          | ![false][falseIcon] | ![false][falseIcon] | Site#locale    | Must be one of Site#languages  |
| categories          | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| categories[]        | Data   | Category#id     | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] | Valid Category#id on same site |
| children            | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| children[]          | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| children[].id       | Data   | Poi#id          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Poi#id on same site      |
| children[].position | Data   | int             | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| client_id           | Data   | string          | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| custom_objects      | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| custom_objects[]    | Data   | CustomObject#id | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] | Valid CustomObject#id on same Site |
| description         | Data   | string          | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| logos               | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| logos[]             | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| logos[].id          | Data   | File#id         | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid File#id on same Site    |
| logos[].position    | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| medias              | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| medias[]            | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| medias[].id         | Data   | Media#id        | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Media#id on same Site    |
| medias[].position   | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| metadata            | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| metadata[].key      | Data   | string          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| metadata[].type     | Data   | string          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| metadata[].value    | Data   | mixed           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| name                | Data   | string          | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string               |
| new                 | Data   | bool            | ![false][falseIcon] | ![false][falseIcon] | false          |                                |
| parents             | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| parents[]           | Data   | Poi#id          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Poi#id on same Site      |
| pictures            | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| pictures[]          | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| pictures[].id       | Data   | File#id         | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid File#id on same Site    |
| pictures[].position | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| places              | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| places[]            | Data   | Place#id        | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Place#id on same Site    |
| signature           | Data   | string          | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| site                | Data   | int             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |
| tags                | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| tags[]              | Data   | Tag#id          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Tag#id on same site      |
| type                | Data   | string          | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | One of discriminator value     |

##### Exhibitor specific parameters (type="exhibitor")
| Name  | In   | Type   | Nullable          | Required                          | Default | Constraint |
|-------|------|--------|-------------------|-----------------------------------|---------|------------|
| phone | Data | string | ![true][trueIcon] | ![false][falseIcon]               | null    |            |
| url   | Data | string | ![true][trueIcon] | ![false][falseIcon] | null    |            |

##### Person specific parameters (type="person")
| Name         | In   | Type   | Nullable          | Required             | Default | Constraint |
|--------------|------|--------|-------------------|----------------------|---------|------------|
| desk_phone   | Data | string | ![true][trueIcon] | ![false][falseIcon]  | null    |            |
| firstname    | Data | string | ![true][trueIcon] | [![false][falseIcon] | null    |            |
| lastname     | Data | string | ![true][trueIcon] | [![false][falseIcon] | null    |            |
| mobile_phone | Data | string | ![true][trueIcon] | [![false][falseIcon] | null    |            |

##### Product specific parameters (type="product")
| Name               | In   | Type            | Nullable            | Required             | Default        | Constraint                         |
|--------------------|------|-----------------|---------------------|----------------------|----------------|------------------------------------|
| brandName          | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| currency           | Data | string          | ![true][trueIcon]   | [![false][falseIcon] | null           |                                    |
| description1       | Data | string          | ![true][trueIcon]   | [![false][falseIcon] | null           |                                    |
| description2       | Data | string          | ![true][trueIcon]   | [![false][falseIcon] | null           |                                    |
| discount_value     | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| ean                | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| feature_values     | Data | array           | ![false][falseIcon] | ![false][falseIcon]  | []             |                                    |
| feature_values[]   | Data | FeatureValue#id | ![n/a][naIcon]      | ![n/a][naIcon]       | ![n/a][naIcon] | Valid FeatureValue#id on same Site |
| full_description   | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| full_name          | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| price              | Data | float           | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| priority           | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | 0              |                                    |
| reference          | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| rating             | Data | float           | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| rating_count       | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| remaining_quantity | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| status             | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |
| url                | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | null           |                                    |

##### Room specific parameters (type="room")
| Name      | In   | Type   | Nullable          | Required             | Default | Constraint |
|-----------|------|--------|-------------------|----------------------|---------|------------|
| capacity  | Data | int    | ![true][trueIcon] | ![false][falseIcon]  | null    |            |
| kind      | Data | string | ![true][trueIcon] | [![false][falseIcon] | null    |            |
| phone     | Data | string | ![true][trueIcon] | [![false][falseIcon] | null    |            |
| reference | Data | string | ![true][trueIcon] | [![false][falseIcon] | null    |            |

##### Service specific parameters (type="service")
| Name     | In   | Type  | Nullable            | Required            | Default | Constraint |
|----------|------|-------|---------------------|---------------------|---------|------------|
| schedule | Data | mixed | ![false][falseIcon] | ![false][falseIcon] | []      |            |

##### Store specific parameters (type="store")
| Name         | In   | Type   | Nullable            | Required            | Default | Constraint |
|--------------|------|--------|---------------------|---------------------|---------|------------|
| opening_time | Data | mixed  | ![false][falseIcon] | ![false][falseIcon] | []      |            |
| phone        | Data | string | ![false][falseIcon] | ![false][falseIcon] | null    |            |
| priority     | Data | int    | ![false][falseIcon] | ![false][falseIcon] | 0       |            |
| url          | Data | string | ![false][falseIcon] | ![false][falseIcon] | null    |            |

#### Responses
| Http Code | Description           | Response type    | Response Content    |
|-----------|-----------------------|------------------|---------------------|
| 200       | Success               | application/json | { id: Category#id } |
| 400       | Invalid data          | application/json | Error               |
| 403       | Authentication Error  | application/json | Error               |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]      |
| 500       | Internal Server Error | application/json | Error               |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]      |

### UPDATE

> You cannot change POI type, if you want to do such operation you should remove old one and create a new.

##### Shared Parameters
| Name                | In     | Type            | Nullable            | Required            | Default          | Constraint                         |
|---------------------|--------|-----------------|---------------------|---------------------|------------------|------------------------------------|
| X-API-LOCALE        | Header | string          | ![false][falseIcon] | ![false][falseIcon] | Site#locale      | Must be one of Site#languages      |
| categories          | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves value  |                                    |
| categories[]        | Data   | Category#id     | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon]   | Valid Category#id on same site     |
| children            | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| children[]          | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| children[].id       | Data   | Poi#id          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid Poi#id on same site          |
| children[].position | Data   | int             | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| client_id           | Data   | string          | ![true][trueIcon]   | ![false][falseIcon] | Preserves values |                                    |
| custom_objects      | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| custom_objects[]    | Data   | CustomObject#id | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon]   | Valid CustomObject#id on same Site |
| description         | Data   | string          | ![n/a][naIcon]      | ![n/a][naIcon]      | Preserves values |                                    |
| logos               | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| logos[]             | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| logos[].id          | Data   | File#id         | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid File#id on same Site         |
| logos[].position    | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| medias              | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| medias[]            | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| medias[].id         | Data   | Media#id        | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid Media#id on same Site        |
| medias[].position   | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| metadata            | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| metadata[].key      | Data   | string          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| metadata[].type     | Data   | string          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| metadata[].value    | Data   | mixed           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| name                | Data   | string          | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon]   | Not empty string                   |
| new                 | Data   | bool            | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| parents             | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| parents[]           | Data   | Poi#id          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid Poi#id on same Site          |
| pictures            | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| pictures[]          | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| pictures[].id       | Data   | File#id         | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid File#id on same Site         |
| pictures[].position | Data   | array           | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   |                                    |
| places              | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| places[]            | Data   | Place#id        | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid Place#id on same Site        |
| signature           | Data   | string          | ![true][trueIcon]   | ![false][falseIcon] | Preserves values |                                    |
| site                | Data   | int             | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon]   | Valid Site#id                      |
| tags                | Data   | array           | ![false][falseIcon] | ![false][falseIcon] | Preserves values |                                    |
| tags[]              | Data   | Tag#id          | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]   | Valid Tag#id on same site          |

##### Exhibitor specific parameters (type="exhibitor")
| Name  | In   | Type   | Nullable          | Required                          | Default | Constraint |
|-------|------|--------|-------------------|-----------------------------------|---------|------------|
| phone | Data | string | ![true][trueIcon] | ![false][falseIcon]               | Preserves values    |            |
| url   | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |

##### Person specific parameters (type="person")
| Name         | In   | Type   | Nullable          | Required             | Default | Constraint |
|--------------|------|--------|-------------------|----------------------|---------|------------|
| desk_phone   | Data | string | ![true][trueIcon] | ![false][falseIcon]  | Preserves values    |            |
| firstname    | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |
| lastname     | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |
| mobile_phone | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |

##### Product specific parameters (type="product")
| Name               | In   | Type            | Nullable            | Required             | Default        | Constraint                         |
|--------------------|------|-----------------|---------------------|----------------------|----------------|------------------------------------|
| brandName          | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| currency           | Data | string          | ![true][trueIcon]   | [![false][falseIcon] | Preserves values           |                                    |
| description1       | Data | string          | ![true][trueIcon]   | [![false][falseIcon] | Preserves values           |                                    |
| description2       | Data | string          | ![true][trueIcon]   | [![false][falseIcon] | Preserves values           |                                    |
| discount_value     | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| ean                | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| feature_values     | Data | array           | ![false][falseIcon] | ![false][falseIcon]  | Preserves values             |                                    |
| feature_values[]   | Data | FeatureValue#id | ![n/a][naIcon]      | ![n/a][naIcon]       | ![n/a][naIcon] | Valid FeatureValue#id on same Site |
| full_description   | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| full_name          | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| price              | Data | float           | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| priority           | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values              |                                    |
| reference          | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| rating             | Data | float           | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| rating_count       | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| remaining_quantity | Data | int             | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| status             | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |
| url                | Data | string          | ![true][trueIcon]   | ![false][falseIcon]  | Preserves values           |                                    |

##### Room specific parameters (type="room")
| Name      | In   | Type   | Nullable          | Required             | Default | Constraint |
|-----------|------|--------|-------------------|----------------------|---------|------------|
| capacity  | Data | int    | ![true][trueIcon] | ![false][falseIcon]  | Preserves values    |            |
| kind      | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |
| phone     | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |
| reference | Data | string | ![true][trueIcon] | [![false][falseIcon] | Preserves values    |            |

##### Service specific parameters (type="service")
| Name     | In   | Type  | Nullable            | Required            | Default | Constraint |
|----------|------|-------|---------------------|---------------------|---------|------------|
| schedule | Data | mixed | ![false][falseIcon] | ![false][falseIcon] | Preserves values      |            |

##### Store specific parameters (type="store")
| Name         | In   | Type   | Nullable            | Required            | Default | Constraint |
|--------------|------|--------|---------------------|---------------------|---------|------------|
| opening_time | Data | mixed  | ![false][falseIcon] | ![false][falseIcon] | Preserves values      |            |
| phone        | Data | string | ![false][falseIcon] | ![false][falseIcon] | Preserves values    |            |
| priority     | Data | int    | ![false][falseIcon] | ![false][falseIcon] | Preserves values       |            |
| url          | Data | string | ![false][falseIcon] | ![false][falseIcon] | Preserves values    |            |

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
| 200       | Success               | application/json | Poi[]            | The Poi serialisation will differs depending on X-API-MODE |
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
