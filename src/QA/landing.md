---
title: 禁止登陆
order: 1
icon: token
tag:
  - 常见问题
category:
  - 登陆
---

:::info
目前的常用Yunzai框架有三种

```
oicq 老版Yunzai所用的框架
icqq 目前喵云崽所用的框架
gocq TRSSYunzai所用的框架
```

icqq是不会有版本低的  
通常禁止登录会有相对于的错误码  
请根据错误码诊断你的问题
:::
::: tip 错误码45:
在Yunzai根目录执行

```bash
bash <(curl -sL gitee.com/Wind-is-so-strong/code/raw/master/code45.sh)
```

Windows在Yunzai目录下打开git执行  
:::
:::danger 错误码:237
![例图](/img/237.jpg)
很遗憾，237是登录频繁的风控  
可以选择过一段时间再登录  
或者换另外一个账号  
当然也有可能是你ticket真的输错了！
:::
::: warning 错误码:235

```
不知道是什么问题
但是235把虚拟设备删了应该就行了
删了虚拟设备启动云崽就会生成新的
```

:::
::: warning 错误码:238

```
一般都是由手表协议使用密码登录触发的
手表协议只支持扫码登陆
换别的协议就可以了
```

:::

### 删除虚拟设备教程

::: code-tabs#shell

@tab Yunzai

```bash
rm -rf data/device.json
```

@tab Miao-Yunzai

```bash
rm -rf data/icqq
```

:::
