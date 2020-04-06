---
title: "Vizrt script. Part 1"
description: "To get non-existed functionality or remake existing with new options. Significantly speed up your work, including creating complex structures, keyframes, etc"
date: 2019-01-04 12:00:00 +0300
tags: artist
---

Why do we need scripts in VizArtist?
All the more so we have got a lot of ready plugins.

> I like scripting because it enables to get non-existed functionality or remake existing with new options. You can significantly speed up your work, including creating complex structures, keyframes, etc. You can automize processes of getting and processing of data within a scene. Also you can import coordinates of camera and objects from AE. The right way to create interactive elements is to use a script.

Script is a typical program. The only difference is in the level of abstraction. In classical languages we operate with primitive data type like link, number, character. In scripts it's more convenient — high level objects are already existing for use. For example, in vizrt-scripts we work with containers and plugins, scenes and the engine. It's enough to assign a new position for camera to make it to go over with natural consequences like view change.

Script is like a program. It works as an automate taking input data and giving result during a process. Input data can be anything like current container, position, mouse click or button pushing... A result is also anything like changing of a parameter, creating or deleting anything. _Of course, script can return nothing. But why would we write it?_

Learning any programming language contains three components:

1. Form of data storage — variables, arrays, objects
2. Logical constructions — branches, loops, functions
3. Syntax — rules of code writing so that compiler understands it ([Wikipedia](https://en.wikipedia.org/wiki/Compiler){:target="_blank"})

Data storage form and logical constructions are common for most of programming languages. They have difference only in syntax. It's easy to learn during working because any mistakes are marked automatically by compiler.

_If you are newbie in programming I strongly recommend you to watch a free online cource ["CS 50" from Harvard](https://www.youtube.com/playlist?list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH){:target="_blank"}. The main idea you should endure is that the computer does exactly what you tell to do. Without auto thinking out, without auto assumptions, without auto finishing! You are fully responsible for what script does. In best case computer will only promt the line where is most likely an error._

Good news! There are only 7 concepts that need to be remembered and understood for the beginning. All the rest is a combination of them and syntactic features.

1. Variable
2. Branches (if else)
3. Array
4. Loop
5. Function
6. Object
7. Callback function

<br/>

## 1. Variable

The basic entity of programming. Variable is a link to certain area of data. You can get by the name of a variable: a simple number, a text string, an array values or object (about arrays and objects a bit later)...

Side of variable location around "=" is important. Example: ```x = y + z```. If it located on the right from "=" (```y``` and ```z```), it converted into the values. If it located on the left from "=" (```x```), it used for storing new value.

Typical expression contains a left side variable, "=" sign and right side of expression. Compiler first calculates value in the right side, then put the value to the left side variable. This is the reason why the left part can contains only one variable — it must be a place for data storing. But in the right part of expression can contains any expression.
```vb
angle = 360
new_angle = angle + 10
```
_The variable **new_angle** will have got 370. ```angle + 10``` -> ```360 + 10``` -> ```370```_

We can conditionally divide the variables into pre-existing and custom:

1. If you need pre-existing system variable — go to the documentation and find out how to name it. Just call it by name in the script.
2. You can create yourown variables. Then you can use them wherever you want. But it can be used within the sctipt where it was declared. 

```Dim s As String``` — this is creating (declaring) of the string variable.

Vizrt-script is strongly typed language. It's mean that all variables must be links to particular type of data. No possible to declare variable without type ~~```Dim var```~~. If you want to create universal variable you can declare special type "Variant" ```Dim var As Variant```. But the best way is to specify a particular data type! Thus you forbid to compiler put text to number variable. But if you want to convert type you can do it anytime by system functions like ```var = CInt("42")``` (we got number 42 from string "42").

### Variable types

#### Basic variable:

Type | Description
--- | ---
Integer | __Dim i As Integer__ <br/> integer number (no floating point), represents integer from −2,147,483,648 to 2,147,483,647. Suit for counters and something which can be only integer. <br/> <media-image name="Integer.svg" />
Double | __Dim f As Double__ <br/> Rational floating point number declaring in memory as an integer (_fraction_) multyplied by 10 in some degree (_exponent_). Thus, float number can cover a huge range of numbers from 10<sup>−308</sup> to 10<sup>308</sup>. For example, ```f = 3,1415926535``` <br/> <media-image name="Double.png" /> Float variable takes 64 bits.
String | __Dim s As String__ <br/> Text. Any chars, line breaks, etc in any encoding ```s = "String\nText"```
Boolean | __Dim enable As Boolean__ <br/> Boolean variable represent only "true" or "false" ```enable = true```.

#### Complex variables:

Vertex | __Dim pos As Vertex__ <br/> Tripple set of double-values. Perfect suit for store coordintes in 3D space: position, rotation, scaling. Vertex have access to separate axes x, y, z: ```pos.x```, ```pos.y```, ```pos.z```.
Array | __Dim arr As Array[Double]__ <br/> Collection(list) of data in some single type. Adding new element: ```arr.Push(3,14159)```. Geting first element: ```arr[0]```
Stringmap | __Dim map As Stringmap__ <br/> Named universe collection of Variant data type. You can store there any data type. Access to each element is by string. For example ```map["age"] = 100``` (integer) or ```map["name"] = "Dmitry"``` (string). If the element not exists it will be created.
Datetime | __Dim dt As Datetime__ <br/> It's for storing date and time. You can use only date or only time. ```dt = GetCurrentTime()```.
Matrix | __Dim m As Matrix__ <br/> Matrix 4*4 of double-values.
Variant | __Dim m As Variant__ <br/> A universal variable for storing anything. You can put in any data type.

#### Vizrt variable:

__Container__ (link on some container in scene tree), __Director__ (animational director in the stage), __Keyframe__ (a key of animation), Color, Material, Camera, Grid, Light, Texture, Channel, PluginInstance, FunctionPluginInstance, Clipchannel.

* The best practice is placing defining of all variables in the beginning of the script. Some variables are sometimes used like parameters with some default values. <media-image name="Defining-variables.png" />

### Conversion between data types

You can always change the data type by system functions as needed: ```CInt(var), CDbl(var), CStr(var), CBool(var)```. And there is a special function to turning from Double to String ```DoubleToString(value, precision)```.


## 2. Branching

Key benefits of any scripts is the branching — this is ability to choose what to do along condition. In vizrt-script this realized by a construction ```If [condition] Then [do #1] Else [do #2] End If```. Where instead ```condition``` must be conditional value (boolean type). If you need only [do #1]—block than "Else [do #2]" you can drop out (don't write it).

Simple example from practice:
```vb
Dim temperature As Double = 17
Dim output As String

If temperature > 0 Then
	output = "+" & CStr(temperature)
Else
	output = CStr(temperature)
End If
```

With the standard conversion of the number into a string the symbol "+" will not be added as expected. How to reveal the number with "+" sign if temperature above zero? "If else" help us. If temperature greater than zero we get merging "+" with number. If not than it's nothing to add.

Question for self-test. Which do we get "output" if temperature will be equal 0?

<details><summary>Show the answer</summary>
Variable "output" is equal to the string "0". Because 0 not greater than 0. Thus, we passed by "true" branch and run only "false" part where we add nothing. 0 is not a negative number, so there isn't minus sign. Good.
</details>

## 3. Array

Frequently needed to store a list some data. For example, set of chart values. Creating unique variables for each value is cumbersome and extremely inconvinient for further processing. 
```vb
Dim value1 As Double
Dim value2 As Double
Dim value3 As Double
...
```
or like this, more compact, but it's bad yet:
```vb
Dim value1, value2, value3, ... As Double
```
Simplest and convinient way is declare a variable as array data.
```vb
Dim values As Array[Double]
```
* Pay attention, I declare data type of array elements simultaneously. To get or write the value in a specific cell of the array, you need to refer to its index ```values[3]```.
* Attention! Index isn't a serial number! __The index determines the offset from the beginning of the array!__ For getting the first value you need to refer zero index ```values[0]```.

Question for self-test. What is the minimum number of elements the array should contain so that the script does not generate an error with ```values[3]```?
<details><summary>Show answer</summary>
<code>values[3]</code> — this is fourth element of array. That means array must contain 4 elements at least.
</details>

Bonus. You can get element not only from the beginning of the array, but from the end! To take the last element of the array, specify "-1" ```values[-1]```.

To experience all the benefits of arrays, let's explore the loops.

## 4. Loop

Loop is a repeated part of code while the condition is true. There are three syntax styles of loop in vizrt-scripts. Now we take only the most practical variant ```For [start] to [end] [loop something] Next```.

In ```start``` sets some default value for variable-counter. It increments by 1 with each repetition until value reach to ```end``` value. This loop will end at ```end```.

```vb
For i=0 to 10
	array[i] = i
Next
```

Note, loop may be infinite! It's very bad within vizrt-script. Infinity loop blocks whole system. If VizEngine (VizArtist) see this, it just emergency shutdowns whole the script until you restart it by hand or scene will be reloaded. So, please analize a condidion carefully. Have condition the end?

Most popular using of the loop is a array traversal. For example, lets calculate the arithmetic average in an array of numbers:

```vb
Dim sum, medium As Double
Dim values As Array[Double]

sum = 0
For i=0 to values.size-1
	sum = sum + values[i]
Next
medium = sum/values.size
```

Exercise: write the script of finding minimum and maximum values into array.

<details><summary>Show answer</summary>
{% highlight vb %}
Dim min, max As Double
Dim values As Array[Double]

min = values[0]
max = values[0]
For i=1 to values.size-1
	If values[i] < min Then min = values[i]
	If values[i] > max Then max = values[i]
Next
{% endhighlight %}

Note:
<li>there is one-line-"If"-syntax. In this case "End If" is not writing.</li>
<li>loop starts from second element of array ```For i=1```, because we already considered the first element before the loop.</li>
</details>

## 5. Function and subroutine

Function or subroutine is a named set of commands you can call from any place of the script. It's convinient for two cases:
1. When you need to cut off a duplicating piece of code.
2. For convinient, when you want to make script more human readable and structured code.

Function or subroutines are similar to variables. By name of variable we get access to the data, we can read or rewrite. By name of function we call the code.

There is only difference in constructs ```function``` and ```sub```, function always must return some value. But subroutine never return anything. Both construction can change something in enviroment like a global variable, object position and so on... 

Also, both constrinction can receive some input data. For exmaple, ```Sub fn(value1 As Integer)``` recieves one value integer datatype. The variable defines automatically inside the subroutine and avaliable inside ```Sub``` only. This variable will be auto deleted after the ```Sub``` is ended.

Lets create a function for convertion number to string by "temperature rule". Because we need returning value we have to use ```Function```.

```vb
Function ConvertToTextTemp(input As Double) As String
	If input > 0 Then
		ConvertToTextTemp = "+" & CStr(input)
	Else
		ConvertToTextTemp = CStr(input)
	End If
End Function

Dim str As String = ConvertToTextTemp(17)
println(str)
println(ConvertToTextTemp(-3))
```

Note:
* the line of function defining have the data type of returning value
* to return the value, just assing the output value to the function name
* I used system subroutine ```println``` for printing text string into the console. This subroutine is very usefull for finding errors in code (debug). _You can copy and paste this code and try to rut it. Don't forget to look into the console ;)_

__Subroutine__ (that haven't return value) is defined and used like a function. Only you don't need to define return data type and don't return.
```vb
Sub PrintTemp(input As Double)
	If input > 0 Then
		println("+" & CStr(input))
	Else
		println(CStr(input))
	End If
End Sub

PrintTemp(17)
PrintTemp(-3)
```

The differences of syntax "Sub":
* instead "Function" is writed "Sub"
* do not write returning data type and nothing to return
* all I need I doing inside a subroutine

## 6. Object

Object is the way to controlling of data and fuctions more like in real life. We intuitively define each object in the life some properties and abilities to do something. For example, some dog have: 5 year old, pink color, etc... Thus, programming "objects" just reflects reality. It's like a list or array, but with different data types and functions. For example, object "Container" contains properties "Name", "Active"(visibility), "Count of sub-containers", etc... "Container" also has functions "Create new sub-container", "Get first sub-object", etc... All possible variables and functions are in the documentation! Please feel free to look there! ;)

__Access to all properties and functions of object gets by dot character "." — for example ```container.name```. You can call sub-object and sub-properties consistently through points  ``this.alpha.value```__

Some properties can have a status "read only". It can be readed but not changed. All other properties you can read and rewrite. For example, we can get name of container ```println(this.name)``` or rename it ```this.name = "new_name"```. But we can't change directly "Count sub-containers" property. The property will changed if we change real count of sub-containers.

* by the way, the variable "this" refers to current container where script placed

Some functions of object returns other object. For example, lets get a "Omo" plugin on the current container and change counter of visible sub-object:
```vb
Dim pi_omo As PluginInstance
pi_omo = this.GetFunctionPluginInstance("Omo")
pi_omo.SetParameterInteger("vis_con", 3)
```

Note:
* pi_omo variable is unusual datatype like Double or String. PluginInstance is object that repesents a plugin. You can find all possible objects in documentation. There is written certain datatype of function return.
* because PluginInstance is the uviversal datatype of any plugins, it haven't directly acccess to "vis_con" properties. Unfirtunatelly it's not possible to write ~~```pi_omo.vis_con = 3```~~. Therefore, it lets use build-in function of setting up the parameter of integer type ```SetParameterInteger("vis_con", 3)```. The order of the input values is in the documentation.

There is not possible to create yourown new type object. :( We can say that all object reflects some existing entity of VizEngine or scene. But you can create your own structures! Structure is the same as an object... but it have only properties, without functions. Details and examples later (or take a look in the documentation). _The need for structures is really rare in scripts._

<a name="callback"></a>
## 7. Callback function (Event)

_This isn't basic thing. But using of events is very often into the vizrt-scripts and you must to know them from the beginning._

Callback function is a function that is called automatically by external event. VizEngine tries to find in your script the appropriate function in the event moment. If VizEngine find it then calling it. Therefore, format of callback functions is so strong. You can't change name of function and order input data. But there is a litle convinient. Full list of all possible callback function is right at hand. Thus, you don't need you remember them.

<media-image name="EventList.png" />

Of cource, you can call callback functions by hand if it need. For example, there is ```OnInit()```  function where must be placed start assigns. This code will be launched automatically just after start the script and after scene loading. If I need to set variables to defaults I can call ```OnInit()``` where I want in my code. I do that usually when I want to refresh links to container and properties from script interface. Any changing of interface calls callback function ```OnParameterChanged()```. I just put ```OnInit()``` into the ```OnParameterChanged()```:

```vb
Sub OnInit()
	scale = GetParameterDouble("scale")
	target = GetParameterContainer("target")
End Sub

sub OnParameterChanged(parameterName As String)
	OnInit()
End Sub
```

So, the initializing happens very rare and only when it need. ;)

The most popular callback function (event) is the event of render frame tick — ```OnExecPerField```. The function automatically are calling in each frame. Warning! _Do not accurate timer based on the OnExecPerField function._ Even in the best performance computer FPS isn't equal 50 always. But for most common applications is enough. :)

Example of using ```OnExecPerField```: there is 360 degreee rotation for some count frames (50 is about second).

```vb
Dim angle As Double = 0
Dim step As Double = 360.0/50.0

Sub OnExecPerField()
	angle += step
	if angle >= 360 then angle = 0
	this.rotation.z = angle
End Sub
```

Note:
* I use short form of increment ```angle += step```. Of cource I could write ```angle = angle + step```. But the short form is more understandable and shorter ;) I've told to the program "Please increase angle by step" — ```angle += step```.
* I add float dots into dividing ```360.0/50.0```. I did this specially to avoiding [integer division errors](https://stackoverflow.com/questions/7286681/why-does-integer-division-code-give-the-wrong-answer/39286090). I clarify to compiler that it's must not simplyfy here and, please, divide them as rational numbers (as float, not integer).
* I checking non strict equality ~~```if angle == 360```~~. I check it with some margin in case of calculation accuracy error ```if angle >= 360```. This way I guarantee reliability the script.

If add this script to any container, it will start to rotating counterclock-wise one turn by one second approximatelly.
If your render have 60 fps, it will rotation little faster.

One more example with ```OnExecPerField()```. Try to understand what it does?
```vb
Dim step As Double = 100.0/50.0

Sub OnExecPerField()
	this.alpha.value -= step
	if this.alpha.value <= 0 then this.alpha.value = 100.0
End Sub
```
<details><summary>Show answer</summary>
	It's just simple effect of blinking. Object reveals in a flash and smootthly hides in 50 frames (by alpha).
</details>

--------------------------------------

## Homework

1. Rewrite the script of rotations for ability to drop it to dozen object and it wouldn't have a similar angle of rotation. _Hint: random number gets by system function Random(360), where "360" is maximum value, and minimum is zero always._

2. Write a script that will shake the current container by rotation. For example 10 degree to and fro. Make it with easy changing shaking degree as a default setting. Additional task: add extra shaking by position.

3. __More difficult task__ You will have to look in documentation;) Write a script for "infinity" shifting of looped texture on current container. _Hint: the whole loop of the texture is 10 only if texture scale is 1._
