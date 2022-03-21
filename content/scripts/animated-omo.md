---
title: Animated Omo
description: Select container with animation of position, rotation, scaling and/or alpha. Absolute and relative.
category: animation
path: dudin-omo/dudin-omo-animated
file: dudin-omo.vb
---

<interface-description image="animated-omo-interface.png">

### Interface description

You can define any container as __Root container__. By default (if empty) it is _this_ container.

__Transform base__ defines default transformation and alpha settings. If it's empty, they will be generated from current state of the objects, only parameters mentioned in all __transform ...__ fields.

__Transform selected__ defines changes for selected element(s).

__Transform hided__ defines changes for unselected elements if there is some selected.

__Transition mode__ defines animation style for elements. Variants: 1) direct, 2) through base and 3) through hidden

__Middle transition__ defines speeds of two parts transition. First part is "start to base", second is "base to end"

__Keep visible (like in Omo)__ allow you select elements from 0 to "selected" index. Just like it is in original Omo.

__Selected__ is the main parameter. Current selected element which will be applied __Transform selected__ settings.

Buttons:

Use __Init__ button if you change childs.

To test, you can use buttons: __All to Base!__, __All to Hide!__, __All to Selected!__.

__Base__ set __selected__ to 0 index (deselect all elements).

__Prev__ decrease __selected__ by 1. If index will be less than the firs index it will change to the last possible index. Works in a loop.

__Next__ increase __selected__ by 1. If index will be more than count of elements it will change to the first index. Works in a loop.

__Show dutaion(sec)__ and __Hide duration(sec)__ define amount of time in seconds correspondingly.

__Advanced functions__ shows couple extra parameters

__Manual show-anim__ allow you control appearing animation by value that you can animate in the Stage as you want.

</interface-description>
