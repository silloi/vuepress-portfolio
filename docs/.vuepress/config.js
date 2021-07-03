module.exports = {
  lang: 'en-US',
  title: 'Portfolio',
  description: 'Portfolio of silloi',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'Portfolio',
      description: 'Portfolio of Silloi',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'Portfolio',
      description: 'Portfolio of Silloi',
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
          // // NavbarGroup
          // {
          //   text: 'Group',
          //   children: ['/group/foo.md', '/group/bar.md'],
          // },
        ],
      },
      '/ja/': {
        selectLanguageName: '日本語',
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
