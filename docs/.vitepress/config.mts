import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yongjun Cho",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Houdini', link: '/houdini/index'},
      { text: 'Blog', link: '/blog/index'}//usd, projects
    ],

    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/houdini/python-houdini-basics' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: 'Constraint 101', link: '/blog/Constraints' },
          { text: '경력기술서', link: '/blog/Experience' }
        ]
      },
      {
        text: 'FX',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/houdini/python-houdini-basics' },
          { text: 'NULL', link: '/api-examples' },
          { text: 'NULL', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxcvvvvbanan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yongjuncho94'}
    ]
  }
})
