---
title: Bg (advanced)
description: Alternative to original TextBg. Change size without changing position. Works with childs.
category: link
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-bg/
file: bg.vb
---

### Why I decided to make my own "TextBg" analogue?

The first reason was my desire to control the left side corner of the bg rectangle in order to provide a sharp and stable edge for my idea of design. It was not possible to achieve with original TextBg plugin.

After that, I was wondering to improve this script to watch the maximum size of children which could be in a different position and TextBg provides bg only for common size. I was needed in independent measurement.

<interface-description image="bg-interface.png">

### Interface description

__Source container__ works like in original TextBg. It defines the source of the size.

__How to change bg size__ allow you to choose the way to change visible size. By transformation scaling or geometry settings ("width" and "height").

Choose this script __Get size from__ 1) source container 2) maximum of children or 3) child by index

You can define multiplication and padding for each axis separately by __Mult X/Y/Z__ and __Add X/Y/Z__.

Also, you can setup minimum size for each axis by __Min BG X/Y/Z-axis mode__. You can define min by number value or by the specific container.

Set __Hide bg if source coutainer__ if you want to hide container if its size very small. You can define this threshold value by __Zero-size of source container__.

One of the main advantages is the animated transition. You can control __Animation inersion__. Value "1" disable all animation, but value "10" gives you very slow insertion effect.

By default, positioning is disabled, unlike in original TextBg. It allows you to control the position of bg. But if you want you can turn on __Autofollow by X/Y axis__ with some __X/Y shift__

</interface-description>
