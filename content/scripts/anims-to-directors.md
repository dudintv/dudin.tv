---
title: Anims to directors
description: Spread animations into directors by child containers names.
category: animation
path: dudin-animation/dudin-arrange-animations
file: dudin-arrange-animations.vb
---

::interface-description{image="interface.png"}

**Root container** allow you put this script on any container and control point another container as "root" for the script. By default (if this param is empty) it works with current container "this".

You can control **Where to place** all animation within "root container".

**Offset director** useful to shift each directors with **Start** offset and **Step** of increment. If you want inverse you can point negative **Step**.

::

You can collect or spread your animation into certain directors. There is the option of how to move animations:

1. Collect all animation channels into a single director.
2. Spread animation to directors by first-level children names.
3. Spread animation to directors by first-level children name + index number (starts from 1).

## Example

If you have that tree:

:media-image{name="example-tree.png"}

Option "By childs name" gives you that result:

:media-image{name="example-stage.png"}
