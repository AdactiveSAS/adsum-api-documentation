---
id: version-2.3-model-08-device
title: Device
original_id: model-08-device
---

### What is a Device ?

Represents the used Device used as a Studio client to provide the end-user
 Adsum Solution. It will help reference all specific data such as:

- Credentials
- Calibration


> Device is an abstract class, the developer will have to work
with Device’s specialised classes.

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**
- **height (int)**: the device screen height, required for calibration purpose
- **width (int)**: the device screen width, required for calibration purpose
- **type (string)**: discriminator field

> Complete list could be found [here](reference-08-device.md)

### Relationships

- **site_calibration**: the SiteCalibration defining the specific Device
 behavior.
- **site**: The site it belong to

### Specialized Entities

- **Kiosk** (type="kiosk")
- **Mobile** (type="mobile")
- **Web** (type="web")

### Cascade Operations

- Remove Device will:
    - Remove the associated SiteCalibration

