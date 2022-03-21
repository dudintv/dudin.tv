---
title: JSON parser (beta)
description: Parse JSON string and provide functions for data retrieving by object path like in JavaScript object.
category: link
path: dudin-parser/dudin-parser-json
file: dudin-parser-json.vb
---

### Disclaimer: this beta is a very unoptimized code!

__This code supports just simple set of functionality.__

<interface-description image="json-test-interface.png">

### Interface description (test mode)

To test JSON path — put JSON text into the script interface and set output value to text geometry of this container.

Set __Test input mode__ to enable test input mode and show textarea for test input.

Fill __JSON path__ to get value from any type of ipnut (test or SHM). And, use the result for text geometry or SHM variable.

Set __Test output mode (to text)__ to output the result to the text geometry of the current container.

Push __Parse__ to convert input text to virtual JSON structure and (optionally) get the result by __JSON path__. After this you can use this structure to get value by any another JSON path (inner script function).

</interface-description>

There are avaliable functions:

* sub-objects and values, example: ```city.coord.lon```
* get array value, example: ```current.list[1]``` is the first value, ```current.list[-1]``` is the last value
* get array values, example: ```data.names[]```
* get array sub-values, example: ```current.list[].humidity``` gives array of humidities
* get elements count of array, example: ```current.list.count()```


<interface-description image="json-get-one-value-interface.png">

### Interface description

For working mode you can fill only __SHM input nmae__ just to get input JSON text.

If you want only one value — you can define __JSON path__ and __SHM output name__ to push the result value into SHM variable.

</interface-description>

## How to use

In this beta version you can retrieve information from JSON virtual object by JSON path string.

Example for one value:

```
Dim c_parser As Container = Scene.FindContainer("json_parser")
Dim posX as Double = (Double)c_parser.Script.GetValueOfCurrentByPath("steps[1].points[2].positionX")
```

<br />
