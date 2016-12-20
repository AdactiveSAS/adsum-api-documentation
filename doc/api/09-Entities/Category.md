# Category

## Model

| Field          | Type     | Readonly | Nullable | Translatable | Description |
|----------------|----------|----------|----------|--------------|-------------|
| id             | int      |          |          |              |             |
| name           | string   |          |          |              |             |
| type           | string   |          |          |              |             |
| color          | string   |          |          |              |             |
| rank           | int      |          |          |              |             |
| parameters[]   | string[] |          |          |              |             |
| pois           | array    |          |          |              |             |
| pois[]         |          |          |          |              |             |
| tags           | array    |          |          |              |             |
| tags[]         |          |          |          |              |             |
| parentLinks    | array    |          |          |              |             |
| parentLinks[]  |          |          |          |              |             |
| childLinks     | array    |          |          |              |             |
| childLinks[]   |          |          |          |              |             |
| translations   | array    |          |          |              |             |
| translations[] |          |          |          |              |             |

## CRUD
| CRUD   | Http Verb | Route      | Description      |
|--------|-----------|------------|------------------|

### READ

#### Parameters
| Name         | In        | Type    | Required            | Default     | Constraint                    | Description |
|--------------|-----------|---------|---------------------|-------------|-------------------------------|-------------|
| 


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