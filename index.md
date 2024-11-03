---
layout: home

hero:
  name: "Yongjun Cho"
  actions:
    - theme: brand
      text: Houdini
      link: /post/houdini
      
    - theme: alt
      text: Blog
      link: /post/blog

features:
  - title: USD friendly
    details: understands USD concepts, basics and  troubleshooting basic problems.
  - title: Houdini
    details: handles the majority of FX shot context, HDA creation, as well as versioning and management.​
  - title: Strong pipeline background
    details: create scripts on demand, GUI tool with PyQt, package management with Rez. Fluent working in *nix, Win, Mac environment.
---


<script setup>
import { data as posts } from './posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate';
</script>

## Recent Posts

<ul>
  <li v-for="post of posts.slice(0,4)">
      <strong><a :href="post.url">{{ post.frontmatter.title }}</a></strong><br/>
      <span>{{ formatDate( post.frontmatter.date ) }}</span>
  </li>
</ul>

## Colophon

Built using [Vitepress](https://vitepress.dev) and [Vue.js](https://vuejs.org).


## Stacks

More on [About Me](about.md)

### Main Stacks:
<p align="left" style="display: flex; gap: 4px; flex-wrap: wrap;">
  <a href="#" style="display: block; word-break: break-word;"><img src="/assets/icon/houdini.svg" width="48" height="48"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="/assets/icon/usd.svg" width="48" height="48"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="/assets/icon/nuke.svg" width="48" height="48"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=py&theme=dark" /></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=qt&theme=dark" /></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=linux&theme=dark"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=git&theme=dark"/></a>
</p>

### Fun Stacks:

<p align="left" style="display: flex; gap: 4px; flex-wrap: wrap;">
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=vite&theme=dark"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="/assets/icon/proxmox.svg" width="48" height="48"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=vscode&theme=dark"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=vim&theme=dark"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=docker&theme=dark"/></a>
  <a href="#" style="display: block; word-break: break-word;"><img src="https://skillicons.dev/icons?i=obsidian&theme=dark"/></a>
</p>
