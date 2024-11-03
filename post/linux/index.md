---
outline: deep

---

<script setup>
    
import { data as posts } from './posts.data'
import formatDate from '/.vitepress/theme/utils/formatDate';
</script>

## Linux Posts

<ul>
    <li v-for="post of posts">
        <strong><a :href="post.url">{{ post.frontmatter.title }}</a></strong><br/>
        <span>{{ formatDate( post.frontmatter.date ) }}</span>
    </li>
</ul>



<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 1.4rem;
    line-height: 3;
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