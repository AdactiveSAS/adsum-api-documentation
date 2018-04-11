---
id: model-03-poi
title: Poi
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

- **categories**: a list of Category on which the Poi belong.
- **places**: A list of Place used to identify on the Map the Poi locations.
- **tags**: A list of associated Tag
- **custom_objects**: A list of CustomObject used to illustrate the Place
on which the Poi is located. Every CustomObject#place should be in the Poi#places.
- **logos**: an ordered list of File which represents the logos. The
association class PoiLogoLink is used to handle to **ordering of File by Poi**
- **site**: The site it belong to

> The following relationships interpretation is let to the service team
depending of the project need.

- **parents**: a list of Poi which represents all the parents. The
association class PoiLink used  to handle to **ordering of children by parent**.
- **children**: an ordered list of Poi which represents all the children.
 The association class PoiLink is used to handle to **ordering of children by parent**.
- **medias**: an ordered list of Media. The association class MediaPoiLink
 is used to handle the **ordering of Media by Poi**.
- **pictures**: an ordered list of File which represents the associated
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

- Remove Poi will:
    - Remove all associated Label
    - Remove PoiLink but not the associated parents / children
    - Remove MediaPoiLink but not the associated Media
    - Remove PoiPictureLink AND the associated File
    - Remove PoiLogoLink AND the associated File
- Updating the Poi’s name attribute will:
    - Update all associated Label#label attribute with the same value.
- Update the Poi’s first logo will:
    - Update all associated Picto#file attribute with the same file (resized)
- Remove Poi’s logo will:
    - Delete all associated Picto
- Remove a PoiLogoLink will:
    - Remove PoiLogoLink AND the associated File
- Remove a PoiPictureLink will:
    - Remove PoiPictureLink AND the associated File

