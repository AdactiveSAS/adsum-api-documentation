---
id: model-10-floorCalibration
title: FloorCalibration
---

### What is a FloorCalibration ?

A FloorCalibration is the object used to store FloorCalibration.  I THINK THIS NEEDS TO BE EXPLAINED MORE

### Main Attributes (not exhaustive)

- **id (int)**
- **eye (object)**: 3D camera position
- **floor_id (int)**
- **target (object)**: Camera target position
- **up (object)**: Camera orientation
- **zoom_max (number)**: maximum zoom value
- **zoom_min (number)**: minimum zoom value
- **type (string)**: discriminator field

> Complete list could be found [here](reference-10-floorCalibration.md)

### Relationships

- **site_calibration**: the SiteCalibration it belong to.
- **site**: The site it belong to.

### Cascade Operations

- None

