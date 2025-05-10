---
title: Manage Node with Python
date: 2024-01-02T19:41:00Z
---

::: details Summary (AI Generation)
<!-- DESC SEP --> 
Demonstrates how to programmatically manage Houdini nodes using Python, covering basic operations like creating nodes, changing node names, modifying colors, and working with comments. The examples show how to interact with Houdini's Python API to manipulate nodes and their properties within the scene hierarchy.

<!-- AI Summerized -->

<!-- DESC SEP -->
:::

# Manage Node with Python

## Basics

### Create Node
```python

>>>h = hou.node("/obj") // instance of class hou.OpNode is returned.
>>>h.createNode("geo") // this method create a new node of type as a child of this node. "/obj" in this case
```

Now, we have a geometry SOP created in "/obj". 


Let's dive in to geometry we just created and create a sphere.

```python
>>>h = hou.node("/obj/geo1")
>>>h.createNode("sphere")
```


### Change Name of the Node

```python
>>>sphere = hou.node("obj/geo1/sphere1") #Let's just assign it
>>>sphere.name() #retrieve current name
'sphere1' 
>>>sphere.setName("hello_3d_world")
```


### Change Color, Set Comment, Make Comment Visible

Use False flag to make it invisible, and setComment None to remove the comment.
`setGenericFlag(flag, value)` sets the value of the specified flag based on the bool value argument. 

Here are some examples, [nodeFlag - SideFX](https://www.sidefx.com/docs/houdini/hom/hou/nodeFlag.html)

Compress, Current, Debug, Display, ...

```python
>>>sphere.setColor(hou.Color(1,0,0))
>>>sphere.setComment("Hello up there")
>>>sphere.setGenericFlag(hou.nodeFlag.DisplayComment,True)
>>>sphere.setGenericFlag(hou.nodeFlag.DisplayComment,False)
>>>sphere.setComment(None)
```


### Type Retrieval and Intro to Python

```python
>>>sphere.type()
<hou.SopNodeType for Sop sphere>
```

It returns an instance of the hou.NodeType class, specifically a hou.SopNodeType. This object represents the type of the node. To interpret this, hou.SopNodeType object is returned, and the specific type of SOP node it represents is "sphere".


```python
>>>sphere.type().name()
'sphere'
```

There we have it. Look for hou.SopNodeType class in Houdini help file to find all available methods.

### Parent and Children

```python
>>> rubbertoy.parent()
<hou.ObjNode of type geo at /obj/geo>
>>> rubbertoy.children()
(<hou.SopNode of type file at /obj/geo/hello_3d_world/file1>, <hou.SopNode of type xform at /obj/geo/hello_3d_world/xform1>, <hou.SopNode of type material at /obj/geo/hello_3d_world/material1>, <hou.SopNode of type switch at /obj/geo/hello_3d_world/switch1>, <hou.ShopNode of type matnet at /obj/geo/hello_3d_world/shopnet1>, <hou.SopNode of type output at /obj/geo/hello_3d_world/output0>)
```

Parent and children does not mean input or output of the node. Parent here means hierarchical parent. Children vice versa. 

parent() is also a shortcut for writing hou.node("..")

### Inputs and Outputs



To see Inputs in above case,
```python
>>> hou.node("obj/geo/merge1").inputs()
(<hou.SopNode of type attribwrangle at /obj/geo/pointwrangle1>, <hou.SopNode of type testgeometry_rubbertoy at /obj/geo/hello_3d_world>)
```

Just as expected. Nothing special from inputs(). Use outputs() to view output. Remember, it won't print the node tree recursively.


### Inputs and Outputs 2 



```python
>>> for node in hou.node("/obj/geo/sphere1").outputs():
...     node.name()
... 
'pointwrangle1'
'null2'
>>> hou.node("/obj/geo/sphere1").outputs()
(<hou.SopNode of type attribwrangle at /obj/geo/pointwrangle1>, <hou.SopNode of type null at /obj/geo/null2>)

>>> sphere = hou.node("/obj/geo/sphere1")
>>> sphere.outputsAsData()
[{'from_index': 0, 'to_index': 0, 'to': 'null1'}]
```

You may use for loop and print each output as string. Later one returns the objects as tuple, so you will have to state index number to use .name() and such methods.

Try 'outputsAsData' too. You can get furthur data outputs as dictionary.

<!-- more -->
