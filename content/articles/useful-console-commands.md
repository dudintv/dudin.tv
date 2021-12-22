---
title:  "Useful console commands"
description: "xxx"
date:   2021-12-21 12:00:00 +0300
tags: artist
---

## Animations

> Use them in action channel in the director

Start the same director (e.g. make a loop):

``` THIS_DRECTOR START ```

Start another director:

``` THIS_SCENE*STAGE*DIRECTOR*Name START ```
(replace __"Name"__ with the name of the director)

There is not only "START" command. The full list:

```
START
CONTINUE
STOP

START REVERSE
CONTINUE REVERSE
```

## Control parameter

> Use them in the "control parameter" plugin to expose any parameter on the container

```
TRANSFORMATION*POSITION*X
TRANSFORMATION*ROTATION*Y
TRANSFORMATION*SCALING*Z
```

Change the axis as you need: X, Y, Z
