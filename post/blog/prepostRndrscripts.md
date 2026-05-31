---
title: Pre-Post Render Script
date: 2026-2-01T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP --> 
Pre-Post Render Script
<!-- AI Summerized -->
<!-- DESC SEP -->
:::


# Pre-Post Render Script

## mblurStatus = hou.node('/obj/geo1').evalParm("geo_velocityblur")


if mblurStatus == 0:
    hou.node('/obj/geo1').parm("geo_velocityblur").set(1)