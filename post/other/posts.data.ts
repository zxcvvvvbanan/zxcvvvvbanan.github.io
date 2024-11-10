// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('/post/other/*/*.md', {
    excerpt: excerptFn,
    transform(raw) {
      // index.md 파일 제외
      const posts = raw.filter(post => !post.url.endsWith('/'))
      
      // 날짜순 정렬
      return posts.sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
    }
})

function excerptFn(file: { data: { [key: string]: any }; content: string; excerpt?: string }, options?: any) {
  file.excerpt = file.content.split('<!-- DESC SEP -->')[1];
}