---
title: Autofollow 2.0
description: Alternative of standart plugin. Can follow to several targets.
category: position
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-autofollow/
file: autofollow.vb
---

<interface-description image="autofollow-ui.png">

### Interface description

__Follow axis__ defines which axis will be controlled in order to position this container.

__Direction__ contols which aling will be applied. By left edge, by center, by right edge.

__X-pos if self empty__ or __Y-pos if self empty__ define the position when this container is empty and has zero bounding box. Usefull to avoid blinking effect.

__X-pos default__ or __Y-pos default__ define the position of this container when target containers are gone. I mean, when the target has zero bounding box (disappear).

__Container 1__, __Container 2__, ... define observed target containers which will be followed by this container. You can change the count inside the script by changin the ```quantity_of_container``` variable in the beginning of the script.

</interface-description>

If you have tried to use standard Autofollow plugin you already know its limits.

<media-image name="autofollow-plugin.png" />

What I do not like in standard Autofollow:

* It is working properly only in one space coordinates, it's inside one common parent. And I want to get a result in global coordinates, independently from local scales.
* Working properly only with scale = 1.
* Every time I need to reinvestigate how it works! It just annoy me.
* Stays in previous position when target container gets invisible. I need some defined position in this case.
* Does not consider invisible object by scaling! If object is hidden - it’s ok. But if Object is scaled to 0 — it stays active and visible for standard Autofollow.
* For the reason above I can’t autofollow to several containers. I want to consider only visible (by visually) objects. If object is smaller than a pixel I want to mark it as invisible and exclude from autofollow.
* Only sharp autofollow, without any inertion. I want to see natural move of following as it looks pretty nice on the screen.
* Always consider self size. I want to autofollow only pivot point for independent animation of appearing.

Compare standard and my Autofollow:

<media-youtube url="https://www.youtube.com/embed/au4bwUw4Vwg" />

For changing the count of observing containers, overwrite this setting:

<media-image name="autofollow-change-count.png" />
