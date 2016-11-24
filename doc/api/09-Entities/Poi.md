#Poi

##Model
| Field           | Type   | Readonly            | Nullable            | Translatable        | Description |
|-----------------|--------|---------------------|---------------------|---------------------|-------------|
| id              | int    | ![true][trueIcon]   | ![false][falseIcon] | ![false][falseIcon] |             |
| name            | string | ![false][falseIcon] | ![false][falseIcon] | ![false][falseIcon] |             |
| description     | string | ![false][falseIcon] | ![true][trueIcon]   | ![true][trueIcon]   |             |
| categories      | array  |                     |                     |                     |             |
| categories[]    |        |                     |                     |                     |             |
| customObjects   | array  |                     |                     |                     |             |
| customObjects[] |        |                     |                     |                     |             |
| places          | array  |                     |                     |                     |             |
| place[]         |        |                     |                     |                     |             |
| tags            | array  |                     |                     |                     |             |
| tags[]          |        |                     |                     |                     |             |
| parentLinks     | array  |                     |                     |                     |             |
| parentLinks[]   |        |                     |                     |                     |             |
| childLink       |        |                     |                     |                     |             |
| childLink[]     |        |                     |                     |                     |             |
| logoLinks       |        |                     |                     |                     |             |
| logoLinks[]     |        |                     |                     |                     |             |
| pictureLink     |        |                     |                     |                     |             |
| pictureLinks[]  |        |                     |                     |                     |             |
| mediaLink       |        |                     |                     |                     |             |
| mediaLinks[]    |        |                     |                     |                     |             |
| translations    |        |                     |                     |                     |             |
| translations[]  |        |                     |                     |                     |             |



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