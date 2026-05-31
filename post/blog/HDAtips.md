---
title: HDA Creation and Versioning
date: 2026-4-12T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP --> 
For HDA management, use the Asset Definition Toolbar to verify paths and asset locations, and maintain separate versioning for development versions (v0.5) and release versions (v1.x) to avoid disrupting artists' workflows.
<!-- AI Summerized -->
<!-- DESC SEP -->
:::


# HDA Creation and Versioning

## Using the Asset Definition Toolbar

When editing HDA in a studio environment, I find it handy to keep the `Asset Definition Toolbar` enabled. When developing and managing HDAs, this toolbar helps you switch between versions and confirm whether you're working in a dev or release environment.

You can access it by right-clicking an asset and selecting `Show in Asset Manager`.

![An image](/assets/blog/hda/3.png)

![An image](/assets/blog/hda/2.png)

* can verify your working environment. meaning that when you're unsure where an asset originated, you can quickly check its actual location.

* Switching between versions is streamlined.


## For Frequent Asset Releases

::: tip
This strategy is practical and effective **for small studios sharing frequent hotfixes without interrupting artist workflows**. However, as team size grows or more complex scenarios emerge, a more robust versioning system becomes necessary.
:::

If your studio is large with a dedicated pipeline team that regularly releases new versions through rez, this level of asset versioning might be unnecessary. However, when fixes are minor and you need to share hotfixes quickly, this approach has been effective. It allows artists to work uninterrupted while giving developers peace of mind during development.

The method is simple: maintain development versions with decimal numbers below 1.0 and update them incrementally.

**Modifying a currently deployed asset version can have catastrophic consequences.** (If buttons disappear from an in-use asset or parameters are removed, errors occur immediately.) To prevent this, create a copy of the current version and assign it a number below 1.0. When deploying fixes, release it as 1.1. Since Houdini loads latest (highest numbered) version when multiple versions exist, new nodes will pull 1.1, while existing 1.0 instances remain stable on the network. 

[SideFX Documentation](https://www.sidefx.com/docs/houdini/assets/create#version)

:::warning
More version in asset library will occupy space in disk of course.
:::

- Current v1.0 instances used by artists are unaffected and continue to work seamlessly.
- New nodes pulled from the network will use v1.1 with no disruption.

Cases the strategy doesn't address:

- When multiple artists/developers need different versions simultaneously
- When fixing a bug in v1.0 while v1.3 is actively in use
- These situations require additional conventions or asset manager rules


### Summary (Example)

- If asset development is at v0.5 and the deployed version is v1.2:
- To fix a deployed asset, copy the current version, overwrite v0.5, make your changes, then deploy as v1.3
