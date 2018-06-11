---
id: version-2.4-model-02-place
title: Place
original_id: model-02-place
---

### What is a Place ?

A Place is the entity used to link to 3D Model to the Relational one.
The reference location of a Place on the Map:

- There is a Place for each Building
- There is a Place for each Space
- A Place can be created on a Floor
- A Place can be created on the Site

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**:
    - If its associated to a Building, it will be the building#name
    - If its associated to a Space, it will be the space#name
    - Otherwise it’s customizable
- **floor_id (int)**: The floor 3D identifier, if the place is located on
the site then it will be “-1” by convention.
- **shape_id (int|null)**: The Space#id if it’s associated to a Space,
otherwise null
- **building_id (int|null)**: The Building#id if it’s associated to a
Building, otherwise null
- **path_node_id (int|null)**: The checkpoint or floor access id otherwise null,
otherwise null
- **position (object)**: The place position relative to the Building
(associated to a building), Space (associated to a Space), Floor
(on a Floor) or Site (on the Site):
    - **position.x (float)**: The x coordinate
    - **position.y (float)**: The y coordinate
    - **position.z (float)**: The z coordinate

> Complete list could be found [here](reference-02-place.md)

### Relationships

- **pois**: List of all Pois associated to that Place, meaning which are
located on that Place.
- **custom_objects**: A list of CustomObject, which could be a Picto or a
Label, used to add visual information on the Map .
- **site**: The site that the map belongs to

> Currently multiple CustomObject feature is not supported.

### Cascade Operations

- Removing the Place will:
    - Cascade to associated CustomObjects
- Un-associating a Poi will:
    - Remove the associated CustomObject if and only if the CustomObject
is associated to the Poi.
