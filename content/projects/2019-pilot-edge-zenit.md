---
title: 'Pilot Edge HTML template'
description: 'Vue.js implementation in Pilot Edge custom template with connection to API.'
date: 2019-10-01 12:00:00 +0100
image: zenit-template-16x9.png
---

## Task

Make a control interface, where an operator can load API data from a Football Data Provider. Also, the operator should have the ability to change any data! This was obligatory because the data is loaded not in real-time but with 15 minutes delay.

## Solution

I've written a new custom Vue.js directive in order to allow the Vue application to be connected to the Pilot Edge template.

:media-image{name="zenit-template.png" center}
