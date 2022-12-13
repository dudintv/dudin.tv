---
title: "Useful console commands"
description: "For animation and control parameter"
date: 2021-12-21 12:00:00 +0300
tags: artist
---

## Animations

> Use them in action channel in the director

Start the same director (e.g. make a loop):

`THIS_DIRECTOR START`

Start another director:

`THIS_SCENE*STAGE*DIRECTOR*Name START`
(replace **"Name"** with the name of the director)

There is not only "START" command. The full list:

```
START
CONTINUE
STOP

```

`SHOW 0` to show the first frame, instead of "0" you can put any value in seconds OR name of the tag with "$".

For example: `SHOW $tagname`

```
START REVERSE
CONTINUE REVERSE
```

## Control parameter

> Use them in the "control parameter" plugin to expose any parameter on the container

```r
TRANSFORMATION*POSITION*X
TRANSFORMATION*ROTATION*Y
TRANSFORMATION*SCALING*Z
```

Change the axis as you need: X, Y, Z
