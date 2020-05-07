---
title: Array to lines
description: Script for arrange containers in lines
category: position
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-transform/dudin-arrange/dudin-arrange-lines/
file: dudin-arrange-lines.vb
---

<interface-description image="arrange-line-ui.png">

### Interface description

__Max count in line__ define the maximum count of items in each line. Less is possible, more is not.

__Distance X__ and __Distance Y__ define distance between centers of items by X and Y axis.

__Randomize__ helps to add randomly to items position and make more life like composition.

__Sort__ allows you to auto sort apearing elements. "By tree" takes standart order just exactly as in scene tree. "By name" sorts by name of item names. And, "By text" sorts by text of certain containers inside each items, for that you should specify name of that containers in __Text container path__ param. Of cource, you can __Reverse__ the order of sorting.

</interface-description>

The script works like a built-in "Grid" plugin. Unlike Grid, this script useful for real composition with uncertain count items, which have to be nicely aligned in several lines.

<media-image name="arrange-line-cover.png" />

The script takes maximum count items in one line and aligns all items with avoiding non-aesthetic situations. For example, the "widow" item is not good, so this script reduces average count items in a line to avoid "widow" container.

If you can have from 4 to 7 items on the screen, but you can put in line 4 items maximum — how do you arrange them as a human?

* 4 items in one line (easy)
* 5 items in two lines as 3 + 2 _(not as 4 + 1 !)_
* 6 items on two lines as 3 + 3 _(not as 4 + 2 !)_
* 7 items, anyway, as 4 + 3

Look an example with 10 maximum in a line:

<media-youtube url="https://www.youtube.com/embed/wLey8TXrpT8" />

Also, you can choose the source of order! And inverse. The most interesting option may be "by text" — the script looks into each child for a particular container, takes numbers from texts and use them to compare.

Nice to combine with Omo plugin! ;)

_Note: This script doesn't consider gabarits of a container, there is only containers arrangement by values of offsets._

For flexible single line layout I recommend using another my script [Flex](/scripts/vizartist/flex/)
