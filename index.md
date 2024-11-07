---
layout: home
heroFullScreen: true
hero:
  name: "Yongjun Cho"
  text: 'Houdini FX Artist'
  image: 
    src: ./vitepress-logo-large.webp
  actions:
    - theme: brand
      text: About Me
      link: ../about
    - theme: alt
      text: Houdini
      link: /post/houdini
    - theme: alt
      text: Blog
      link: /post/blog

---

<script setup>
import { data as posts } from '.vitepress/posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate';
</script>

## Recent Posts

<template v-for="post in posts.slice(0,5)" class="tmp">
  <li>
    <a :href="post.url" class="recent-posts">{{ post.frontmatter.title }}</a>
    <span>{{ formatDate( post.frontmatter.date ) }}</span>
  </li>
  <div v-if="post.excerpt" v-html="post.excerpt.slice(0, 200) + '...'" ></div>
  <br/>
</template>

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

This is a static site created using [Vue.js](https://vuejs.org) powered [Vitepress](https://vitepress.dev).
Build and deployement done with [Github Pages](https://pages.github.com).
Custom scripts and CSS styling done to enhance your (or my) web experience. Refer to github repository! Wide open to everybody. 