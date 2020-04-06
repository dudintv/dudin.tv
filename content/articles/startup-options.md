---
title: "VizArtist startup options"
description: "To run several VizArtist instances with different configs, or automatically load particular scene when VizEngine is started, you need this options."
date: 2019-01-15 12:00:00 +0300
tags: artist vtw
---

> If you want to have several configs of VizArtist, or automatically load particular scene when VizEngine is loaded, startup options can help you.

## How to set up startup option

1. Right mouse click on a shrotcut of the Artist / Engine / TemplateWizard (VTW)
2. Find "object" string field
3. Check out the format. It must be ```"<path to engine>" <startup options #1> <startup options #2>```. Every option separates by space. For example: <br/> ```"C:\Program Files\Vizrt\Viz3\viz.exe" -u1 -y```
4. Add your option through space. _Or delete existing one._ For example: <br/> ```"C:\Program Files\Vizrt\Viz3\viz.exe" -u1 -y  -g videowall.cfg```

Every one option starts with minus sign "-". If the option have a parameter, it writes after the option definition through space.

## VizArtist / VizEngine

### Load VizEngine with another config

This is the most popular option.

```-g <relative or full path to config>``` — start VizArtist / VizEngine with particular config.

For example, ```-g other.cfg```.

### Load VizEngine with particular scene

```-o <full path to the scene>``` — automatically load and start particular scene just after loading VizEngine. If you add this option to VizArtist shortcut its turn out the VizEngine.

For example, ```-o SCENE*Dudin/Test/MaxSize``` or ```-o Dudin/Test/MaxSize```

### Full list

Option | Description
-- | --
```-c``` | Start as Config mode.
```-C``` | Start without console.
```-db ...``` | Specify the Graphic Hub. Format is _user:pw@server/name-server:port_. <br/> Example: ```-db Guest:@VizDbServer/localhost:19396```.
```-g <config file>``` | Start with another Viz Config file.
```-i``` | Enable pre-initialization of textures. Textures are generated on the graphics card immediately after loading an image.
```-l``` | Specify a console title to distinguish Viz Engines in a Dual Channel setup. Example: ```-l <title>```.
```-n``` | Start in Viz Engine mode.
```-o <scene>``` or ```-o <layer> <scene>``` | Autoloading the scene after VizEngine start. ```<layer>``` accepts values: 0 - back layer, 1 - middle layer, 2 - front layer. <br/> Example: ```-o 1 Dudin/Test/Background```.
```-P``` | Disable automatic mouse capture.
```-t``` | Non-interactive mode.
```-T``` | Console is always on top.
```-u1```, ```-u2```, ```-u3``` (up to 24) | Specify GPU1 (-u1), etc... For system with several graphic cards.
```-v <argument>``` | Verbose mode. Argument is a composite bytes integer of: 1 - produce verbose output to console, 2 - add a timestamp, 4 - log OpenGL, 16 - log 2d-texture messages, 32 - log Graphic Hub releated debug messages, 64 - log medium and high GL warnings
```-w``` | Engine mode and show render window (videowall mode).
```-W``` | Disable restart on crash.
```-x``` | Without GUI.
```-X``` | Write extended dump file (full memory dump) in case of a program crash.
```-y``` | Start in Artist mode.

_Please look in the documentation of VizEngine in "5.4 Viz Command Line Options"._

## Template Wizard

```-duplicates``` — for using multiple copies TVW at the same time on the one computer. Example: 
```"C:\Program Files (x86)\Vizrt\Viz Pilot 8.2\VizTemplateWizard.exe" -duplicates```

```-mse <host>``` — specify the MSE

```-db <connect string>``` — specify the database

```-inifile <path>``` — specify the path of ini-file

_Please look in the documentation of VizPilot in "9.3.2 To specify command line parameters for Template Wizard"._
