---
id: model-06-category
title: Category
---

### What is a Category ?

A Category would be a classification of POIs. For example: Restaurants,
Services, Shopping.

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**: The category name

> Complete list could be found [here](reference-06-category.md)

### Relationships

- **pois**: a list of Poi.
- **tags**: A list of associated Tag
- **site**: The site it belong to
- **parents**: a list of Category which represents all the parents. The
association class CategoryLink used  to handle to **ordering of children by parent**.
- **children**: an ordered list of Category which represents all the children.
The association class CategoryLink is used to handle to **ordering of children by parent**.

### Cascade Operations

- Remove the Category will:
    - Remove CategoryLink but not the associated parents / children.
