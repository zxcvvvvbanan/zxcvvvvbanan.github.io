---
layout: home
title: false
hero:
  name: "Yongjun Cho"
  actions:
    - theme: brand
      text: Houdini
      link: /post/houdini
      
    - theme: alt
      text: Blog
      link: /post/blog

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


## Colophon

Built using [Vitepress](https://vitepress.dev) and [Vue.js](https://vuejs.org).

