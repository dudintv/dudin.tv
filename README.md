# dudin.tv

https://dudin.tv

> My personal Nuxt 3 website with my Vizrt scripts and articles.

![dudin.tv presentation](https://github.com/dudintv/dudin.tv/raw/master/public/images/for-github-readme/dudin.tv-presentation.gif)

## Setup

Make sure to install the dependencies:

```bash
# setup project
yarn install

# serve with hot reload at localhost:3000
yarn dev
```

## Test

```bash
yarn test
```

# Directory/File structure

## Adding a new script

1. Create a new markdown file in `/content/scripts/`
2. Add a thumbnail image to `public/images/scripts/{script name}/thumbnail.svg`. SVG format is recommended.
3. Add images to `public/images/scripts/{script name}/`. Where **{script-name}** is exact same as markdown filename.

**Frontmatter** sample for a Script:

```
---
title: 9 part texture
description: Script for stretching texture with saving quality of borders and corners.
category: texture
---
```

## Adding a new article

1. Create a new markdown file in `/content/articles/`
2. Add images & files to `public/images/articles/{article-name}/`. Where "{article-name}" is exact same as markdown filename.

**Frontmatter** sample for an Article:

```
---
title: "Execution Logic. Part 1"
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

To add a new tag just add a new icon in `public/images/icons/{tag name}.png`

## Adding a new project on the Portfolio page

1. Create a new markdown file in `/content/projects/`
2. Add images & files to `public/images/projects/{project-name}/`. Where "{project-name}" is exact same as markdown filename.

**Frontmatter** sample for a Project:

```
---
title: 'MuzTV Awards 2019'
description: 'Set of Augment Reality Vizrt graphics for a enormous stadium in Russia.'
date: 2019-06-01 12:00:00 +0100
youtube: https://youtu.be/tFViRnyZ2F4
---
```

There can be used either `youtube` or `image` key:

```
youtube: https://youtu.be/tFViRnyZ2F4
```

OR

```
image: zenit-template-16x9.png
```

## Frontmatter

About native keys: https://content.nuxtjs.org/guide/writing/markdown#native-parameters

E.g. use `draft` key to make script/article/project available only on the `developing` environment.

```
---
draft: true
---
```

# Code highlighter "Shiki"

Inline code — just wrap it with single backticks "\`Dim s As String\`".

Code block should be wrapped by two lines, each is three backticks "```" with the language name.

Recommended languages:

````
```xml — for Execution logic
```basic — for VizArtist scripts
```r — nice for console commands
````

But it's possible to use any other languages: https://github.com/shikijs/shiki/blob/main/docs/languages.md

Example:

````
```basic
Dim i As Integer
```
````

# Custom components for Scripts and Articles

## InterfaceDescription

Set `name` param as **interface image** and default slot as **description**.

- Image is searched into `public/images/scripts/{script-name}/{image-name}`

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
