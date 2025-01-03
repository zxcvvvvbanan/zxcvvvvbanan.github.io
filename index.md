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

<ul class="menu">
  <template v-for="post in posts.slice(0,5)" :key="post.url">
    <li>
      <a :href="post.url" class="recent-posts">{{ post.frontmatter.title }}</a>
      <span>{{ formatDate(post.frontmatter.date) }}</span>
    </li>
    <div v-if="post.excerpt" v-html="post.excerpt.length <= 100 ? post.excerpt : post.excerpt.slice(0, 120) + '...'"></div>
  </template>
</ul>