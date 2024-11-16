import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true,
    languageAlias: {
      'vex': 'c'
    }
  },
  title: "Yongjun Cho",
  description: "",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Blog', link: '/post/blog/'},
      { text: 'Houdini', link: '/post/houdini/'},
      { text: 'Other', link: '/post/other/linux/'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxcvvvvbanan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yongjuncho94'}
    ],

    sidebar: generateSidebar({
    /*
     * For detailed instructions, see the links below:
     * https://vitepress-sidebar.cdget.com/guide/options
     */
    //
    // ============ [ RESOLVING PATHS ] ============
    // documentRootPath: '/post',
    scanStartPath: '/post',
    // resolvePath: null,
    // basePath: '/post/',
    //
    // ============ [ GROUPING ] ============
    // collapsed: true,
    // collapseDepth: 2,
    // rootGroupText: 'Contents',
    // rootGroupLink: 'https://github.com/jooy2',
    // rootGroupCollapsed: false,
    //
    // ============ [ GETTING MENU TITLE ] ============
    // useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    // useFolderLinkFromIndexFile: false,
    // useFolderTitleFromIndexFile: false,
    // frontmatterTitleFieldName: 'title',
    //
    // ============ [ GETTING MENU LINK ] ============
    // useFolderLinkFromSameNameSubFile: false,
    // useFolderLinkFromIndexFile: false,
    // folderLinkNotIncludesFileName: false,
    //
    // ============ [ INCLUDE / EXCLUDE ] ============
    excludePattern: ['about.md','README.md', 'folder/', '*examples.md'],
    // excludeFilesByFrontmatterFieldName: 'exclude',
    // includeDotFiles: false,
    // includeEmptyFolder: false,
    // includeRootIndexFile: false,
    // includeFolderIndexFile: false,
    //
    // ============ [ STYLING MENU TITLE ] ============
    // hyphenToSpace: true,
    // underscoreToSpace: true,
    capitalizeFirst: true,
    // capitalizeEachWords: false,
    // keepMarkdownSyntaxFromTitle: false,
    // removePrefixAfterOrdering: false,
    // prefixSeparator: '.',
    //
    // ============ [ SORTING ] ============
    manualSortFileNameByPriority: ['blog', 'houdini', 'USD', 'linux', 'VM & Container'],
    // sortFolderTo: null,
    sortMenusByName: false,
    // sortMenusByFileDatePrefix: false,
    // sortMenusByFrontmatterOrder: true,
    // frontmatterOrderDefaultValue: 0,
    // sortMenusByFrontmatterDate: false,
    // sortMenusOrderByDescending: false,
    // sortMenusOrderNumericallyFromTitle: false,
    // sortMenusOrderNumericallyFromLink: false,
    //
    // ============ [ MISC ] ============
    // debugPrint: false,
    })
  }


})
