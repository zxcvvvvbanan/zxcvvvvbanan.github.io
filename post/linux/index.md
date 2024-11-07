---
outline: deep

---

<script setup>
    
import { data as posts } from './posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate';
</script>

# Linux Posts

## Recent Posts

<template v-for="post in posts.slice(0,5)" class="tmp">
  <li>
    <a :href="post.url" class="recent-posts">{{ post.frontmatter.title }}</a>
    <span>{{ formatDate( post.frontmatter.date ) }}</span>
  </li>
  <div v-if="post.excerpt" v-html="post.excerpt.slice(0, 200) + '...'" ></div>
  <br/>
</template>
