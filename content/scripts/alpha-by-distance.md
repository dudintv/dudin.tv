---
title: Alpha by distance
description: Controls alpha value corresponding the distance from the current camera to the object.
category: link
link: https://bitbucket.org/vizrt/vizartist-script-backup/src/master/dudin-alpha/dudin-alpha-by-distance/
file: dudin-alpha-by-distance.vb
---

<media-youtube url="https://youtu.be/aNGZUmgxU3w" />

<interface-description image="alpha-by-distance-interface.png">

### Interface description

__Distance near clamp__ defines the maximum distance where Aplha will be 0.0

__Distance far clamp__ defines the minimum distance where Aplha will be 100.0

__Mode__ is switcher of function of transition from 0 to 100 between __near clamp__ and __far clamp__. __Linear__ is just plain function. __Smooth__ works with besier handler.

__Easy near power__ is besier smoothness of 0.0 value

__Easy far power__ is besier smoothness of 100.0 value

__Inverse__ obviously flips 100.0 and 0.0 values

</interface-description>

This script is very useful in virtual scenes. When you have to fly through some object you get cutting of the object by camera clipping:

<media-image name="near-plane-clipping.png" />

But with my script you will see smooth Alpha fading of the object before camera clipping reach them:

<media-image name="semi-alpha.png" />
