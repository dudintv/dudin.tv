---
title: Autoscroll
description: Scrolling content within a gabarit. Like webpage in browser window.
category: position
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-autoscroll/
file: autoscroll.vb
---

<interface-description image="autoscroll-ui.png">

### Interface description

The script uses bounding box from __Gabarit container__ to build "screen" area.

__X padding__ and __Y padding__ gives you handle to control gaps between gabarit and content.

__Min scale__ and __Max scale__ control max and min possible scaling of content. 

You can animate __Scroll percent__ from 0% to 100% to scroll content within gabarit. This parameter is considered only with "By percent" option in next parameters.

__If height less than gabarit__ define the behavior when scaled content height is less than height gabarit minus Y padding. You can stick the content to the "top", "center" or "Bottom". Or, you can allow concider the __Scroll percent__ parameter.

__If height greater than gabarit__ almost the same as previous param. But it define the behavior when the content height is more.

_The main scenario is use "Center" + "By Percent". It means if content is small it will be placed at the center. And, if content is large it will be scrolled._

You can automize creating animation keyframes! Just define the start keyframe by __Scroll begin__ and finish keyframe which is shifted relative on the first by __Scroll duration__. And, click on __Create animation keyframes__ to create them in the current drector. Also, you can __Invert keyframe position__ in the stage to make reversed animation.

__Inertion__ make reaction on changing of the position more physically looks like.

</interface-description>

This script for you if you need to scroll content with unpredictable size within screen. Target case is using in quote full frame graphics.

There are:
* padding inside-outside
* separate logic for small and large content. You can center small content and scroll large content
* creating scroll keyframes by hand or by action key
* setup start and duration by parameter. Convinient when you want to control duration from vcp-template

Animation from "0" to "100" and changing size of gabarits:

<media-youtube url="https://www.youtube.com/embed/IH3uij2rtTs" />

Just add the WindowMask to content and you got pretty result.
