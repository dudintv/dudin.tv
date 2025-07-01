---
title: AE to Vizrt
description: Scripts for manual transferring animation from Adobe After Effects to Vizrt.
category: animation
path: dudin-animation/ae-to-vizrt
---

I know about the standard feature of Vizrt of importing \*.aep projects. But also, I know that it sometimes gives an ugly or inconvenient result. I've workaround this by manual scripts. Of course, the manual way isn't handy. But you get full control of what there happens!

There are three scripts.

- the First script is for storing (layer or camera) keyframe data from Adobe After Effects to \*.txt file.
- Two another are for re-store animation data from \*.txt to Vizrt scene:
  - for container
  - for a camera (free or targeting)

## Little theory

There are two types of Axis System Definition in the 3D world. They are called as "right-handed" and "left-handed".

<details>

<summary>How to discover side of axis?</summary>

Just look at your palms and count your fingers:

<ol>
<li>Thumb — X</li>
<li>Index — Y</li>
<li>Middle — Z</li>
</ol>

:media-image{name="axes-system-definition.png"}

</details>

There are several types of rotation orders. And, the type by default also is OK.

:media-image{name="vizrt-axes-order.png"}

Fortunately, AE and Vizrt have the same types of Axis System Definition — right-handed, and the same orders of rotation — XYZ! Nice! :)

My scripts are based on saving of coordinates from AE. So, you need to know:

- **screen center**: on top left corner in AE / at center in Vizrt
- **default camera look**: to positive direction in AE / to negative in Vizrt
- **default vertical camera angle**: 29.9 degree in AE / 45 degree in Vizrt
- **scale**: 100.0 AE = 1.0 Vizrt

## Algorithm to copy of animation from AE to Vizrt

> My scripts are very manual way to transfer animation, but it's convenient to control what exactly you want to transfer.

Firstly, open your composition in AE ;)

### 1. Select keyframes

Please, you can select all keyframes by mouse frame or just pick with shift key the first and the last one. It's the same for the script:

:media-image{name="ae-select-keyframes.png"}

_It can be regular layer and camera._

### 2. Run "ae-coords-extract-to-txt.jsx" script into AfterEffects

:media-image{name="ae-menu-run-script.png"}

You will take an alert message most likely:

:media-image{name="ae-script-alert.png"}

Just follow the instruction in the messages. Set on the checkbox in menu Preferences > General:

:media-image{name="ae-allow-scripts-to-write-files.png"}

Try again.

If you did it, next step is selecting the out path:

:media-image{name="ae-select-path.png"}

And accept the format. It's important to leave it as is for vizrt scripts.

:media-image{name="ae-select-format.png"}

You can check out the result, just open the txt-file:

:media-image{name="txt-format.png"}

Animation data is ready now!

### 3. Import animation to vizrt scene

Drop an import script to a container — either for layer or for the camera. "Compile & run" it.

1. Click on "Create sub-containers". _(only for the first time)_
2. Select file with data. Write the name of the layer. _(only for the first try or if the filename was changed)_
3. Push "Import animation" on the script.

:media-image{name="vizrt-ui-layer-script.png"}

#### More about container animation

There must be one additional sub-container "xxx_rotation" because you can use orientation and rotation in AE at the same time. It's important for 3D composition where you can rotate by two channels (rotation and orientation).

:media-image{name="vizrt-layer-tree.png"}

#### More about camera animation

We can't animation vizrt-camera with a target. Thus, the script animate two sub-containers and you have to manually link them to your camera.

:media-image{name="vizrt-cam-tree.png"}

### 4a. Either setting up vizrt STATIC camera ...

> If you don't have any camera in AE composition, you have to create one for synchronizing field of view between AE and Vizrt.

As you could see, the objects move in the wrong directions. It is happening because (1) a camera in AE have another direction and (2) the zero points located in the top left corner. Let's correct it!

- You have to rotate the camera or root-container 180 degrees on the X-axis:

:media-image{name="camera-rotation.png"}

- Consider the angle of view. AE vertical angle of the camera is the "Zoom" of "Lens" in vizrt scene.

Set "Measure film size" to the "Vertically" and copy the "Angle of view".

:media-image{name="ae-camera-settings.png"}

Paste the value to the "Zoom" in your scene:

:media-image{name="vizrt-camera-settings.png"}

### 4b. ... or import camera animation to vizrt scene

You can use one of two camera types — one-node and two-node. One-node is a kind of "free camera". Two-node is a camera with target point. Target ("Point of Interest") is added as an extra parameter in a layer:

:media-image{name="ae-type-cam.png"}

When you import animation you have to consider the camera type.

For **one-node camera** you enough have only one container and just drop it into both tracking dropzones:

:media-image{name="vizrt-one-node-cam.png"}

For **two-node camera** you have to create two sub-containers (just click the button in the script) and set up camera like this:

:media-image{name="vizrt-two-node-cam.png"}

Don't forget to set **Twist** to 180 before set "Direction tracking"!

### 5. Rotate containers

Rotate your objects as you need — face sides to the camera. Most likely it would be 180 degrees on the X-axis. _It's need because in vizrt object is created with face to another direction in the space compared with AE._

### Example

:media-file{name="ae-to-vizrt-test-cc2019.aep"}

:br

:media-file{name="ae-to-vizrt-test.via"}

<!-- Download AE file [ae-to-vizrt-test-cc2019.aep](/images/scripts/ae-to-vizrt/ae-to-vizrt-test-cc2019.aep "download") -->

<!-- Download Vizrt scene [ae-to-vizrt-test.via](/images/scripts/ae-to-vizrt/ae-to-vizrt-test.via "download") -->
