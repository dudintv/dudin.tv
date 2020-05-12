---
title: "Jumping scene for seamless graphic"
description: "Jumping scene useful for unpredictable seamless graphic flow."
date: 2018-10-10 12:00:00 +0300
tags: artist vcp
---

> Jumping scene useful for unpredictable seamless graphic flow.

This mechanism based on 1) convention of directors names, 2) duration of Takeout director, 3) duplicating scenes and 4) moving scenes from front to middle layer (I call it "jump off").

The idea of "jumping scenes" is loading scenes into the front layer and after 1.5 seconds jumping off to middle layer. In the beginning front scene starts "Take" director and the middle scene play "Takeout" director simultaneously. We get unique transition effects — old scene pleasantly goes away when a new scene appears. Each scene has custom unique animations of appearing and disappearing.

You have to think only about the duration of disappearing. It must be less than some conventional seconds. I recommend 1.5 seconds for the most real projects.

## Preview

I made 0.5 sec for the preview. Take a look how it works (no sound ;)):

<media-youtube url="https://www.youtube.com/embed/fEwqgMe_xX8" />

There are three different design slides in different styles. Note how they correctly combine while transition. Especially how combines the same style slides.

## Why I don't use Transition Logic

1. I want every new graphic must appears on the front.
2. Universality. I can smoothly appear new graphics on top of any scene;)

## How to cook jumping scene

1. Create Take and Takeout as independent directors. Make sure that Takeout animation is less than 1.5 seconds.
2. Create an action channel in Take director. Name it like "jump".
3. Create two action keys at 0 and 1.5 seconds with commands:

```r
#1 at 0 sec:
RENDERER*STAGE*DIRECTOR*Takeout CONTINUE;
THIS_SCENE*STAGE*DIRECTOR*Takeout SHOW 0;
```

Why I start and stop one director? :) This hacking give me 1) convenience to play Take in Artist and 2) automatically takeout another scene in Engine mode and reset Takeout director in the self scene.

```r
#2 at 1.5 sec:
RENDERER SET_OBJECT THIS_SCENE;
RENDERER*FRONT_LAYER SET_OBJECT ;
```

These commands make the "jump" effect. It creates copy to middle layer (push out the previous scene) and erase itself from the front layer. 
Done.

<media-image name="jumping-scene-stage-take-action-keys.png" />

## Prepare VCP template

Next, you need to create vcp template for this scene. We start as usual, create a new template by Wizard in Template Wizard. Make interface as you want. And we have to use "execution logic" for our custom commands.

Only three commands:
1. Load scene (or copy) to the front layer.
2. Load controls values into the scene.
3. Start the Take director.

------------

```r
SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1
RENDERER*FRONT_LAYER*TREE*$object*FUNCTION*ControlObject*in SET ON 1 SET 111\02 SET 222\03 SET 333
RENDERER*FRONT_LAYER*STAGE*DIRECTOR*Take START
```

If you are familiar with Execution Logic you understand what to do with these commands. If not I can recommend you head to documentation but I know they're not so good for understanding. I will prepare a lesson about "EL"... <!-- [TODO: need lesson about Execution Logic] -->

Now you just can copy the commands to "take" section in EL. Of course with changing paths and content for ControlObject. Extra:

* "\0" — this is one separation symbol. We have to use it to separate several data contents. Control ids are "1", "2" and "3" in my example.
* You need insert control data from the template. It's ```<ref><var>element</var>/data/1</ref>``` for element with parameter ControlObjectName = "1".

Full EL script for my example:

```xml
<forked_exec>
	<entry name="execution_group"><var>channel</var></entry>
	<viz>
		SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1
		RENDERER*FRONT_LAYER*TREE*$object*FUNCTION*ControlObject*in SET ON 1 SET <ref><var>element</var>/data/1</ref>\02 SET <ref><var>element</var>/data/2</ref>\03 SET <ref><var>element</var>/data/3</ref>
		RENDERER*FRONT_LAYER*STAGE*DIRECTOR*Take START
	</viz>
</forked_exec>
```

## Smart loading script for VizEngine

As you can see I use some script trick instead of command to load the scene directly.

```r
SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1
```
<!-- 
I have prepared a script for smart loading. This script looking for free scene into the engine pool. If it have found it's good. If it didn't — load or create copy of the scene. At the exit script loading free copy of scene in front layer. -->

<!-- [Jumping scene script](/scripts/jumping-scene) -->

<!-- You need copy this script to scene script in new scene. Save the scene to some common folder for store cross-projects items. For example I saved it as _COMMON/SCRIPTS/LoadJumpScene_. -->

## Known Issue

Main disadvantage "jumping" scene is the busy front layer. You can use the back layer for background. But you can't use the front layer.
