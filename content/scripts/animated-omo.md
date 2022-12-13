---
title: Animated Omo
description: Select container with animation of position, rotation, scaling and/or alpha. Absolute and relative.
category: animation
path: dudin-omo/dudin-omo-animated
file: dudin-omo.vb
---

::interface-description{image="animated-omo-interface.png"}

### Interface description

You can define any container as **Root container**. By default (if empty) it is _this_ container.

**Transform base** defines default transformation and alpha settings. If it's empty, they will be generated from current state of the objects, only parameters mentioned in all **transform ...** fields.

**Transform selected** defines changes for selected element(s).

**Transform hided** defines changes for unselected elements if there is some selected.

**Transition mode** defines animation style for elements. Variants: 1) direct, 2) through base and 3) through hidden

**Middle transition** defines speeds of two parts transition. First part is "start to base", second is "base to end"

**Keep visible (like in Omo)** allow you select elements from 0 to "selected" index. Just like it is in original Omo.

**Selected** is the main parameter. Current selected element which will be applied **Transform selected** settings.

Buttons:

Use **Init** button if you change childs.

To test, you can use buttons: **All to Base!**, **All to Hide!**, **All to Selected!**.

**Base** set **selected** to 0 index (deselect all elements).

**Prev** decrease **selected** by 1. If index will be less than the firs index it will change to the last possible index. Works in a loop.

**Next** increase **selected** by 1. If index will be more than count of elements it will change to the first index. Works in a loop.

**Show dutaion(sec)** and **Hide duration(sec)** define amount of time in seconds correspondingly.

**Advanced functions** shows couple extra parameters

**Manual show-anim** allow you control appearing animation by value that you can animate in the Stage as you want.

::
