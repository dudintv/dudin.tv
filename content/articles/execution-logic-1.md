---
title:  "Execution Logic. Part 1"
description: "Creating custom logic for custom vizrt template."
date: 2017-11-12 12:00:00 +0300
tags: vcp vtw
---

> "Execution Logic" allows creating custom Pilot templates. It does not cancel scripts in Pilot templates for interface logic.

Previous to Execution Logic we were using implemented script block into Viz Template Wizard for sending custom commands to VizENgine. We used to use the "Live Update" option. It was generating a lot of problems. Every "Live Update" template was generating extra load on a computer. When you opened or run a bunch of templates it was turning into a big extra problem with computer memory and сonsequently interface latency. 

<media-image name="el-cover.png" />

"EL" allows put control logic to MSE as backend service. And it allows use several VizPilot safely because each Pilot does not control VizEngine directly anymore. Pilot sends commands to MSE, and MSE decides what to do.

EL is really different from ordinary programming languages like visual basic. EL is like traditional logic of scripting into XML form. Let's compare __how to create and fill a variable__:

|Visual Basic | Execution Logic|
|---|---|
|```Dim s As String = "xyz"``` | ```<def var="s">xyz</def>``` |

It's so unusual... isn't it? :)

From Pilot 5.7 knowing EL has become must-have if you would like to create custom templates. For the beginning we need to know only basic elements and debug instruments.

## Basic stuff of Execution Logic

There are three things you have to know:
1. how to create and use __variables__
2. how to __send commands to Engine__
3. how to get __data from template fields__ to put it into commands.

### 1. Variables. ```<var>``` or ```<ref>```

Creating and using typical variable:

```xml
<def var="s">xyz</def>
<var>s</var>
```

By ```<var>``` you get the value of the variable. 
Also, there is a list of ready useful system variables:

```xml
<var>channel</var>   <!-- name of current channel -->
<var>profile</var>   <!-- name of current profile -->
<var>element</var>   <!-- path to current data-element -->
<var>scene</var>     <!-- name of vizrt scene of current template -->
<var>viz_layer</var> <!-- scene layer of current template -->
```

And, if you want to get a part of VDOM tree use ```<ref>```:
```<ref>/custom_logic/take</ref>``` takes piece of VDOM tree contains custom logic of "take".

> ```<var>``` just returns value of variable. ```<ref>``` returns and integrates part of the tree.

#### Bonus variable: ```<time>```
There is a special variable. This is the current time by format — ```<time>%c</time>```

```xml
<log>Time: <time utc="yes">%H:%M:%S:%ff</time></log> <!-- Time: 12:00:00:00 -->
<log>Now: <time>%Y %m %d %H:%M:%S</time></log> <!-- Now: 2019 01 01 12:00:00 -->
```

List of all options you can find in MSE documentation.

### 2. Send commands to VizEngine

Useful in practice commands is ```<forked_exec>``` and ```<viz>```. ```<forked_exec>``` define the area where you can choose a channel of Pilot profile and send commands to this profile. And ```<viz>``` contains viz-command(s).

A simple example with two commands send to "LowerThird" channel:

```xml
<forked_exec>
	<entry name="execution_group">LowerThird</entry>
	<viz>RENDERER GET</viz>
	<viz>RENDERER SET_OBJECT </viz>
</forked_exec>
```

```<entry name="execution_group">``` defines profile within current ```<forked_exec>```. 

```<entry>``` often meets in VDOM, there is a name parameter which is important. ```name="execution_group"``` define "entry" with name of channel.

If you want to send commands to defined Program channel you can use system variable ```<var>channel</var```. And, you can write several commands into one ```<viz>``` tag divided by "new line":

```xml
<forked_exec>
	<entry name="execution_group"><var>channel</var></entry>
	<viz>
		RENDERER GET
		RENDERER SET_OBJECT
	</viz>
</forked_exec>
```

If you don't want to wait a response of command you can add the parameter "no_responce" ```<viz no_responce="yes">```. This command runs a little bit faster but you can get some bugs if you start using it with no reason. "no_responce" commands run not consistently! The second command don't wait finished first.

### 3. Get data from template

If you have TextEdit with ControlName parameter = "123" you can get the content by ```<ref>```:

```xml
<ref><var>element</var>/data/123</ref>
```

There is the system standard variable ```<var>element</var>```. This is the path to current data-element into VDOM XML. We dig to data by ```/data/123```. And we are getting content of this part VDOM XML by ```<ref>```.

There is a __full working example__:

```xml
<forked_exec>
	<entry name="execution_group"><var>channel</var></entry>
	<viz no_response="yes">GLOBAL*MAP SET_STRING_ELEMENT Surname <ref><var>element</var>/data/surname</ref></viz>
</forked_exec>
```
We've changed the global variable into the VizEngine which is in current Program channel in VizPilot ;)

## Debug Execution Logic

You can debug only by printing strings into consoles.

```<log><var>test</var></log>``` prints into MSE console. If you run MSE in console mode.<br/>
```<viz><var>test</var></viz>``` sends command to VizEngine console. I prefer this way because MSE have a lot of garbage outputs that bothers me.

### Update checking

Sometimes you need to be sure that new logic was updated in MSE.

1. Launch VizPilot and open playlist with the template for checking.
2. Enter ```http://localhost:8580/app/vdomconfig/vdomconfig.html``` in a browser. Where ```localhost``` is the MSE host.
3. Dig down to ```external/master_templates/#####```. Where ##### is number your template. Obviously you won't know it, just go through all of the existing elements.
4. Look ```commands``` section. There are all your actual EL commands. Just check it visually.

<media-image name="mse-master-templates.png" />


-------------------
<br/>

_This information is enough to begin. You have known how to control Engine by template data._<br/>
<br/>

-------------------
<br/>

In the next part you will know:

1. if-else branch
2. delayed commands
3. infinity cycles
