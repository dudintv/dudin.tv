---
title: Flex
description: Automatic placement of containers within certain area. Like CSS Flex in Web.
category: position
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-flex/
file: flex.vb
---

<interface-description image="flex-ui.png">

### Interface description

The script uses bounding box from __Gabarit container__ to build a space/field for child containers.

It's possible to switch between X and Y as main axis by __Axis__ param.

__Size of children__ helps you to control how will be calculated the gabarits of items. "Whole container" just consider gabarits of each item-container. But, "first sub-container" allows you to control this size manually thought the gabarit of the first child container of each item-container. With the second option, the animation can be more smoothly and more controllable. For example, you even can animate this "first sub-container".

__Justify__ works like in HTML/CSS flex.

__Align__ works along secondary axis. If you select X as the first axis, the second will be Y.

__Shift of gap__ and __Magnetic gap__ allow you to control aesthetic factors of appearance. How items looks when items count is few or many.

__Min gap__ is like thershold for minimal gaps. If gap sholud be less the value it becomes to zero! It allows avoid very tiny gaps between items what can looks like cracks. 

</interface-description>

Do you know about “flexbox” in HTML5/CSS3? This is flexible box layout for convenient auto-placing of containers into a gabarit of the certain container. Take a look at [explanation of the idea for web](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Let me introduce several features I’ve implemented for convenient usage in onair graphics: “justify-content” and “align-items”. This script can be helpful in many situations.

## All possible variants
_I’ve marked my two often used options by blue strokes._

X axis:
<media-image name="flex-variants-x.png" />

Marked variant is very useful for portraits with different height when you need only top alignment among all pictures (and no requirement for bottoms to be aligned).

Y axis:
<media-image name="flex-variants-y.png" />

Marked central variant is useful for fast centering of any logo with a sign.

## Cases for flex-positioning

First idea for using a flex is a simplification of containers positioning within certain gabarit.

Flex is used in onair graphics as auto-stack. For example, for:

* set of portraits or infographic bars
* enlarging one element and auto moving away others
* stack of messages in a corner
* set of lowerthirds in a corner

You can also combine Flex with scripts and plugins:

* nested Flex into another Flex — horizontal and vertical ones
* combine with [my script "Autoscroll"](/scripts/autoscroll/) — use Flex for containers stacking and use Autoscroll for convenient scroll of content
* of course, feel free to use any standard plugins :)

## Esthetic options

### Magnetic

For esthetic reasons I’ve added a special parameter for correction of distribution within certain area. Imagine that you have fullscreen graphics with several portraits. It’s possible to show 1 to 5 items. You set “justify-content” in “space around” and get nice result for 1, 4 or 5 visible items. However, in case of 2 (or 3) portraits, there will be too much space between them. With correct logic 2 (or 3) items will have equal distance between themselves and area borders. That doesn’t look good. That’s why I’ve implemented “magnetic” feature for pulling effect when number of child containers is small.

Compare 0, 50, 100 values of magnetic with 3 items:

<media-image name="snap_flex3_0.png" />
<media-image name="snap_flex3_50.png" />
<media-image name="snap_flex3_100.png" />

And with 5 items:

<media-image name="snap_flex5_0.png" />
<media-image name="snap_flex5_50.png" />
<media-image name="snap_flex5_100.png" />

### Source of item size

If items have animations with changing size, you can get unexpected behaviour. Items could start jiggling. If you don’t want this effect, you can limit the source for calculating an item’s gabarit by first sub-container. This first sub-container can be invisible (but active) and static for stable positioning. Or you can softly animate this container in order to reach nice revealing animation.

<media-image name="flex-tree.png" />

<media-youtube url="https://www.youtube.com/embed/J473ItRQu7I" />

Both options are good and can be usefull. You can select what you need.

## Unobvious using approaches

Feel free to experiment with this script.

### Scaling item

You can change size of items separatelly:

<media-youtube url="https://www.youtube.com/embed/Fhdh3x5sCoE" />

### Nested flex

You can nest one flex inside another ;)

<media-youtube url="https://www.youtube.com/embed/8_F3VpzpOQo" />

### Download example scenes <media-file name="FlexExamples.via" /> and try.


