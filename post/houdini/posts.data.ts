// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('/post/houdini/*.md', {
    excerpt: true,
    transform(raw) {
      // index.md 파일 제외
      const posts = raw.filter(post => !post.url.endsWith('/post/houdini/'))
      
      // 날짜순 정렬
      return posts.sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
    }
})

      