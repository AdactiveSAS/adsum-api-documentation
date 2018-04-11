---
id: reference-04-media
title: Media
---

## CRUD
| CRUD         | Http Verb | Route       | Description                          |
|--------------|-----------|-------------|--------------------------------------|
| READ         | GET       | /media/{id} | Retrieve a single Media from it's id |
| CREATE       | POST      | /media      | Create a Media                       |
| UPDATE       | POST      | /media/{id} | Update a Media                       |
| DELETE       | DELETE    | /media/{id} | Delete a Media                       |
| SEARCH       | GET       | /media      | Looking for Medias                   |
| BATCH DELETE | DELETE    | /media      | Delete multiple Medias               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

> CAUTION: Media is an abstract class, so you can't create a Media, you will always have to create an inherited entity of Media.


### Media <abstract>
| Field                | Type               | Readonly            | Nullable            | Translatable        | Description                                                                                                                                           |
|----------------------|--------------------|---------------------|---------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| client_id            | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | An arbitrary field used to store external identfier to match our own                                                                                  |
| created_at           | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                                                                                                                       |
| description          | string             | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   | Description                                                                                                                                           |
| end_at               | datetime(ISO 8601) | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Media end datetime                                                                                                                                    |
| id                   | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                                                                                                                            |
| name                 | string             | ![false][falseIcon] | ![false][falseIcon] | ![true][trueIcon]   | Name                                                                                                                                                  |
| playlists            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Playlists                                                                                                                                     |
| playlists[]          | array              | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] |                                                                                                                                                       |
| playlists[].id       | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Playlist identifier                                                                                                                                   |
| playlists[].position | int                | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Media position used to sort medias. The sorting order is descending regarless position, in case of equals positions lower identifier will come first. |
| pois                 | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of POIs                                                                                                                                          |
| pois[]               | Poi#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Poi identifier                                                                                                                                        |
| preview              | File#id            | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Image used as preview                                                                                                                                 |
| signature            | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Unique optional identifier used to reference that Site to be used in data import                                                                      |
| site                 | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                                                                                                                       |
| start_at             | datetime(ISO 8601) | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Media start datetime                                                                                                                                  |
| tags                 | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of Tags                                                                                                                                          |
| tags[]               | Tag#id             | ![n/a][naIcon]      | ![false][falseIcon] | ![false][falseIcon] | Tag identifier                                                                                                                                        |
| type                 | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Media discriminator field                                                                                                                               |
| updated_at           | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                                                                                                                                 |
| version              | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change                                                                                                     |

### Discriminator Map
| Discriminator Value | Class      |
|---------------------|------------|
| image               | MediaImage |
| movie               | Movie      |
| pdf                 | MediaPdf   |
| text                | MediaText  |
| url                 | MediaUrl   |
| video               | MediaVideo | 

### MediaImage
| Field | Type    | Readonly            | Nullable            | Translatable        | Description |
|-------|---------|---------------------|---------------------|---------------------|-------------|
| file  | File#id | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Image file  |

### Movie
| Field             | Type               | Readonly            | Nullable            | Translatable        | Description                      |
|-------------------|--------------------|---------------------|---------------------|---------------------|----------------------------------|
| actors            | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of actors                   |
| actors[]          | string             | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      |                                  |
| coming_sessions   | array              | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | List of coming sessions datetime |
| coming_sessions[] | datetime(ISO 8601) | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      |                                  |
| director          | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Director                         |
| certification     | string             | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Certification                    |
| duration          | int                | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Duration in minutes              |
| file              | File#id            | ![false][falseIcon] | ![true][trueIcon]   | ![false][falseIcon] | Video or Image file              |

### MediaPdf
| Field | Type    | Readonly            | Nullable            | Translatable        | Description |
|-------|---------|---------------------|---------------------|---------------------|-------------|
| file  | File#id | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Pdf file    |

### MediaText
| Field      | Type   | Readonly            | Nullable          | Translatable        | Description    |
|------------|--------|---------------------|-------------------|---------------------|----------------|
| content    | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | The content    |
| identifier | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] |                |
| format     | string | ![false][falseIcon] | ![true][trueIcon] | ![false][falseIcon] | Content format |

### MediaUrl
| Field | Type   | Readonly            | Nullable            | Translatable        | Description |
|-------|--------|---------------------|---------------------|---------------------|-------------|
| link  | string | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Link url    |

