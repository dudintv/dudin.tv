---
title: Alpha by angle
description: Controls alpha value by the angle between central ray from current camera and local axis of the object.
category: link
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-alpha/dudin-alpha-by-angle/
file: dudin-alpha-by-angle.vb
---

<interface-description image="alpha-by-angle-interface.png">

### Interface description

__Direction axis__ allow you to choose the main axis of the object

__Visible angle__ defines maximun angle where Alpha value will be 100.0

__Invisible angle__ defines minimum angle where Alpha value will be 0.0

__Mode__ is switcher of function of transition from 0 to 100 between __Invisible angle__ and __Visible angle__. __Linear__ is just plain function. __Smooth__ works with besier handler.

__Easy near power__ is besier smoothness of 0.0 value

__Easy far power__ is besier smoothness of 100.0 value

__Inverse__ obviously flips 100.0 and 0.0 values

</interface-description>

This script is useful for simple rectangles with sprites. To avoid sharp disappearing on 90 degrees, and mipmap flickering on degrees near 90.

<media-image name="trees-alpha-by-angles.png" />
