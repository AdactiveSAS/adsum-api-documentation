# Media

## Model

>TODO talk about media inheritance

### Media <abstract>
| Field           | Type              | Readonly            | Nullable            | Translatable        | Description |
|-----------------|-------------------|---------------------|---------------------|---------------------|-------------|
| id              | int               | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| name            | string            | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| description     | string            | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   |             |
| startAt         | DateTime          |                     |                     |                     |             |
| endAt           | DateTime          |                     |                     |                     |             |
| preview         | File              |                     |                     |                     |             |
| tags            | Tag               |                     |                     |                     |             |
| playlistLinks   | array             |                     |                     |                     |             |
| playlistLinks[] | playlistMediaLink |                     |                     |                     |             |
| poiLinks        | array             |                     |                     |                     |             |
| poiLinks[]      | poiMediaLink      |                     |                     |                     |             |
| translations    | array             |                     |                     |                     |             |
| translations[]  | mediaTranslation  |                     |                     |                     |             |

### Discriminator Map
### Media#type

### MediaImage

### MediaVideo

### MediaUrl
| Field | Type   | Readonly | Nullable | Translatable | Description |
|-------|--------|----------|----------|--------------|-------------|
| link  | string |          |          |              |             |


### MediaPdf
| Field      | Type   | Readonly | Nullable | Translatable | Description |
|------------|--------|----------|----------|--------------|-------------|
| format     | string |          |          |              |             |
| identifier | string |          |          |              |             |
| content    | string |          |          |              |             |


### MediaText
| Field      | Type   | Readonly | Nullable | Translatable | Description |
|------------|--------|----------|----------|--------------|-------------|
| format     | string |          |          |              |             |
| identifier | string |          |          |              |             |
| content    | string |          |          |              |             |


### Playlist
| Field        | Type               | Readonly | Nullable | Translatable | Description |
|--------------|--------------------|----------|----------|--------------|-------------|
| id           | int                |          |          |              |             |
| name         | string             |          |          |              |             |
| description  | string             |          |          |              |             |
| parameters   | array              |          |          |              |             |
| tags         | array              |          |          |              |             |
| tags[]       | tag                |          |          |              |             |
| mediaLinks   | array              |          |          |              |             |
| mediaLinks[] | playlistMediaLinks |          |          |              |             |
| translations |                    |          |          |              |             |


### Movie
| Field            | Type     | Readonly | Nullable | Translatable | Description |
|------------------|----------|----------|----------|--------------|-------------|
| actors           | array    |          |          |              |             |
| actors[]         | string   |          |          |              |             |
| comingSessions   | array    |          |          |              |             |
| comingSessions[] | DateTime |          |          |              |             |
| director         | string   |          |          |              |             |
| certification    | string   |          |          |              |             |
| duration         | int      |          |          |              |             |


[trueIcon]: https://maxcdn.icons8.com/Color/PNG/24/Very_Basic/checkmark-24.png
[falseIcon]: https://maxcdn.icons8.com/Color/PNG/24/User_Interface/delete_sign-24.png
[naIcon]: https://maxcdn.icons8.com/Color/PNG/24/Business/not_applicable-24.png