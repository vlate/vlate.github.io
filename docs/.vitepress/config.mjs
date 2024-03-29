import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/vlate/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "CHORA",
  description: "A NEW SPACE",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '说明', link: '/info/info' },
      { text: '摘要', link: '/note/part1/' },
      {
        text: "笔记",
        items: [
          {
            text: "guide",
            link: '/guide/one',
          },
          { text: "config", link: '/config/' },
          // { text: "003", link: '/guide/two' },
        ],
      },
    ],


    outlineTitle: "文章目录",
    outline: [2, 6],
    logo: "logo.svg", // 配置logo位置，public目录

    navbar: true, //开启导航栏，我设置成false也没啥用不知道为啥
    // sidebar: false, // 关闭侧边栏
    // lastUpdated: true, // 显示上次修改时间
    aside: "true", // 设置右侧侧边栏在左侧显示

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsed: false, //显示折叠按钮，打开时折叠为ture
          items: [
            { text: 'Index', collapsed: false, link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
      '/info/': [
        {
          text: '简介',
          collapsed: false, //显示折叠按钮，打开时折叠为ture
          items: [
            { text: '首页', link: '/info/info' },
            // { text: 'One', link: '/info/info' },
            // { text: 'Two', link: '/info/info' }
          ]
        }
      ],

      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ],
      '/note/part1/': [
        {
          text: 'note',
          collapsed: false, //显示折叠按钮，打开时折叠为ture
          items: [
            { text: '夜鸟', link: '/note/part1/' },
            { text: '长江图', link: '/note/part1/长江图' },
            { text: '班扎古鲁白玛的沉默', link: '/note/part1/班扎古鲁白玛的沉默' }
          ]
        }
      ]
    },

    // [
    // {

    // text: 'Examples',
    // items: [
    //   { text: 'Markdown Examples', link: '/markdown-examples' },
    //   { text: 'Runtime API Examples', link: '/api-examples' },
    //   // { text: 'note 1', link: '/note/part1/note1' }
    // ],
    // },
    //   {
    //     text: 'part1',
    //     items: [
    //       { text: 'note1', link: '/note/part1/note1' },
    //     ],

    //   },
    //   {
    //     text: 'part2',
    //     items: [
    //       { text: 'note2', link: '/note/part2/note2' },
    //     ],
    //   }
    // ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vlate' }
    ],



    // // 底部配置
    // footer: {
    //   copyright: "书写是为了遗忘之后再记得。",
    // },


    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
