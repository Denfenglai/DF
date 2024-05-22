---
title: 浏览器puppeteer启动失败
order: 1
icon: chrome
tag:
  - 常见问题
category:
  - Chromium
---

::: note Chromium puppeteer启动失败 ＆ 实例崩溃或关闭
如图
![例图](/img/Chromium.jpg)
:::

::: warning 使用脚本
脚本包含了以下全部方法
```bash
bash <(curl -sL gitee.com/DengFengLai-F/yz/raw/master/Script/Chromium.sh)
```
:::


## 解决方法
::: tip 方法一
在云崽根目录执行
```bash
pnpm add puppeteer@13.7.0 -w
```
:::  

::: warning 方法二
在云崽根目录执行
```bash
pnpm uninstall puppeteer
pnpm install puppeteer@19.8.3 -w
node ./node_modules/puppeteer/install.js
```
:::
    
::: info 方法三
执行:
```bash
apt remove chromium -y
apt-get install chromium-browser -y
```
::: danger 
此方法仅限支持apt的系统！
:::
    
::: info 方法四
 [设置绝对路径](https://www.wolai.com/u5Z8Q4tbAcPZWQ4TK8wZCq)
:::


## 中文字体
修复菜单乱码

::: code-tabs#shell

@tab apt

```bash
apt install -y fonts-wqy-microhei
```

@tab yum

```bash
yum install -y wqy-microhei-fonts
```

@tab pacman

```bash
pacman -S wqy-microhei
```
:::
    
