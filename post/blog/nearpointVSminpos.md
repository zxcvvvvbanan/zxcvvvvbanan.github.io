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

<<<<<<< HEAD
vector  minpos(<geometry>geometry, vector point)
=======
`vector  minpos(<geometry>geometry, vector point)`
>>>>>>> 90dde21 (fix build fail)
-> returns vector position


## nearpoint

Finds the closest point in a geometry.
This retrieves more data compared to 'minpos'

<<<<<<< HEAD
int  nearpoint(<geometry>geometry, vector pt)
=======
`int  nearpoint(<geometry>geometry, vector pt)`
>>>>>>> 90dde21 (fix build fail)
-> returns number of point

### Summary 

- Minpos: Returns the position (vector) of the closest point. Suitable for simple position calculations.

- Nearpoint: Returns the number (int) of the closest point. Useful when accessing point attributes or when additional operations are needed.