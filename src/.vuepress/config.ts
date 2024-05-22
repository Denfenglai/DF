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
      }
    },
  },
  theme: hopeTheme({
    docsRepo: "https://github.com/Denfenglai/DF",  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    docsDir : "/src/",  //仓库网页存放的路径
    docsBranch: "master", //网页仓库的分支
    repo: "https://gitee.com/Wind-is-so-strong/yz", // 默认为 GitHub. 同时也可以是一个完整的 URL
    repoLabel: "Gitee",   // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoDisplay: true,  // 是否在导航栏内显示仓库链接，默认为 `true`
    
    logo: "/DF.jpg", //导航栏logo
    fullscreen: true,
    
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
        { text: "🍀 早苗Bot", link: "https://www.yuque.com/km57bt/hlhnxg/hoxlh53gg11h7r3l" },
        { text: "💰 打赏", link: "/Reward.md" },
    ],
    plugins: {
      copyCode: {
        showInMobile: true
       }, //在移动端启动复制代码
      mdEnhance: {
        card: true,//启用卡片
        figure: true,// 启用 figure
        imgLazyload: true, // 启用图片懒加载
        imgMark: true, // 启用图片标记
        imgSize: true,// 启用图片大小
        codetabs: true, // 多行代码块
        mark: true, //标记        
      },
    },// 插件
  }),
  // Enable it with pwa
  // shouldPrefetch: false,
});