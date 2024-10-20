import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yongjun Cho",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Blog', link: '/blog/index'},//usd, projects
      { text: 'Houdini', link: '/houdini/index'},
      { text: 'Other', link: '/Linux/index'}//usd, projects

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxcvvvvbanan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yongjuncho94'}
    ]
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // You can also set options to adjust sidebar data
        // see option document below
      })
    ]
  },
})
