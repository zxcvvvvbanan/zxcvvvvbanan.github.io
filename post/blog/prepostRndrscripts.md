---
title: Pre-Post Render Script 활용
date: 2026-2-01T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP --> 
HDA 관리를 위해 Asset Definition Toolbar를 활용하여 경로와 어셋 위치를 확인하고, 버전 관리는 개발 버전(v0.5)과 배포 버전(v1.x)을 구분하여 아티스트의 작업 흐름에 영향을 주지 않도록 한다
<!-- AI Summerized -->
<!-- DESC SEP -->
:::


# Pre-Post Render Script 활용

## mblurStatus = hou.node('/obj/geo1').evalParm("geo_velocityblur")


if mblurStatus == 0:
    hou.node('/obj/geo1').parm("geo_velocityblur").set(1)