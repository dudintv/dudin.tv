---
title: Alpha by angle
description: Controls alpha value by the angle between central ray from current camera and local axis of the object.
category: link
path: dudin-alpha/dudin-alpha-by-angle
file: dudin-alpha-by-angle.vb
---

:media-youtube{url="https://youtu.be/cTl82V1Yprs"}

::interface-description{image="alpha-by-angle-interface.png"}

### Interface description

**Direction axis** allow you to choose the main axis of the object

**Visible angle** defines maximum angle where Alpha value will be 100.0

**Invisible angle** defines minimum angle where Alpha value will be 0.0

**Mode** is switcher of function of transition from 0 to 100 between **Invisible angle** and **Visible angle**. **Linear** is just plain function. **Smooth** works with besier handler.

**Easy near power** is besier smoothness of 0.0 value

**Easy far power** is besier smoothness of 100.0 value

**Inverse** obviously flips 100.0 and 0.0 values

</interface-description>

This script is useful for simple rectangles with sprites. To avoid sharp disappearing on 90 degrees, and mipmap flickering on degrees near 90.

::
