---
id: version-2.3-model-03-poi
title: Poi
original_id: model-03-poi
---

### What is a Poi ?

A Point of Interest (POI) is an entity to be located on map which is
useful or interesting to the end user. For example, a store, a meeting
room, toilets or products are POIs.

> Poi is an abstract class, the developer would have to work with the
Poi’s specialised classes (i.e Product, Person, Store).

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**: The poi name
- **type (string)**: discriminator field

> Complete list could be found [here](reference-03-poi.md)

### Relationships

- **categories**: A list of Categories on which the Poi belong.
- **places**: A list of Places used to identify the Poi locations on the Map.
- **tags**: A list of associated Tags
- **custom_objects**: A list of CustomObject used to illustrate the Place
on which the Poi is located. Every CustomObject#place should be in the Poi#places.
- **logos**: An ordered list of File which represents the logos. The
association class PoiLogoLink is used to handle to **ordering of File by Poi**
- **site**: The site the Poi belongs to

> The following relationships interpretation is left to the service team
depending of the project need.

- **parents**: A list of Poi which represents all the parents. The
association class PoiLink used  to handle to **ordering of children by parent**.
- **children**: An ordered list of Poi which represents all the children.
 The association class PoiLink is used to handle to **ordering of children by parent**.
- **medias**: An ordered list of Media. The association class MediaPoiLink
 is used to handle the **ordering of Media by Poi**.
- **pictures**: An ordered list of File which represents the associated
pictures. The association class PoiPictureLink is used to handle to
**ordering of File by Poi**.

*Note*: The Product specialized entity has an additional deprecated
relationship:

- **feature_values**: a list a FeatureValue

### Specialized Entities

- **Product** (type="product")
- **Person** (type="person")
- **Exhibitor** (type="exhibitor")
- **Store** (type="store")
- **Room** (type="room")
- **Service** (type="service")

### Cascade Operations

- Removing a Poi will:
    - Remove all associated Label
    - Remove PoiLink but not the associated parents / children
    - Remove MediaPoiLink but not the associated Media
    - Remove PoiPictureLink AND the associated File
    - Remove PoiLogoLink AND the associated File
- Updating the Poi’s name attribute will:
    - Update all associated Label#label attribute with the same value.
- Updating the Poi’s first logo will:
    - Update all associated Picto#file attribute with the same file (resized)
- Removing Poi’s logo will:
    - Delete all associated Picto
- Removing a PoiLogoLink will:
    - Remove PoiLogoLink AND the associated File
- Removing a PoiPictureLink will:
    - Remove PoiPictureLink AND the associated File

