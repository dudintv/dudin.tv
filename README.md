# dudin.tv

> Pre-rendered website with my Vizrt scripts and articles.

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Project created for generating static website by `yarn generate`.

# Directory/File structure

## Add script

1. Create new markdown file to under `/content/scripts/`
2. Add thumbnail image to ```static/images/thumbnails/`. SVG format is recomended.
3. Add rest images to `static/images/scripts/[script-name]/`. Where "\[script-name\]" is exactly the same to markdown filename.

## Markdown & Frontmatter format

Sample frontmatter:

```
---
title: 9 part texture
description: Script for stretching texture with saving quality of borders and corners.
cover: script-icon-9parttexture.png
author: Dmitry Dudin
category: texture
thumbnail: images/thumbnails/9partTexture.svg
---
```

## Show media files

1. Put the file to `static/images/scripts/[script-name]/` as `example.png`.
2. Call with `<media name="example.png">`. Don't need "\[script-name\]" part.

* If put `mp4` file, it will play automatically.
* If put `YouTube URL` in _name_ parameter, it will be rendered as embeded player of YouTube.

# Components

## InterfaceDescription

You should set __interface image__ as `name` param and __description__ as default slot. In description it's possible to use Markdown! To make it works you shoul insert two empty lines: one just after open `<interface-description image="interface.png">` and second just before `</interface-description>`. 

Sample of using:

```
<interface-description image="interface.png">

# HEADER

Simple plain text

</interface-description>
```

## MediaImage

Use it for insert an image.

* Set image name in "name" param. If name is "image.png" and you insert into a script with name "my-script.md" — MediaImage look for the image in `static/images/scripts/my-script/image.png`.
* Don't forget to add "/", it's stricly obligatory!

Sample:

```
<media-image name="image.png" />
```

# Author & Contacts

Dmitry Dudin
[facebook.com/dudintv](https://www.facebook.com/dudintv){:target="_blank"}
