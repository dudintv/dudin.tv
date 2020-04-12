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

## Add a new script

1. Create new markdown file to under `/content/scripts/`
2. Add thumbnail image to ```static/images/thumbnails/`. SVG format is recomended.
3. Add rest images to `static/images/scripts/[script-name]/`. Where "\[script-name\]" is exactly the same to markdown filename.

Sample frontmatter for Script:

```
---
title: 9 part texture
description: Script for stretching texture with saving quality of borders and corners.
category: texture
---
```

## Add a new article

1. Create new markdown file to under `/content/articles/`
2. Add images & files to `static/images/articles/[article-name]/`. Where "\[article-name\]" is exactly the same to markdown filename.

Sample frontmatter for Article:
```
---
title:  "Execution Logic. Part 1"
description: "Creating custom logic for custom vizrt template."
date: 2017-11-12 12:00:00 +0300
tags: vcp vtw
---
```

Use "date" only to control order article.

List of possible tags:
* artist
* trio
* vcp
* vtw
* multiplay
* excel

# Code highlighter

Wrap code by three backslash symbols "```".

To highlight different languages you can use "languagle tag". Working examples:

```
```xml — for Execution logic
```basic — for VizArtist scripts
```r — for console commands
```

# Components

## InterfaceDescription

You should set __interface image__ as `name` param and __description__ as default slot. 

* In description it's possible to use Markdown! To make it works you shoul insert two empty lines: one just after open `<interface-description image="interface.png">` and second just before `</interface-description>`. 
* Image is searched into `static/images/scripts/[script-name]/[image-name]`

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

## MediaYoutube

Use it to embed YouTube video by link or video-id.

Working samples:

```
<media-youtube url="https://www.youtube.com/embed/fEwqgMe_xX8" />
<media-youtube url="https://www.youtube.com/watch?v=fEwqgMe_xX8" />
<media-youtube url="fEwqgMe_xX8" />
```

## MediaFile

Use it to render beautiful link to download file. File will be looking in to corresponding path:
* __File.via__ for __xxx__ script should be stored in __/images/scripts/xxx/File.via__
* __File.via__ for __yyy__ article should be stored in __/images/articles/yyy/File.via__

Example:

```
<media-file name="FlexExamples.via" />
```

# Author & Contacts

Dmitry Dudin
<a href="https://www.facebook.com/dudintv" onclick="return ! window.open(this.href);">facebook.com/dudintv</a>
