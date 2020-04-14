module.exports = {
  title: ' Technical Document',
  description: 'framework',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`,
      },
    ],
  ],
  dest: './docs/.vuepress/dist',
  ga: '',

  evergreen: true,
  // 配置导航
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
    ],
    lastUpdated: '上次更新',

    sidebarDepth: 2,
    sidebar: {
      '/guide/': getGuideSidebar(
        'A',
        'B',
        'C'
      )
    },
    repo: 'xxx',
    repoLabel: 'Github',
    docsRepo: 'xxx',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在github上编辑此页',
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
}

function getGuideSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "begin",
      ],
    },
    {
      title: groupB,
      collapsable: false,
      children: ['first'],
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'vuex',
      ],
    },
  ]
}
