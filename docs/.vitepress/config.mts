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
      { text: 'Other', link: '/linux/index'}

    ],

    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: '경력기술서', link: '/blog/Experience' }
        ]
      },
      {
        text: 'Houdini', // Nesting the following categories under 'Other'
        items: [
            {
              text: 'FX',
              items: [
                { text: 'Constraint 101', link: '/blog/Constraints' },
                { text: 'Collider 101', link: '/blog/Collider101'},
                { text: 'Pyro 101', link: '/blog/Pyro101'}
              ]
            },
            {
              text: 'Python',
              items: [
                { text: 'Manage Houdini with Python', link: '/houdini/ManageNodewithPython' }
              ]
            }
          ]
      },
      {
        text: 'Other', // Nesting the following categories under 'Other'
        items: [
          {
            text: 'Linux',
            items: [
              { text: 'Install Nvidia Driver (Rocky)', link: '/linux/rockygpudriver' },
              { text: 'Install Houdini (Rocky)', link: '/linux/installHoudini' },
              { text: 'Configure Samba (Fedora)', link: '/linux/samba_by_CLI' },
              { text: 'Configure SSH (Fedora)', link: '/linux/sshrocky' }
            ]
          },
          {
            text: 'VM & CT',
            items: [
              { text: 'Install Proxmox', link: '/vmct/proxmoxInstall' },
              { text: 'Configure Proxmox', link: '/proxmox/proxmoxConfigure' },
              { text: 'Configure Docker in Linux', link: '/proxmox/docker' }
            ]
          },
          {
            text: 'Personal',
            items: [
              { text: 'PARA', link: '/personal/para' }
            ]
          }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxcvvvvbanan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yongjuncho94'}
    ]
  }
})
