---
title: Array to lines
description: Script for aesthetic arrangements of containers in lines
category: transformation
path: dudin-transform/dudin-arrange/dudin-arrange-lines
file: dudin-arrange-lines.vb
---

::interface-description(image="arrange-line-ui.png")

### Interface description

**Max count in line** defines the maximum count of items in each line. Less is possible, more is not.

**Distance X** and **Distance Y** define a distance between centres of items by X and Y-axis.

**Randomize** helps to add randomly to items position and make a more lifelike composition.

**Sort** allows you to auto-sort appearing elements. "By tree" takes standard order just exactly as in scene tree. "By name" sorts by name of item names. And, "By text" sorts by the text of certain containers inside each item, for that, you should specify the name of those containers in **Text container path** param. Of course, you can **Reverse** the order of sorting.

::

The script works like a built-in "Grid" plugin. Unlike Grid, this script useful for real composition with uncertain count items, which have to be nicely aligned in several lines.

:media-image(name="arrange-line-cover.png")

The script takes maximum count items in one line and aligns all items with avoiding non-aesthetic situations. For example, the "widow" item is not good, so this script reduces average count items in a line to avoid "widow" container.

If you can have from 4 to 7 items on the screen, but you can put in a line 4 items maximum — how do you arrange them as a human?

- 4 items in one line (easy)
- 5 items in two lines as 3 + 2 _(not as 4 + 1 !)_
- 6 items on two lines as 3 + 3 _(not as 4 + 2 !)_
- 7 items, anyway, as 4 + 3

Look an example with 10 maximum in a line:

:media-youtube(url="https://www.youtube.com/embed/wLey8TXrpT8")

Also, you can choose the source of order! And inverse. The most interesting option maybe "by text" — the script looks into each child for a particular container, takes numbers from texts and use them to compare.

Nice to combine with Omo plugin! ;)

_Note: This script doesn't consider bounding boxes of a container, there is only containers arrangement by values of offsets._

For flexible single line layout, I recommend using another my script [Flex](/scripts/flex-box/)
