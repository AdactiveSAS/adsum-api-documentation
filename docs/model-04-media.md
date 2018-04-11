---
id: model-04-media
title: Media
---

### What is a Media ?

Media is a form of storage material for files along with relevant
information associated with it.

> Media is an abstract class, the developer will have to work with
Media’s specialised classes.

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**: The media name
- **start_at (datetime|null)**:
- **end_at (datetime|null)**:
- **type (string)**: discriminator field

> Complete list could be found [here](reference-04-media.md)

### Relationships

- **playlists**: an ordered list of Playlist. The association class
PlaylistMediaLink is used to handle the Media **ordering inside a Playlist.**
- **pois**:an ordered list of Media. The association class MediaPoiLink
is used to handle the **Media ordering inside a Poi**.
- **tags**: A list of associated Tag
- **preview**: an optional File which is used to represents the Media as a thumbnail.
- **site**: The site it belong to

*Note*: **MediaImage**, **MediaPdf**, **MediaVideo**, **Movie**
specialized entity has an additional relationship

- **file**: a File containing the Media data

### Specialized Entities

- **MediaImage** (type="image")
- **MediaPdf** (type="pdf")
- **MediaText** (type="text")
- **MediaUrl** (type="url")
- **MediaVideo** (type="video")
- **Movie** (type="movie")

### Cascade Operations

- Remove the Media will:
    - Remove MediaPoiLink but not the associated Poi
    - Remove PlaylistMediaLink but not the associated Playlist.
    - Remove the associated Media#preview
    - Remove the associated Media#file (if any)
