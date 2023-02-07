# dudin.tv

https://dudin.tv

> My personal Nuxt 3 website with my Vizrt scripts and articles.

![dudin.tv presentation](https://github.com/dudintv/dudin.tv/raw/master/static/images/for-github-readme/dudin.tv-presentation.gif)

## Setup

Make sure to install the dependencies:

```bash
# setup project
yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

# Directory/File structure

## Adding a new script

1. Create new markdown file to under `/content/scripts/`
2. Add thumbnail image to `public/images/scripts/{script name}/thumbnail.svg`. SVG format is recommended.
3. Add images to `public/images/scripts/{script name}/`. Where **{script-name}** is exact same as markdown filename.

**Frontmatter** sample for Script:

```
---
title: 9 part texture
description: Script for stretching texture with saving quality of borders and corners.
category: texture
---
```

## Adding a new article

1. Create new markdown file to under `/content/articles/`
2. Add images & files to `public/images/articles/{article-name}/`. Where "{article-name}" is exact same as markdown filename.

**Frontmatter** sample for Article:

```
---
title:  "Execution Logic. Part 1"
description: "Creating custom logic for custom vizrt template."
date: 2017-11-12 12:00:00 +0300
tags: vcp vtw
---
```

Use "date" to control the order articles in the list ;)

List of possible tags:

- artist
- trio
- vcp
- vtw
- multiplay
- excel

# Code highlighter

Wrap code by three backslash symbols "```".

To highlight different languages you can use "language tag". Working examples:

````
```xml — for Execution logic
```basic — for VizArtist scripts
```r — nice for console commands
````

Example:

````
```basic
Dim i As Integer
```
````

# Custom components for Scripts and Articles

## InterfaceDescription

Set `name` param as **interface image** and default slot as **description**.

- Image is searched into `public/images/scripts/[script-name]/[image-name]`

Sample of using:

```
::interface-description{image="interface.png"}

### Interface description

Simple plain text

::
```

## WideWidthContainer

Use it for for full-width content, like the "Full-Bleed Layout"

```
::WideWidthContainer
:media-image{name="snap_flex3_0.png" style="max-width: 45vw"}
:media-image{name="snap_flex5_0.png" style="max-width: 45vw"}
::
```

## MediaImage

Use it for static images (jpg, png, svg).

- `name="xxx.png"` reflects `public/images/{current url path}/xxx.png`.

```
// in pug template:
media-image(name="xxx.svg")

// in Markdown file:
:media-image{name="xxx.png"}
```

How to insert a static image (for components):

```
img(:src="`/images/icons/facebook.png`" width="32" height="32")
```

## MediaYoutube

Use it to embed YouTube video by link or video-id.

```
:media-youtube{url="https://youtu.be/fEwqgMe_xX8"}
:media-youtube{url="https://www.youtube.com/watch?v=fEwqgMe_xX8"}
:media-youtube{url="fEwqgMe_xX8"}
```

## MediaFile

Use it to render beautiful button to download a file.

- `File.via` for **{script}** should be stored in `public/images/scripts/{script name}/File.via`
- `File.via` for **{article}** article should be stored in `public/images/articles/{article name}/File.via`

Example for a markdown file:

```
:media-file{name="File.via"}
```

# Author & Contacts

Dmitry Dudin
<a href="https://www.facebook.com/dudintv" onclick="return ! window.open(this.href);">facebook.com/dudintv</a>
