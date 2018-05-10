---
id: model-09-siteCalibration
title: SiteCalibration
---

### What is SiteCalibration?

A SiteCalibration is the object used to store Device specific calibration.
 Currently it contains the device position (if applicable), the default
 floor.

### Main Attributes (not exhaustive)

- **id (int)**
- **start_floor (int)**: Start floor id, identifying the floor to show
by default.
- **start_point_floor (int)**: Start point floor id, identifying the
floor where the device is on.
- **start_point_position (object)**: Start point position, identifying
the device position into the floor identified by start_point_floor.

> Complete list could be found [here](reference-09-siteCalibration.md)

### Relationships

- **floor_calibrations**: a list of FloorCalibration, there is one by floor.
- **device**: the Device it belong to.
- **site**: The site it belong to.

### Cascade Operations

- Remove SiteCalibration will:
    - Remove the associated FloorCalibration

