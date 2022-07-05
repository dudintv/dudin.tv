---
title: Multi Follow
description: Alternative of standard Autofollow plugin. Can smart follows to several targets.
category: transformation
path: dudin-autofollow
file: autofollow.vb
toys: [MultiFollow]
---

<MultiFollow />

<interface-description image="autofollow-ui.png">

### Interface description

**Follow axis** defines which axis will be controlled in order to position this container.

**Direction** controls which align will be applied. By left edge, by the center, by right edge.

**X-pos if self empty** or **Y-pos if self empty** define the position when this container is empty and has zero bounding box. Useful to avoid blinking effect.

**X-pos default** or **Y-pos default** define the position of this container when target containers are gone. I mean, when the target has zero bounding box (disappear).

**Container 1**, **Container 2**, ... define observed target containers which will be followed by this container. You can change the count inside the script by changing the `quantity_of_container` variable at the beginning of the script.

</interface-description>

If you have tried to use standard Autofollow plugin you already know its limits.

<media-image name="autofollow-plugin.png" />

What I do not like in standard Autofollow:

- It is working properly only in one space coordinates, it's inside one common parent. And I want to get a result in global coordinates, independently from local scales.
- Working properly only with scale = 1.
- Every time I need to reinvestigate how it works! It just annoys me.
- Stays in the previous position when the target container gets invisible. I need some defined position in this case.
- Does not consider invisible object by scaling! If an object is hidden - it’s ok. But if Object is scaled to 0 — it stays active and visible for standard Autofollow.
- For the reason above I can’t autofollow to several containers. I want to consider only visible (by visually) objects. If an object is smaller than a pixel I want to mark it as invisible and exclude from autofollow.
- Only sharp autofollow, without any inertion. I want to see the natural move of following as it looks pretty nice on the screen.
- Always consider the self size. I want to autofollow only pivot point for independent animation of appearing.

Compare standard and my Autofollow:

<media-youtube url="https://www.youtube.com/embed/au4bwUw4Vwg" />

To change observing containers count, overwrite this setting:

<media-image name="autofollow-change-count.png" />
