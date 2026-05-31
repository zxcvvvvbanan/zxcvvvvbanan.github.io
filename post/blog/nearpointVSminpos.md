---
title: Nearpoint vs Minpos
date: 2025-1-11T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP --> 

<!-- AI Summerized -->
<!-- DESC SEP -->
:::


# Nearpoint vs Minpos

## minpos

Given a position in world space, returns the position of the closest point on a given geometry.


`vector  minpos(<geometry>geometry, vector point)`

-> returns vector position


## nearpoint

Finds the closest point in a geometry.
This retrieves more data compared to 'minpos'

`int  nearpoint(<geometry>geometry, vector pt)`
-> returns number of point

### Summary 

- Minpos: Returns the position (vector) of the closest point. Suitable for simple position calculations.

- Nearpoint: Returns the number (int) of the closest point. Useful when accessing point attributes or when additional operations are needed.