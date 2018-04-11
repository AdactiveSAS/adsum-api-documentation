---
id: reference-12-mapFile
title: MapFile
---

## CRUD
| CRUD         | Http Verb | Route     | Description                        |
|--------------|-----------|-----------|------------------------------------|
| READ         | GET       | /map/{id} | Retrieve a single MapFile from it's id |
| CREATE       | POST      | /map      | Create a MapFile                       |
| UPDATE       | POST      | /map/{id} | Update a MapFile                       |
| DELETE       | DELETE    | /map/{id} | Delete a MapFile                       |
| SEARCH       | GET       | /map      | Looking for MapFiles                   |
| BATCH DELETE | DELETE    | /map      | Delete multiple MapFiles               |

## Model

> WARNING: This Model is the one retrieve using X-API-MODE="get" (see READ & SEARCH operations). So if you use the legacy one 
(standard), the model may differs on some fields.

> CAUTION: MapFile is an abstract class, so you can't create a MapFile, you will always have to create an inherited entity of MapFile.

### MapFile <abstract>
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|
| created_at | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Create datetime                                   |
| file       | File#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |                                                   |
| id         | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Identifier                                        |
| name       | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Name                                              |
| site       | Site#id            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Site identifier                                   |
| type       | string             | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | Discriminator value                               |
| updated_at | datetime(ISO 8601) | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Last updated datetime                             |
| version    | int                | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] | Revision version, it's incremented on each change |

### Discriminator Map
| Discriminator Value | Class     | Purpose                                                       |
|---------------------|-----------|---------------------------------------------------------------|
| aoDae               | MapAoDae  | [Generated] The map data with ambiant occlusion in dae format |
| aoOsg               | MapAoOsg  | [Generated] The map data with ambiant occlusion in osg format |
| config              | MapConfig | The map data config used in editor                            |
| dae                 | MapDae    | The map data in dae format                                    |
| helper              | MapHelper | The map helper data used in editor                            |
| ive                 | MapIve    | [Generated]The map data in ive format                         |
| light               | MapLight  | The legacy map format                                         |
| osg                 | MapOsg    | [Generated] The map data in osg format                        |
| path                | MapPath   | [Generated] The map paths                                     |

### MapAoDae
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapAoOsg
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapConfig
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapDae
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapHelper
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapIve
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapLight
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapOsg
| Field      | Type               | Readonly            | Nullable            | Translatable        | Description                                       |
|------------|--------------------|---------------------|---------------------|---------------------|---------------------------------------------------|

### MapPath
| Field                       | Type    | Readonly            | Nullable            | Translatable        | Description                                                                          |
|-----------------------------|---------|---------------------|---------------------|---------------------|--------------------------------------------------------------------------------------|
| paths                       | object  | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] | The paths object                                                                     |
| paths.nodes                 | array   | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | List of nodes of the paths graph                                                     |
| paths.nodes[]               | object  | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | A node element                                                                       |
| paths.nodes[].groundId      | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | the groundId where the node belong to                                                |
| paths.nodes[].id            | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | the node identifier, must be unique in that paths graph                              |
| paths.nodes[].isGate        | boolean | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | Indicate if the node is a gate or a simple one                                       |
| paths.nodes[] .links        | array   | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | List of links attached to that node                                                  |
| paths.nodes[].links[]       | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | Link identifier                                                                      |
| paths.nodes[].location      | object  | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | Reference the 3D data object where the node is placed                                |
| paths.nodes[].location.id   | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The 3D data object identifier                                                        |
| paths.nodes.location.type   | string  | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The 3D data object type                                                              |
| paths.nodes[].position      | object  | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The position of the node in the 3D object system                                     |
| paths.nodes[].position.x    | float   | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The x coordinate                                                                     |
| paths.nodes[].position.y    | float   | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | Y coordinate                                                                         |
| paths.nodes[].position.z    | float   | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | Z coordinate                                                                         |
| paths.links                 | array   | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | List of links of the paths graph                                                     |
| paths.links[]               | object  | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | A link                                                                               |
| paths.links[].bidirectional | boolean | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | Incate if the link could be browse in both ways                                      |
| paths.links[].from          | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The node identifier source                                                           |
| paths.links[].id            | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The link unique identifier                                                           |
| paths.links[].to            | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The target node identifier                                                           |
| paths.links[].type          | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The link type: 0 for "NORMAL", 1 for "ONLY PRM", 2 for "NO PMR" and 3 for "DISABLED" |
| paths.links[].weight        | int     | ![n/a][naIcon]      | ![n/a][naIcon]      | ![n/a][naIcon]      | The weight given in that link to be considered on path resolution algorithme         |


### READ

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| id           | Route  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|--- | 
| 200       | Success               | application/json | MapFile            | The MapFile serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

### SEARCH

#### Parameters
| Name         | In     | Type   | Required            | Default        | Constraint                    | Description                                                                               |
|--------------|--------|--------|---------------------|----------------|-------------------------------|-------------------------------------------------------------------------------------------|
| X-API-MODE   | Header | string | ![false][falseIcon] | standard       | "standard" or "get"           | The "standard" mode is deprecated. Note that X-API-MODE will change serialization format. |
| name         | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| signature    | Query  | string | ![false][falseIcon] | ![n/a][naIcon] |                               |                                                                                           |
| site         | Query  | int    | ![true][trueIcon]   | ![n/a][naIcon] |                               |                                                                                           |

#### Responses
| Http Code | Description           | Response type    | Response Content | Note |
|-----------|-----------------------|------------------|------------------|---|
| 200       | Success               | application/json | MapFile[]            | The MapFile serialisation will differs depending on X-API-MODE |
| 400       | Invalid data          | application/json | Error            | |
| 403       | Authentication Error  | application/json | Error            | |
| 404       | Not Found             | ![n/a][naIcon]   | ![n/a][naIcon]   | |
| 500       | Internal Server Error | application/json | Error            | |
| 503       | Service Unavailable   | ![n/a][naIcon]   | ![n/a][naIcon]   | |

[trueIcon]: https://maxcdn.icons8.com/Color/PNG/24/Very_Basic/checkmark-24.png
[falseIcon]: https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png
[naIcon]: https://maxcdn.icons8.com/Color/PNG/24/Business/not_applicable-24.png
