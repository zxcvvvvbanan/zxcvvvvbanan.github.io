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

1. minpos
기능: minpos는 포인트 클라우드에서 특정 위치와 가장 가까운 포인트의 위치를 반환합니다.

사용법: minpos(geometry, position)

geometry: 검색할 포인트 클라우드의 지오메트리.

position: 검색할 위치.

반환값: 가장 가까운 포인트의 위치(vector).

특징:

단순히 가장 가까운 포인트의 위치만 반환합니다.

추가적인 정보(예: 포인트 번호)는 반환하지 않습니다.

빠르고 간단한 계산에 적합합니다.

2. nearpoint
기능: nearpoint는 포인트 클라우드에서 특정 위치와 가장 가까운 포인트의 포인트 번호를 반환합니다.

사용법: nearpoint(geometry, position)

geometry: 검색할 포인트 클라우드의 지오메트리.

position: 검색할 위치.

반환값: 가장 가까운 포인트의 번호(int).

특징:

가장 가까운 포인트의 번호를 반환하므로, 해당 포인트의 속성(예: @P, @Cd 등)에 접근할 수 있습니다.

minpos보다 더 많은 정보를 얻을 수 있습니다.

포인트 번호를 기반으로 추가적인 작업을 할 때 유용합니다.

요약
minpos: 가장 가까운 포인트의 위치(vector)를 반환. 단순한 위치 계산에 적합.

nearpoint: 가장 가까운 포인트의 번호(int)를 반환. 포인트의 속성에 접근하거나 추가 작업이 필요할 때 유용.