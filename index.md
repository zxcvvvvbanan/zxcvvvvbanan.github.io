---
layout: home

hero:
  name: Yongjun Cho
  text: Visual Effects Artist
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
    light: /assets/images/logo.png
    dark: /assets/images/logo2.png
 
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

