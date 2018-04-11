---
id: model-13-feature
title: Feature (Deprecated)
---

### What is a Feature ?

A feature hold the Product characteristics, it’s composed by a name and
an unit (like”height in cm”).

The Feature can have parent / children relationship. This would help to
categorize them (like “dimensions” being parent of “height in cm” and
“width in cm”).

The Feature is also link to FeatureValue representing the possible value
of a Feature. Those FeatureValue are linked to the Product itself. This
design will help to compare Product features.

#### Example

Considering two products A & B with the following feature:

- Dimensions
    - height in cm
    - width in cm
- Weight in gram

The Product A will have the following Feature values:

- 20 linked to the Feature “height in cm”
- 5 linked to the Feature “width in cm”
- 80 linked to the Feature “Weight in gram”

The Product B will have the following Feature values:

- 20 linked to the Feature “height in cm”
- 16 linked to the Feature “width in cm”
- 75 linked to the Feature “Weight in gram”

Creating a comparison table will simply consist of putting in row the
feature name and in column the product. Then we could filled the cells
with the FeatureValue.

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**: The feature name

### Relationships

- **values**: a list of FeatureValue.
- **site**: The site it belong to
- **parents**: a list of Feature which represents all the parents. The
association class FeatureLink used to handle to **ordering of children by parent**.
- **children**: an ordered list of Feature which represents all the children.
The association class FeatureLink is used to handle to **ordering of children by parent**.

### Cascade Operations

- Remove the Feature will:
    - Remove the association class FeatureLink but not the associated
    parents / children.
    - Remove the association class FeatureLink but not the associated
    parents / children.
