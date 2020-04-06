---
title: "Jumping scene for seamless graphic"
description: "Jumping scene useful for unpredictable seamless graphic flow."
date: 2018-10-10 12:00:00 +0300
tags: artist vcp
---

> Jumping scene useful for unpredictable seamless graphic flow.

This mechanism based on 1) convention of directors names, 2) duration of Takeout director, 3) duplicating scenes and 4) moving scenes from front to middle layer (I calling it "jump off").

Idea of "jumping scenes" is loading scenes into front layer and after 1.5 second jumping off to middle layer. In the begining front scene starts "Take" director and the middle scene play "Takeout" director simultaneously. We get unique transition effects — old scene pleasantly go away when new scene appears. Each scene have custom unique animations of appearing and disappearing.

You have to think only about duration of diappearing. It must be less then some conventional seconds. I recommend 1.5 seconds for the most real projects.

## Preview

I made 0.5 sec for the preview. Take a look how it works (no sound ;)):

<iframe width="560" height="315" src="https://www.youtube.com/embed/fEwqgMe_xX8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

There are three different design slides in different styles. Note how them correctly combines while transition. Especially how combines the same style slides.

## Why I don't use Transition Logic

1. I want every new graphic must appears on the front.
2. Universality. I can smoothly appear new graphic on top of any scene;)

## How to cook jumping scene

1. Create Take and Takeout as independent directors. Make sure that Takeout animation less than 1.5 second.
2. Create action channel in Take director. Name it like "jump".
3. Create two action keys at 0 and 1.5 second with commands:

```r
#1 at 0 sec:
RENDERER*STAGE*DIRECTOR*Takeout CONTINUE;
THIS_SCENE*STAGE*DIRECTOR*Takeout SHOW 0;
```

Why I start and stop one director? :) This hacking give me 1) convenience to play Take in Artist and 2) automatically takeout other scene in Engine mode and reset Takeout director in self scene.

```r
#2 at 1.5 sec:
RENDERER SET_OBJECT THIS_SCENE;
RENDERER*FRONT_LAYER SET_OBJECT ;
```

This commands make "jump" effect. It's create copy to middle layer (push out previous scene)
 and erase itself from front layer. 
Done.

<media-image name="jumping-scene-stage-take-action-keys.png" />

## Prepare VCP template

Next, you need create vcp template for this scene. We start as usually, create new template by Wizard in Template Wizard. Make interface as you want. And we have to using "execution logic" for our custom commands.

Only three commands:
1. Load scene (or copy) to the front layer.
2. Load controls values into scene.
3. Start Take director.

------------

```r
SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1
RENDERER*FRONT_LAYER*TREE*$object*FUNCTION*ControlObject*in SET ON 1 SET 111\02 SET 222\03 SET 333
RENDERER*FRONT_LAYER*STAGE*DIRECTOR*Take START
```

If you familiar with Execution Logic you understand what to do with this commands. If not I can recommend you head to documentation but I know there not so good for understanding. I will prepare lesson about "EL"... <!-- [TODO: need lesson about Execution Logic] -->

Now you just can copy the commands to "take" section in EL. Of course with changing paths and content for ControlObject. Extra:

* "\0" — this is one separation symbol. We have to use it for separate several data contents. Control ids are "1", "2" and "3" in my example.
* You need insert control data from template. It's ```<ref><var>element</var>/data/1</ref>``` for element with parameter ControlObjectName = "1".

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

As you can see I use some script trick instead of command to load scene directly.

```r
SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1
```

I have prepared a script for smart loading. This script looking for free scene into the engine pool. If it have found it's good. If it didn't — load or create copy of the scene. At the exit script loading free copy of scene in front layer.

<details><summary>Expand script</summary>
{% include script-home-page.html path="vizrt/vizartist-script/src/master/dudin-jumping-scene" scriptname="jumping-scene.vb" %}
</details>

You need copy this script to scene script in new scene. Save the scene to some common folder for store cross-projects items. For example I saved it as _COMMON/SCRIPTS/LoadJumpScene_.

## Known Issue

Main disadvantage "jumping" scenes is front layer busy. You can use back layer for background. If you want to add some "front" graphics — you can't.
