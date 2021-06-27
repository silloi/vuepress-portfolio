module.exports = {
  lang: 'en-US',
  title: 'Portfolio',
  description: 'Portfolio of silloi',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'Portfolio',
      description: 'Portfolio of Silloi',
    },
    '/ja/': {
      lang: 'ja_JP',
      title: 'Portfolio',
      description: 'Portfolio of Silloi',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/ja/': {
        selectLanguageName: '日本語',
      },
    },
    navbar: [
      // NavbarItem
      {
        text: 'Resume',
        link: '/resume/',
      },
      // // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
    ],
    logo: '/images/logo.svg',
  },
}
