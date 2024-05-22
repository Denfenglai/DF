---
title: 基础教程
icon: blog
order: 1
tag:
  - 教程
  - 基础
category:
  - Yunzai
---

### ⚠️搜索引擎的使用
> 在使用过程中会难免遇到特别多的问题   
> 其中就避免不了利用搜索引擎查找问题   
> 因此你至少掌握一种搜索引擎的使用本领

::: tip 国内常见的搜索引擎
- [百度](https://baidu.com/)
- [搜狗](https://wap.sogou.com/)
- [必应](https://cn.bing.com/)
- [360搜索](https://m.so.com/)
- [神马搜索](https://m.sm.cn/)   
以上的搜索引擎你至少要掌握一种   
如不会使用搜索引擎   
请立刻离开本页面  
:::

### ✨Yunzai-Bot特点
---
上手简单、功能众多、持续维护、免费开源、一键部署、快速管理，通过米游社接口，查询原神游戏信息，快速生成图片返回。  

### 🌱环境准备
---
机器人的运行环境是机器人工作所必需的基础设施和条件。这包括硬件、操作系统、软件框架和其他支持组件。机器人的运行环境的质量和适应性对于机器人的性能和功能至关重要。  
#### 硬件
- [操作系统要求](system.md)  
- [硬件性能要求](hardware.md)   

#### 软件环境
- [Node.js](node.md)
- [Redis](redis.md)
- [Git](Git.md)
- [pnpm](pnpm.md)

### 🍁克隆项目到本地
---
- 克隆[Yunzai-Bot](https://gitee.com/yoimiya-kokomi/Yunzai-Bot)到本地    

Windows在文件夹右键选择`Git bash`执行  
Linux直接执行
```bash
git clone --depth=1 -b main https://gitee.com/yoimiya-kokomi/Yunzai-Bot.git
```
- 使用[pnpm](pnpm.md)安装依赖
```bash
cd Yunzai-Bot #进入Yunzai目录
pnpm install -P
```

### 🌸启动
---
- Windows双击`redis`启动
- Linux输入`redis-server --daemonize yes`
```bash
cd Yunzai-Bot
node app
```

### ⚡登陆
---
首次登陆时依次输入`账号``密码`和`主人QQ`   
登陆端口优先选择`iPad`   
登陆失败则看[错误码文档](/QA/landing.md)    
需要注意:当你使用`协议6`oldAndroid时不可再用安卓设备登陆

### ☔测试
正常登录成功之后可以在群聊对机器人发送`#帮助`   
- 检查puppeteer是否能正常启动  [修复](/QA/chrome.md)
- 菜单字体有没有乱码  [修复](/QA/chrome.md#中文字体)   

检查没有问题之后再发送`#重启`
- 检查是否重启报错  [修复](/QA/pm2.md)
- 重启后在终端输入`npm run log`查看日志

### ⭐基础命令
以下是一些Yunzai基础命令   

命令:`cd Yunzai-Bot`    
描述:执行命令前务必转到`Yunzai-Bot`目录   
       
命令: `node app`   
描述: 前台启动Yunzai-Bot  
      
命令: `npm run login`   
描述: 重新配置机器人QQ   
      
命令: `npm run start`   
描述: 后台启动Yunzai-Bot   

命令: `npm run log`   
描述: 查看后台运行日志   
     
命令: `npm stop`    
描述: 停止后台运行   

### 🌈配置文件
---
你可以通过修改`Yunzai-Bot/config/config`中的文件来修改设置
     
- 文件:`group.yaml`   
群聊CD、别名设置、是否只关注@、表情添加限制、功能黑白名单…
    
- 文件:`bot.yaml`  
日志输出等级、群聊是否过滤自己消息、chromium路径、ffmpeg路径…
    
- 文件:`other.yaml`  
主人QQ、是否自动同意好友、是否自动退群、禁用私聊设置、黑白名单…  

- 文件:`qq.yaml`  
QQ账号、密码、登陆端口…   

- 文件:`redis.yaml`  
没事不要动

- 文件:`notice.yaml`  
机器人掉线发送信息


### 🧩插件安装
---
Yunzai-Bot有相当多的插件作者开发用于扩展的plugin和js插件，这里我推荐收藏由[渔火](https://gitee.com/yhArcadia)创建，大家共同收集上传的[Yunzai-Bot索引库](https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index)   
- 安装注意:   
克隆插件时请务必要cd到你的Yunzai目录里面再执行安装命令    
- 部分插件需要额外安装依赖请务必安装   
如不安装可能会导致插件报错    
- 在QQ群中也发现有特别多的Js插件   
我们可以通过[戏天插件](https://gitee.com/XiTianGame/xitian-plugin)来将其安装到我们的Bot上   
首先安装[戏天插件](https://gitee.com/XiTianGame/xitian-plugin)
然后私聊发送`#安装插件`随后发送js插件重启即可

### 🎲FFmpeg配置
---
[FFmpeg](http://ffmpeg.org/)是让你的Yunzai发送语音和视频必不可少的一项，它的主要功能是编码和转码以及编辑合并等，是丰富机器人功能必不可少的。  
- [配置教程](/QA/ffmpeg/)





