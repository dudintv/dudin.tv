---
title: Page Scroll
description: Scrolling content within a gabarit. Like webpage in browser window.
category: transformation
path: dudin-autoscroll
file: autoscroll.vb
---

::interface-description{image="pagescroll-ui.png"}

### Interface description

The script uses the bounding box from **Gabarit container** to build "screen" area.

**X padding** and **Y padding** gives you a handle to control gaps between area and content.

**Min scale** and **Max scale** control max and min possible scaling of content.

You can animate **Scroll percent** from 0% to 100% to scroll content within the area. This parameter is considered only with "By percent" option in the next parameters.

**If height less than gabarit** defines the behavior when the scaled content height is less than (height area - Y padding). You can stick the content to the "top", "center" or "Bottom". Or, you can allow considering the **Scroll percent** parameter.

**If height is greater than gabarit** almost the same as the previous param. But it defines the behavior when the content height is more.

_The main scenario is using "Center" + "By Percent". It means if the content is small it will be placed at the center. And, if the content is large it will be scrolled._

You can automatize creating animation keyframes! Just define the start keyframe by **Scroll begin** and finish keyframe which is shifted relative on the first by **Scroll duration**. And, click on **Create animation keyframes** to create them in the current director. Also, you can **Invert keyframe position** in the stage to make reversed animation.

**Inertion** make reaction on changing of the position more physically looks like.

::

This script for you if you need to scroll content with unpredictable size within a screen. Target case is using in quote full-frame graphics.

There are:

- padding inside-outside
- separate logic for small and large content. You can center small content and scroll large content
- creating scroll keyframes by hand or by action key
- setup _start_ and _duration_ by parameter. Convenient when you want to control duration from vcp-template

Animation from "0" to "100" and changing size of background:

:media-youtube{url="https://youtu.be/dCnMv6wVTK4"}

Apply WindowMask or TargetMask on content to make "window" effect.
