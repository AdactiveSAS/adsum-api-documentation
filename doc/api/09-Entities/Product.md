#Product

##Model
| Field             | Type   | Readonly | Nullable | Translatable | Description |
|-------------------|--------|----------|----------|--------------|-------------|
| priority          | int    |          |          |              |             |
| reference         | string |          |          |              |             |
| fullName          | string |          |          |              |             |
| description1      | string |          |          |              |             |
| description2      | string |          |          |              |             |
| fullDdescription  | string |          |          |              |             |
| brandName         | string |          |          |              |             |
| url               | string |          |          |              |             |
| status            | string |          |          |              |             |
| price             | float  |          |          |              |             |
| currency          | string |          |          |              |             |
| rating            | float  |          |          |              |             |
| ratingCount       | int    |          |          |              |             |
| remainingQuantity | int    |          |          |              |             |
| discountValue     | int    |          |          |              |             |
| ean               | string |          |          |              |             |
| featureValues     | array  |          |          |              |             |
| featureValues[]   |        |          |          |              |             |


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