---
title: Time Omo
description: Works like regular Omo plugin. But it switches by the current time. You can define many periods.
category: logic
path: dudin-omo/dudin-omo-bytime
file: dudin-omo-bytime.vb
---

You can change the count of periods! Just change this variable:

```
Dim count_time_periods As Integer = 3
```

::interface-description{image="time-omo-interface.png"}

### Interface description

Each **Period begin** defines only begin. The end of the period is defined by the beginning of the next period.

One period could be across 00:00 timestamp. For example, if a period has a start time at 22:00 and the next period has 08:00 — so, the first period will be working from 22:00 to 08:00. Another word, 22:00...24:00 + 00:00...08:00

::

This script works like the vizrt original Omo plugin but only turns active states of child containers by the current system time.

You can use this script, for example, to organize:

1. "Light/Dark" themes in your graphics

2. theme switcher if you have a stable schedule
