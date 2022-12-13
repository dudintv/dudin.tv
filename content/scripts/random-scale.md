---
title: Random scale
description: Provide smoothly random container scaling. Better than “heartbeat” plugin.
category: transformation
path: dudin-transform/dudin-random-scale
file: dudin-random-scale.vb
---

::interface-description{image="random-scale-interface.png"}

### Interface description

**Base scale** is like a middle scaling.

**Scale amplitude %** defines min and max possible scale by multiplying on **Base scale**

**Speed** — how fast it will be animated. I recommend starting from "100".

**Pause (sec)** defines the amount of time without animation when scaling reach its local maximum or minimum.

**Pause random %** defines a random variety of pause time based on **Pause (sec)** value.

::
