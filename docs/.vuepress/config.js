module.exports = {
  lang: 'en-US',
  title: 'Portfolio',
  description: 'NISHIYAMA Yudai',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
    },
    '/ja/': {
      lang: 'ja-JP',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
          // NavbarItem
          {
            text: 'Resume',
            link: '/resume/',
          },
          {
            text: 'Works',
            link: '/works/',
          },
          {
            text: 'Papers',
            link: '/papers/',
          },
          // // NavbarGroup
          // {
          //   text: 'Group',
          //   children: ['/group/foo.md', '/group/bar.md'],
          // },
        ],
      },
      '/ja/': {
        selectLanguageName: '日本語',
        selectLanguageText: '言語を選択',
        navbar: [
          // NavbarItem
          {
            text: '履歴書',
            link: '/ja/resume/',
          },
          {
            text: '著作物',
            link: '/ja/works/',
          },
          {
            text: '論文',
            link: '/ja/papers/',
          },
        ],
      },
    },
    logo: '/images/logo.svg',
    sidebarDepth: 1,
    repo: 'silloi/vuepress-portfolio',
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
  ],
}
