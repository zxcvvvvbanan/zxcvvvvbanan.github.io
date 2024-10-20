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
      { text: 'Blog', link: '/blog/index'},//usd, projects
      { text: 'Houdini', link: '/houdini/index'},
      { text: 'Other', link: '/Linux/index'}//usd, projects

    ],

    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: '경력기술서', link: '/blog/Experience' }
        ]
      },
      {
        text: 'FX',
        items: [
          { text: 'Constraint 101', link: '/blog/Constraints' },
          { text: 'Collider 101', link: '/blog/Constraints'}
        ]
      },
      {
        text: 'Python',
        items: [
          { text: 'Manage Houdini with Python', link: '/houdini/ManageNodewithPython' }
        ]
      },
      {
        text: 'Linux and stuff',
        items: [
          { text: 'Install Nvidia Driver (Rokcy)', link: '/Linux/rockygpudriver' },
          { text: 'Install Houdini (Rocky)', link: '/Linux/installHoudini' },
          { text: 'Configure Samba (Fedora)', link: '/Linux/samba_by_CLI' },
          { text: 'Configure SSH (Fedora)', link: '/Linux/sshrocky' }
        ]
      },
      {
        text: 'Proxmox',
        items: [
          { text: 'Install Proxmox', link: '/proxmox/installation' }
        ]
      },
      {
        text: 'Personal',
        items: [
          { text: 'Install Proxmox', link: '/personal/para' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxcvvvvbanan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yongjuncho94'}
    ]
  }
})
