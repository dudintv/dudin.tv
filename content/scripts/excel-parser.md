---
title: Excel parser
description: Get and distribute data from Excel by DataReader plugin from DataPool.
category: link
link: https://bitbucket.org/vizrt/vizartist-script/src/master/dudin-parser/dudin-parser-excel/
file: dudin-parser-excel.vb
---

I used this script into this mega tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/IMbZqzIA-58" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can use the script in three modes: 

1. Single value
2. All table
3. Columns to SHM variables

<interface-description image="excel-parser-ui-single-value.png">

### 1. Single value

In this mode you can get a single value from Excel data and put it where you want. Just select __Output to__. "Console" mode will just print value into the console. "Text" putpur the value into text of current container. And, "plugin" allow to output more flexible, to put the value into any plugin.

You can choose which cell you need. Manually by __Select row = By number__ + __Row__ value (the same for columns). Or, you can choosse __By text__ + __Text__, and my script will be looking for the row/column contains certain text in any cell. It's useful when you need to be connected to row/column specified by text, as a key.

</interface-description>

<interface-description image="excel-parser-ui-all-table.png">

### 2. All table

Here you can print all table into console when the data is changed. Or, spread the data across children containers. My script will search containers which only match "=x,y" pattern in the name. Where __x__ and __y__ are numbers or "auto-increment".

Also you can define the first value for auto-increments. By default the first row could be "2"! Because "1" is a head of the table.

</interface-description>

<interface-description image="excel-parser-ui-shm.png">

### 3. Columns to SHM variables

In this mode you can specify SHM variables where will be stored data from each column. You can ignore some columns — just don't give a name to this column. If you want to ignore the 1st and 3rd column, and you want to get 2nd and 4th, you can write ", second, , forth". Also, you can see this example on the screenshot.

</interface-description>

## Common buttons

When you work on your scene, you can use __Init__ button to re-initialize script in order to re-find all containers with "=x,y" pattern.

Also, there are __Print table to console__ and __Print SHM to console__  for debug purposes, to undersand what the data contains.

<media-image name="print-to-console-eu.png" />

Checkbox __Keep data if the file is blocked__ safe outputs when input data is empty. Usually it happens when the Excel file is blocked.

## "All table" mode

In this mode you can spread you data to all children container with name with "=x,y" pattern.

<media-image name="containers-naming.png" />

* You can specify the certain cell by numbers of row and column __=2,4__.
* You can use number with "-" sign, __=-1,4__. It means to get data from the end of the list.
* Or, auto-incremented row __=i,4__

### Data type

Also you can specify the data type. There are avaliable types (actual for 1.7 version):
* __:number__, or __:number(2)__ — number "2" means rounding number to this count digits after point
* __:percent__, or __:percent(2)__ — works like number, but also multiply by 100
* __:omo__ — for Omo plugin
* __:color__ — for emission color

### Arbitrary name

If you need to write your own name, you can put the name before "=". For example, __my_name=2,4__ or __last_value=-1,4:number(2)__.