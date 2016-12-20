# Poi

## Model

> TODO: talk about poi inheritance Poi is the base class and all the following are derived from it

### Poi <abstract>
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
| new             | bool   |                     |                     |                     |             |

### Discriminator Map

##### Poi#type

Poi#type === "person" ==> Person  
Poi#type === "store" ==> Store  
Poi#type === "product" ==> Product  
Poi#type === "exhibitor" ==> Exhibitor  
Poi#type === "room" ==> Room  
Poi#type === "service" ==> Service  


### Service
| Field    | Type  | Readonly | Nullable | Translatable | Description |
|----------|-------|----------|----------|--------------|-------------|
| schedule | array |          |          |              |             |


### Exhibitor
| Field | Type   | Readonly | Nullable | Translatable | Description |
|-------|--------|----------|----------|--------------|-------------|
| phone | string |          |          |              |             |
| url   | string |          |          |              |             |

### Store
| Field       | Type   | Readonly | Nullable | Translatable | Description |
|-------------|--------|----------|----------|--------------|-------------|
| priority    | int    |          |          |              |             |
| openingTime | string |          |          |              |             |
| phone       | string |          |          |              |             |
| url         | string |          |          |              |             |

### Room
| Field     | Type   | Readonly | Nullable | Translatable | Description |
|-----------|--------|----------|----------|--------------|-------------|
| reference | string |          |          |              |             |
| kind      | string |          |          |              |             |
| capacity  | int    |          |          |              |             |
| phone     | string |          |          |              |             |

### Person
| Field       | Type   | Readonly | Nullable | Translatable | Description |
|-------------|--------|----------|----------|--------------|-------------|
| firstname   | string |          |          |              |             |
| lastname    | string |          |          |              |             |
| deskphone   | string |          |          |              |             |
| mobilephone | string |          |          |              |             |

### Product
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