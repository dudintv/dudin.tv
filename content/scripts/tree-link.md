---
title: Tree link
description: Copy and link part of scene tree. The target sub-tree will be controlled by source sub-tree.
category: link
path: dudin-link/dudin-link-tree
file: dudin-link-tree.vb
---

::interface-description{image="tree-link.png" }

### Interface description

**Source** and **Target** define "from" container and "to" container.

You can define what the script should do when you push **Make copy**: **Disable text link**, **Disable Autofollow**, **Delete animation**. It helps to avoid flickering.

Button **Make copy** erases everything in **Target** container and copy **Source** container content into **Target** container.

There are checkboxes to provide neat synchronization control. What you want to sync, and what you don't want:

- active
- position x, y, z
- rotation x, y, z
- scale x, y, z
- alpha
- text
- rectangle (width and height)

::
