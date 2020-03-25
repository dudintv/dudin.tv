---
title: 9 part texture
description: Script for stretching texture with saving quality of borders and corners.
category: texture
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-9parttexture/
file: 9parttexture.vb
---

<interface-description image="interface.png">

### Interface description

__Common border__ allows you to controll all four sides by single parameter. If it’s off you can control sides separatelly.

__Border__ controls how many cut texture to construct borders part. For example, 20% grab 40% of texture whole width to create borders and left 60% as a central part.

You can __get size of some container__, just like in “TextBG” standard plugin.

__Magnifier__ corrects size to shrink or stretch this texture. E.g. that way you can increase/decrease shadow size.

</interface-description>

<media-youtube path="https://www.youtube.com/embed/AbJf5V1j-Ko" />

## Theory

Imagine, you need to create nice looking shadows for plane. You are just create a texture faking shadows effect. If you know size in advance — all is ok. But what to do if you are creating some customizable effect? You can't know what size the rectangle will have. 9 part texture rescue you!

<media-image name="script-9-part-before-and-after.png" />

### 1. Lets start from painting square texture of shadow effect.

<media-image name="script-9-part-example-shadow-source.png" />

### 2. Understand how to slice it.

<media-image name="script-9-part-example-shadow-sliced.png" />

Center is too big. Actually it can be 1x1 pixel. I leave this non optimal version for clarity.

### 3. How it sctreched?

Simple one rectangle take this result:

<media-image name="script-9-part-example-stretched.png" />

If we are applied "9 part" concept, we can get this:

<media-image name="script-9-part-example-working.png" />

We just change size only three parts. It's central row.

<media-image name="script-9-part-example-how-it-working.png" />

This way you can create glow, shadow and frame effects, etc:

<media-image name="9-part-texture-cover.png" />

## Practice

I wrote the script for provide solution "9 part texture" in vizrt. 

How to use it:

1. Drop script to some container
2. Click "Create base planes" for creating nine sub-containers.
3. Drop texture to all nine sub-conaitners.
4. Set "Source of size", position...
5. Set "Border" parameter correspondently to texture style:
<media-image img.html name="script-9-part-texture-setup.gif" />

There is issue when central row or column is too small. This is texture filtering.
The issue can be solved by setup maximum Anisotropic Filter on all nine textures:

<media-image name="script-9-part-texture-anisotropic-filter.gif" />
<media-image name="script-9-part-texture-filter-for-all.png" />

## Try it yourself

I've prepared some textures for you ;)

I use white color for easy changing color in vizrt. Just add a material ;) If you want black color on a shadows, add black material on the master container:

<media-image name="script-9-part-add-black-material.png" />

### Glow/shadow

<media-image name="try/RectangleBlur10.png" transparent /> <br/>
<media-image name="try/RectangleBlur30.png" transparent /> <br/>
<media-image name="try/RectangleBlur50.png" transparent /> <br/>
<media-image name="try/RectangleBlur70.png" transparent /> <br/>

### Frames

<media-image name="try/ArtFrame512.png" transparent /> <br/>
<media-image name="try/NeonFrame128.png" transparent /> <br/>
<media-image name="try/GlowFrame128.png" transparent /> <br/>
