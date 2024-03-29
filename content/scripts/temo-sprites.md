---
title: Sprites (Temo for Viz4)
description: Analogue of original Vizrt Temo plugin, only for Viz4 fusion material. Work as a traditional sprites pleer.
category: texture
path: dudin-texture/dudin-temo-sprite
file: dudin-temo-sprite.vb
viz4: true
---

::interface-description{image="viz4-index.png"}

### Interface description

**Viz version** allows you to choose what is changed by this script. **Viz 3** change legacy texture plugin. **Viz 4** change texture params into fusion material.

**Numbers of tiles (vertical and horizontal)** cuts the image as much as it has frames accordingly.

**Selection mode** gives classic **number** mode where you change the index of the frame, **name** where you can name each cell and show by name, without index.

**Main axis** works only with **number** mode. It changes the direction of the calculation order. "X" is the classic one.

**Show tile number** works only with **number** mode. It is a cell selector.

**Crop X / Crop Y** define how much we cut each cell in the percentage of the size.

**Lock crop** allows you conveniently change crop X and Y by one number.

::

I've created this script as an analogue of original Vizrt build-in plugin "Temo". But only for Viz4 fusion material. It implements the classic "sprite" technique for graphics engines.

Disclaimer:
This script changes texture scaling and position via "SendCommand" function. I know that it isn't a good way, but for the current VizArtist 4.2 version, it's a single option to do this, unfortunately. If Vizrt developers will allow changing these parameters via normal script object — I'll upgrade my script this accordingly.

I did not repeat only the standard behavior of Temo. Also, I implement a few my improving ideas:

1. Now, you can change "main axis". For some sprite images it's more convenient to count cells from top to bottom, and only after that count from left to right. <br><br>
   Example, where the main axis is "Y":
   :media-image{name="names_example_2x8.png"}

2. I added the ability to name every single cell. So, you can use scripts much more flexible way. Forget about indexes, now you can use names! <br><br>
   For example, you can add a new cell (change image) in your pictures without problem with rebuilding indexes — just add a new row and name them. You can send an obvious name an instead strange number from Pilot/Trio template. For another example — create sprite images with social networks and set it by name. And now, you can send "facebook" instead strange "2" (or "1", or "5", ...). <br><br>
   This "name" approach allows you: a) reduce your scene tree, use only one container instead Omo plugin with a many sub-containers, and it's easier to handle one single material; b) manage your icons set more convenient way, all frames will be on one screen; c) have a nice debug helper for Pilot template and for VizEngine console.
   :media-image{name="smiles_sprites_4x2.png"}
   :media-image{name="name-mode.png"}

3. I added cropping ;) Now, you can leave a grid on the image, and just crop it in your scene. Also, you can add a title for each "frame" for convenient using. Take a look at my example with weather icons. <br><br>
   For example:
   :media-image{name="weather_4x3_with_titles.png"}

After adding these improvements I decided to make "Viz 3" mode :)

::interface-description{image="viz3-name.png"}

### "Name" mode

Here you find two different fields.

**Names** allow you to give names to all cells. Rows are separated by "new line". Columns are separated by "|" char.

**Show name** is a cell selector. Like "Show tile number" but only by a string.

::
