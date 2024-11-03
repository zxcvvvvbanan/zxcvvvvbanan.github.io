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
      { text: 'Blog', link: '/post/blog/'},
      { text: 'Houdini', link: '/post/houdini/'},
      { text: 'Other', link: '/post/linux/'}

    ],

    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: '경력기술서', link: '/post/blog/Experience' }
        ]
      },
      {
        text: 'Houdini', // Nesting the following categories under 'Other'
        items: [
            {
              text: 'FX',
              items: [
                { text: 'Constraint 101', link: '/post/houdini/Constraints' }
                //{ text: 'Collider 101', link: '/post/houdini/Collider101'},
                //{ text: 'Pyro 101', link: '/post/houdini/Pyro101'}
              ]
            },
            {
              text: 'Python',
              items: [
                { text: 'Manage Houdini with Python', link: '/post/houdini/ManageNodewithPython' }
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
              { text: 'Install Nvidia Driver (Rocky)', link: '/post/linux/rockygpudriver' },
              { text: 'Install Houdini', link: '/post/linux/installHoudini' },
              { text: 'Configure Samba (Fedora)', link: '/post/linux/samba_by_CLI' },
              { text: 'Configure SSH (Fedora)', link: '/post/linux/sshrocky' }
            ]
          },
          {
            text: 'VM & CT',
            items: [
              { text: 'Install Proxmox', link: '/post/vmct/proxmoxInstall' }
              //{ text: 'Configure Proxmox', link: '/proxmox/proxmoxConfigure' },
              //{ text: 'Configure Docker in Linux', link: '/proxmox/docker' }
            ]
          },
          {
            text: 'Personal',
            items: [
              { text: 'PARA', link: '/post/personal/para' }
            ]
          }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxcvvvvbanan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yongjuncho94'}
    ]
  },

  markdown: {
    languageAlias: {
      'vex': 'C'
    }
  }

})
