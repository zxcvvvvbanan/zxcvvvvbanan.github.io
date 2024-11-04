---
outline: deep

---

<script setup>
    
import { data as posts } from './posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate';
</script>

# Linux Posts

<ul class="recentposts">
    <li v-for="post of posts">
        <strong><a :href="post.url">{{ post.frontmatter.title }}</a></strong><br/>
        <span>{{ formatDate( post.frontmatter.date ) }}</span>
    </li>
</ul>

