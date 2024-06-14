import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import metingPlugin from "vuepress-plugin-meting2";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "DF",
      description: "脚本",

      // 页面元
      metaLocales: {
        docsRepo: "https://github.com/Denfenglai/DF",
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  theme: hopeTheme({
    docsRepo: "https://github.com/Denfenglai/DF", // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    docsDir: "/src/", //仓库网页存放的路径
    docsBranch: "master", //网页仓库的分支
    repo: "https://gitee.com/Wind-is-so-strong/yz", // 默认为 GitHub. 同时也可以是一个完整的 URL
    repoLabel: "Gitee", // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoDisplay: true, // 是否在导航栏内显示仓库链接，默认为 `true`

    logo: "/DF.jpg", //导航栏logo
    fullscreen: true,

    blog: {
      roundAvatar: true,
      hotReload: true,
      name: "等风来",
      avatar: "https://q1.qlogo.cn/g?b=qq&s=0&nk=3139373986",
      intro: "/",
      medias: {
        Baidu: "https://mr.baidu.com/r/19wFkMt0Gt2?f=cp&u=4d151be3e49afc29",
        BiliBili: "https://b23.tv/8sOJIMw",
        Discord: "https://discord.gg/VxqGvm5FKE",
        //      Email: "http://3139373986@qq.com",
        Gitee: "https://gitee.com/DengFengLai-F",
        GitHub: "https://github.com/Denfenglai",
        //      Gmail: "http://dengfenglai547@gmail.com",
        QQ: "http://qq.dengfenglai.cloud/",
      },
    },

    encrypt: {
      config: {
        // 这会加密整个目录，并且多个密码都是可用的
        "/docs/sese.html": ["DF", "等风来", "打胶", "打个胶先"],
      },
    },
    iconAssets: "iconfont",
    navbar: [
      { text: "💎 主页", link: "/README.md" },
      { text: "🥝 上手", link: "/Linux.md" },
      { text: "🌈 常见问题", link: "/QA/" },
      { text: "🌐 好物分享", link: "/docs/link.md" },
      {
        text: "🍀 早苗Bot",
        link: "https://www.yuque.com/km57bt/hlhnxg/hoxlh53gg11h7r3l",
      },
      { text: "💰 打赏", link: "/Reward.md" },
    ],

    plugins: {
      blog: true,
      /** 启动评论服务 */
      comment: {
        provider: "Waline",
        serverURL: "https://waline.dengfenglai.icu/",
      },
      components: {
        // 启用的组件
        components: ["BiliBili", "VPCard"],
      },
      copyCode: {
        showInMobile: true, //在移动端启用复制代码
      },
      mdEnhance: {
        /* MdEnhance 插件配置
         * https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html
         */
        hint: true, // 提示容器
        figure: true, // 启用 figure 图片描述
        imgLazyload: true, // 启用图片懒加载
        imgMark: true, // 启用图片标记
        imgSize: true, // 启用图片大小
        codetabs: true, // 多行代码块
        mark: true, //标记
        align: true, // 自定义对齐
        tasklist: true, // 任务列表
        attrs: true, // 属性支持
        demo: true, // 代码演示
        include: true, // 导入文件
        footnote: true, // 启用脚注
        sub: true, // 启用下角标
        sup: true, // 启用上角标
        tabs: true, // 启用选项卡
        vPre: true, // 启用 v-pre 容器

        playground: {
          presets: ["ts", "vue"],
        },

        stylize: [
          // 样式化
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
      },
    },
  }),
  // Enable it with pwa
  // shouldPrefetch: false,
});
