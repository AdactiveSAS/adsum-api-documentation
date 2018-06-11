---
id: version-2.3-model-05-playlist
title: Playlist
original_id: model-05-playlist
---

### What is a Playlist ?

A Playlist is a list of media to be played on a device.

### Main Attributes (not exhaustive)

- **id (int)**
- **name (string)**: The playlist name

> Complete list could be found [here](reference-05-playlist.md)

### Relationships

- **medias**: an ordered list of Media. The association class
PlaylistMediaLink is used to handle the **Media ordering inside a Playlist.**
- **tags**: A list of associated Tag
- **site**: The site it belong to

### Cascade Operations

- Remove the Playlist will:
    - Remove the association class PlaylistMediaLink but not the
associated Media.

