<script setup>
    
import { data as posts } from './posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate';
</script>

# Blog Posts

## Recent Posts

<ul class="menu">
<template v-for="post in posts.slice(0,5)">
  <li>
    <a :href="post.url" class="recent-posts">{{ post.frontmatter.title }}</a>
    <span>{{ formatDate( post.frontmatter.date ) }}</span>
  </li>
  <div v-if="post.excerpt" v-html="post.excerpt.length <= 100 ? post.excerpt : post.excerpt.slice(0, 120) + '...'"></div>
  <br/>
</template>
</ul>