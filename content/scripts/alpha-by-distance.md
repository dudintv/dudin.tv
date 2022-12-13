---
title: Alpha by distance
description: Controls alpha value corresponding the distance from the current camera to the object.
category: link
path: dudin-alpha/dudin-alpha-by-distance
file: dudin-alpha-by-distance.vb
---

:media-youtube{url="https://youtu.be/aNGZUmgxU3w"}

::interface-description{image="alpha-by-distance-interface.png"}

### Interface description

**Distance near clamp** defines the maximum distance where Alpha will be 0.0

**Distance far clamp** defines the minimum distance where Alpha will be 100.0

**Mode** is switcher of function of transition from 0 to 100 between **near clamp** and **far clamp**. **Linear** is just plain function. **Smooth** works with besier handler.

**Easy near power** is besier smoothness of 0.0 value

**Easy far power** is besier smoothness of 100.0 value

**Inverse** obviously flips 100.0 and 0.0 values

::

This script is very useful in virtual scenes. When you have to fly through some object you get cutting of the object by camera clipping:

:media-image{name="near-plane-clipping.png"}

But with my script you will see smooth Alpha fading of the object before camera clipping reach them:

:media-image{name="semi-alpha.png"}
