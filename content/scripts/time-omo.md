---
title: Time omo
description: Works like regular Omo plugin. But it switches by the current time. You can define many periods.
category: logic
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-omo/dudin-omo-bytime/
file: dudin-omo-bytime.vb
---

You can change the count of periods! Just change this variable:

```
Dim count_time_periods As Integer = 3
```


<interface-description image="time-omo-interface.png">

### Interface description

Each __Perion begin__ define only begin. The end of the period is defined by the beginning of the next period.

One period could across 00:00 timestamp. For example, if a period has start time at 22:00 and the next period has 08:00 — so, the first period will be working from 22:00 to 08:00. Another words, 22:00...24:00 + 00:00...08:00

</interface-description>

This script works like the vizrt original Omo plugin but only turns active states of child containers by the current system time.

You can use this script, for examples, to organize:

1. "Light/Dark" themes in your graphics

2. theme swither if you have a stable schedule

