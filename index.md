---
layout: home

hero:
  name: "Yongjun Cho"
  text: "VFX Artist"
  tagline:
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
    <li v-for="post of posts.slice(0,3)">
        <strong><a :href="post.url">{{ post.frontmatter.title }}</a></strong><br/>
        <span>{{ formatDate( post.frontmatter.date ) }}</span>
    </li>
</ul>

## Colophon

Built using [Vitepress](https://vitepress.dev) and [Vue.js](https://vuejs.org).

Refer to github repository. I am not a front-end developer so this is configured with least plugins. This may be good reference to beginners.

### Main Stack:

<p align="left" style="display: flex; gap: 4px;">
  <img src="/assets/icon/houdini.svg" width="48" height="48"/>
  <img src="/assets/icon/usd.svg" width="48" height="48"/>
  <img src="https://skillicons.dev/icons?i=py&theme=dark" />
  <img src="https://skillicons.dev/icons?i=qt&theme=dark" />
  <img src="https://skillicons.dev/icons?i=linux&theme=dark"/>  
  <img src="https://skillicons.dev/icons?i=git&theme=dark"/>
</p>

### Fun Stack:

<p align="left" style="display: flex; gap: 4px;">
  <img src="https://skillicons.dev/icons?i=vite&theme=dark"/>
  <img src="https://skillicons.dev/icons?i=vscode&theme=dark"/>
  <img src="https://skillicons.dev/icons?i=vim&theme=dark"/>
  <img src="https://skillicons.dev/icons?i=docker&theme=dark"/>
  <img src="https://skillicons.dev/icons?i=obsidian&theme=dark"/>
</p>


<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 1.2rem;
    line-height: 1.1;
}

li {
    display: flex;
    justify-content: space-between;
}

li span {
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
    color: var(--vp-c-font-color);
}
</style>