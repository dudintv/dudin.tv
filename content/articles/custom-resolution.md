---
title:  "Custom resolution and aspect in Vizrt"
description: "How setup VizEngine to working with uncommon screen proportions and resolution, for example, for videowall."
date:   2013-06-06 12:00:00 +0300
tags: artist
---

One of the common cases of using vizrt is videowall. Often the outputs have non-standart proportion. Videowall in TV studio is a custom product constructed from several panels or blocks. So if you need to create a graphic for videowall you have to organize the workflow of creating graphic templates.

The main parameter of proportion in vizrt is "Aspect". For example 16:9 = 1.777(7)

For example composite videowall with 6 standard 16:9 panels, three columns and two rows.

16:9 | 16:9 | 16:9
16:9 | 16:9 | 16:9

Total aspect is (16\*3):(9\*2) = 48:18 = 2.666(6)

<media-image name="custom-resolution-in-studio.png" />

## Seting up custom aspect

For convenient workflow you have to change the setting:

<media-image name="custom-resolution-config-output-format.png" />

If you are creating not only one format you can copy config and shortcut for launching Artist with different config.

<media-image name="custom-resolution-config-copy.png" />

Creating scene in new config Artist:

<media-image name="custom-resolution-vizartist-create-scene.png" />

## Using custom scene with standard license Engine

In onair we use standart VizEngine and VizTrio for videowall:

<media-image name="custom-resolution-in-viztrio.png" />
<media-image name="custom-resolution-in-vizengine.png" />

These Engines are configured with standard aspect 1.777(7) because of 16:9. Our scene doesn't work properly if scenes have set "Camera Aspect = Config." We must change aspect in the scene to "User" with a certain number.

<media-image name="custom-resolution-in-scene.png" />

This scene setting overrides config.
