---
title: JSON parser (beta)
description: Parse JSON string and provide functions for data retrieving by object path like in JavaScript object.
category: link
path: dudin-parser/dudin-parser-json
file: dudin-parser-json.vb
---

### Disclaimer: this beta is a very non-optimized code!

**This code supports just simple set of functionality.**

::interface-description{image="json-test-interface.png"}

### Interface description (test mode)

To test JSON path — put JSON text into the script interface and set output value to text geometry of this container.

Set **Test input mode** to enable test input mode and show textarea for test input.

Fill **JSON path** to get value from any type of input (test or SHM). And, use the result for text geometry or SHM variable.

Set **Test output mode (to text)** to output the result to the text geometry of the current container.

Push **Parse** to convert input text to virtual JSON structure and (optionally) get the result by **JSON path**. After this you can use this structure to get value by any another JSON path (inner script function).

::

There are available functions:

- sub-objects and values, example: `city.coord.lon`
- get array value, example: `current.list[1]` is the first value, `current.list[-1]` is the last value
- get array values, example: `data.names[]`
- get array sub-values, example: `current.list[].humidity` gives array of humidities
- get elements count of array, example: `current.list.count()`

::interface-description{image="json-get-one-value-interface.png"}

### Interface description

For working mode you can fill only **SHM input name** just to get input JSON text.

If you want only one value — you can define **JSON path** and **SHM output name** to push the result value into SHM variable.

::

## How to use

In this beta version you can retrieve information from JSON virtual object by JSON path string.

Example for one value:

```
Dim c_parser As Container = Scene.FindContainer("json_parser")
Dim posX as Double = (Double)c_parser.Script.GetValueOfCurrentByPath("steps[1].points[2].positionX")
```

<br />
