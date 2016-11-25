# Media

>TODO talk about media inheritance

## Model
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

Media#type

### MediaImage


### MediaVideo


### MediaUrl

## Model
| Field | Type   | Readonly | Nullable | Translatable | Description |
|-------|--------|----------|----------|--------------|-------------|
| link  | string |          |          |              |             |


### MediaPdf

## Model
| Field      | Type   | Readonly | Nullable | Translatable | Description |
|------------|--------|----------|----------|--------------|-------------|
| format     | string |          |          |              |             |
| identifier | string |          |          |              |             |
| content    | string |          |          |              |             |


### MediaText

## Model
| Field      | Type   | Readonly | Nullable | Translatable | Description |
|------------|--------|----------|----------|--------------|-------------|
| format     | string |          |          |              |             |
| identifier | string |          |          |              |             |
| content    | string |          |          |              |             |


### Playlist

## Model
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

## Model
| Field            | Type     | Readonly | Nullable | Translatable | Description |
|------------------|----------|----------|----------|--------------|-------------|
| actors           | array    |          |          |              |             |
| actors[]         | string   |          |          |              |             |
| comingSessions   | array    |          |          |              |             |
| comingSessions[] | DateTime |          |          |              |             |
| director         | string   |          |          |              |             |
| certification    | string   |          |          |              |             |
| duration         | int      |          |          |              |             |