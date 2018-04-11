---
id: model-07-customObject
title: CustomObject
---

### What is a CustomObject ?

A CustomObject is a dynamique visual illustration of Place on the Map.
The Map itself contain all the static environment / real-world data.
CustomObject are not mean to represent real-world, this is an illustration
to add meta-information over the map itself. This will most of the time
add visual information of the Poi located on the Place (which could be
located on a Space, Building, Site or Floor).

> CustomObject is an abstract class, the developer will have to work
with CustomObject’s specialised classes.

### Main Attributes (not exhaustive)

- **id (int)**
- **priority (int)**: Priority attribute will define the level of details
of CustomObject.
    - if the value is 0 the level of details is disabled, this means
    that the CustomObject will visibility will act normally otherwise
    **the CustomObject visibility will depend on the zoom level**.
    - If your zoom level is very low (let say infinite distance from the
     camera target) then only the level only the priority 0 would be
     diplayed. When your zooming the CustomObject will start being
     displayed from higher priority to lower.
- **orientation_mode (enum)**: Define the orientation mode
    - **"BILLBOARD"**: always oriented face to camera
    - **"STATIC"**: glue to the floor
    - **"FLIP"**: **not supported yet**
- **permanent_display (bool)**: Whether the CustomObject is always
visible by default.
- **autoscale (bool)**: Whether the CustomObject is scale depends on
zoom level to keep same size on screen in-depending from zoom level.
- **type (string)**: discriminator field

> Complete list could be found [here](reference-07-customObject.md)

### Relationships

- **place**: the Place it belong to
- **poi**: an optional Poi associated to the CustomObject. If the Poi is
 associated this will lead to strong rules on both Label#label &
 Picto#picto attributes (see cascade operations).
- **site**: The site it belong to

### Specialized Entities

- **Picto** (type="picto")
    - **width (int)**
    - **height (int)**
    - **file**: a file containing the Picto image
- **Label** (type="label")
    - **label (string)**: the label text content
    - **font_size (int)**
    - **font_color (string)**
    - **background_color (string)**

### Cascade Operations

- Remove Picto will:
    - Remove the associated File

