---
title: Advanced Bg
description: Alternative to original TextBg. Change size without changing position. Works with childs and by path.
category: link
path: dudin-bg
file: bg.vb
---

## How to use it with Transition Logic

:media-youtube{url="https://youtu.be/gh1Z9nhNCzc"}

## Cases of using the script

:media-youtube{url="https://youtu.be/O_nMY7hD3CU"}

### Why I decided to make my own "TextBg" analogue?

The first reason was my desire to control the left side corner of the bg rectangle in order to provide a sharp and stable edge for my idea of design. It was not possible to achieve with original TextBg plugin.

After that, I was wondering to improve this script to watch the maximum size of children which could be in a different position and TextBg provides bg only for common size. I was needed in independent measurement.

::interface-description{image="bg-interface.png"}

### Interface description

**Source container** works like in original TextBg. It defines the source of the size.

**How to change bg size** allow you to choose the way to change visible size. By transformation scaling or geometry settings ("width" and "height").

Choose this script **Get size from** 1) source container 2) maximum of children or 3) child by index or 4) child by index + path

You can define multiplication and padding for each axis separately by **Mult X/Y/Z** and **Add X/Y/Z**.

Also, you can setup minimum size for each axis by **Min BG X/Y/Z-axis mode**. You can define min by number value or by the specific container.

Set **Hide bg if source container** if you want to hide container if its size very small. You can define this threshold value by **Zero-size of source container**.

One of the main advantages is the animated transition. You can control **Animation inertia**. Value "1" disable all animation, but value "10" gives you very slow insertion effect.

By default, positioning is disabled, unlike in original TextBg. It allows you to control the position of bg. But if you want you can turn on **Autofollow by X/Y axis** with some **X/Y shift**

::
