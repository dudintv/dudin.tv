---
title: Excel parser
description: Get and distribute data from Excel by DataReader plugin from DataPool.
category: link
path: dudin-parser/dudin-parser-excel
file: dudin-parser-excel.vb
---

I used this script into this mega tutorial:

:media-youtube{url="https://www.youtube.com/watch?v=IMbZqzIA-58"}

You can use the script in three modes:

1. Single value
2. All table
3. Columns to SHM variables

::interface-description{image="excel-parser-ui-single-value.png"}

### 1. Single value

In this mode, you can get a single value from Excel data and put it where you want. Just select **Output to**. "Console" mode will just print value into the console. "Text" outputs the value into the text of the current container. And, "plugin" allows to output more flexible, to put the value into any plugin.

You can choose which cell you need. Manually by **Select row = By number** + **Row** value (the same for columns). Or, you can choose **By text** + **Text**, and my script will be looking for the row/column contains certain text in any cell. It's useful when you need to be connected to row/column specified by text, as a key.

::

::interface-description{image="excel-parser-ui-all-table.png"}

### 2. All table

Here you can print all table into the console when the data is changed. Or, spread the data across children containers. My script will search containers which only match "=x,y" pattern in the name. Where **x** and **y** are numbers or "auto-increment".

Also, you can define the first value for auto-increments. By default, the first row could be "2"! Because "1" is a table header.

::

::interface-description{image="excel-parser-ui-shm.png"}

### 3. Columns to SHM variables

In this mode, you can specify SHM variables where will be stored data from each column. You can ignore some columns — just don't give a name to this column. If you want to ignore the 1st and 3rd column, and you want to get 2nd and 4th, you can write ", second, , forth". Also, you can see this example on the screenshot.

::

## Common buttons

When you work on your scene, you can use **Init** button to re-initialize script in order to re-find all containers with "=x,y" pattern.

Also, there are **Print table to console** and **Print SHM to console** for debug purposes, to understand what the data contains.

:media-image{name="print-to-console-eu.png"}

Checkbox **Keep data if the file is blocked** safe outputs when input data is empty. Usually, it happens when the Excel file is blocked.

## "All table" mode

In this mode, you can spread your data to all children containers with a name with `=x,y` pattern.

:media-image{name="containers-naming.png"}

- You can specify the certain cell by numbers of the row and column `=2,4`.
- You can use number with "-" sign, `=-1,4`. It means to get data from the end of the list.
- Or, auto-incremented row `=i,4`

### Data type

Also, you can specify the data type. There are available types (actual for 1.7 version):

- `:number`, or `:number(2)` — number `(2)` means rounding number to this count digits after point
- `:percent`, or `:percent(2)` — works like the :number, but also multiply by 100
- `:omo` — for Omo plugin
- `:color` — for emission color

The default type is `:text`.

### Arbitrary name

If you need to have arbitrary name, you can put it before `=`. For example, `my_name=2,4` or `last_value=-1,4:number(2)`.
