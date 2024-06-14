---
title: PM2报错
order: 1
icon: arrow
tag:
  - 后台运行
category:
  - 常见问题
---

::: info
常在`#重启`或`后台启动`时出现
![pm2报错](/img/PM2.png)
:::

::: warning
首先转到Yunzai目录  
Windows直接在根目录右键打开git  
Linux执行

```bash
cd ~/Yunzai-Bot  #如果你是别的目录名你就cd你自己的
```

:::

:::tip 修复

### 1.升级依赖

```bash
pnpm update
```

### 2.安装依赖

```bash
pnpm install -P
```

### 3.全局安装PM2

```bash
pnpm install pm2 -g
```

### 4.更新PM2

```bash
pm2 update
```

依次执行即可
:::
