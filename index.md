---
layout: home

title: VitePress
titleTemplate: Vite & Vue Powered Static Site Generator

hero:
  name: Yongjun Cho
  text: Houdini FX Artist
  actions:
    - theme: alt
      text: About Me
      link: /about
    - theme: alt
      text: Houdini
      link: /post/houdini
    - theme: alt
      text: Blog
      link: /post/blog

  image:
    src: /assets/img/logo.png
    alt: YJ

---


<script setup>
import { data as posts } from '.vitepress/posts.data'
import formatDate from '.vitepress/theme/utils/formatDate';
</script>

## Recent Posts

<template v-for="post in posts.slice(0,5)">
  <li>
    <a :href="post.url" class="recent-posts">{{ post.frontmatter.title }}</a>
    <span>{{ formatDate( post.frontmatter.date ) }}</span>
  </li>
  <div v-if="post.excerpt" v-html="post.excerpt.slice(0, 200) + '...'" ></div>
</template>


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(-80deg, #ffffff 44%, #3f9c2c);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #6e6e6e 70%, #3f9c2c 20%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

##

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