### MediaVideo
| Field | Type    | Readonly            | Nullable            | Translatable        | Description |
|-------|---------|---------------------|---------------------|---------------------|-------------|
| file  | File#id | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Video file  |

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
| 200       | Success               | application/json | Media             | The Media serialisation will differs depending on X-API-MODE |
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
| client_id            | Data   | string             | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| description          | Data   | string             | ![true][trueIcon]   | ![n/a][naIcon]      | null           |                                |
| end_at               | Data   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| name                 | Data   | string             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Not empty string               |
| playlists            | Data   | array              | ![false][falseIcon] | ![true][trueIcon]   | []             |                                |
| playlists[]          | Data   | object             | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| playlists[].id       | Data   | Playlist#id        | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Playlist#id on same Site |
| playlists[].position | Data   | int                | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] |                                |
| pois                 | Data   | array              | ![false][falseIcon] | ![true][trueIcon]   | []             |                                |
| pois[]               | Data   | Poi#id             | ![false][falseIcon] | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Poi#id on same Site      |
| preview              | Data   | File#id            | ![true][trueIcon]   | ![false][falseIcon] | null           | Valid File#id on same Site     |
| signature            | Data   | string             | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| site                 | Data   | int                | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid Site#id                  |
| start_at             | Data   | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | null           |                                |
| tags                 | Data   | array              | ![false][falseIcon] | ![false][falseIcon] | []             |                                |
| tags[]               | Data   | Tag#id             | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] | Valid Tag#id on same site      |
| type                 | Data   | string             | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | One of discriminator value     |

##### MediaImage specific parameters (type="image")
| Name    | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|---------|------|---------|---------------------|---------------------|----------------|----------------------------|
| file    | Data | File#id | ![false][falseIcon] | ![false][falseIcon] | ![n/a][naIcon] | Valid File#id on same Site |

##### Movie specific parameters (type="movie")
| Name              | In   | Type              | Nullable            | Required            | Default        | Constraint                 |
|-------------------|------|-------------------|---------------------|---------------------|----------------|----------------------------|
| actors            | Data | array             | ![false][falseIcon] | ![false][falseIcon] | []             |                            |
| actors[]          | Data | string            | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                            |
| coming_sessions   | Data | array             | ![false][falseIcon] | ![false][falseIcon] | []             |                            |
| coming_sessions[] | Data | datetime(ISO8601) | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon] |                            |
| director          | Data | string            | ![true][trueIcon]   | ![false][falseIcon] | null           |                            |
| certification     | Data | string            | ![true][trueIcon]   | ![false][falseIcon] | null           |                            |
| duration          | Data | int               | ![true][trueIcon]   | ![false][falseIcon] | null           |                            |
| file              | Data | File#id           | ![true][trueIcon]   | ![false][falseIcon] | null           | Valid File#id on same Site |

##### MediaPdf specific parameters (type="pdf")
| Name    | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|---------|------|---------|---------------------|---------------------|----------------|----------------------------|
| file    | Data | File#id | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid File#id on same Site |

##### MediaText specific parameters (type="text")
| Name       | In   | Type   | Nullable          | Required            | Default | Constraint |
|------------|------|--------|-------------------|---------------------|---------|------------|
| content    | Data | string | ![true][trueIcon] | ![false][falseIcon] | null    |            |
| identifier | Data | string | ![true][trueIcon] | ![false][falseIcon] | null    |            |
| format     | Data | string | ![true][trueIcon] | ![false][falseIcon] | null    |            |

##### MediaUrl specific parameters (type="url")
| Name       | In   | Type   | Nullable            | Required          | Default        | Constraint |
|------------|------|--------|---------------------|-------------------|----------------|------------|
| link       | Data | string | ![false][falseIcon] | ![true][trueIcon] | ![n/a][naIcon] |            |

##### MediaVideo specific parameters (type="video")
| Name    | In   | Type    | Nullable            | Required            | Default        | Constraint                 |
|---------|------|---------|---------------------|---------------------|----------------|----------------------------|
| file    | Data | File#id | ![false][falseIcon] | ![true][trueIcon]   | ![n/a][naIcon] | Valid File#id on same Site |

[trueIcon]: https://maxcdn.icons8.com/Color/PNG/24/Very_Basic/checkmark-24.png
[falseIcon]: https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png
[naIcon]: https://maxcdn.icons8.com/Color/PNG/24/Business/not_applicable-24.png
