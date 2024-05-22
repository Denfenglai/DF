---
title: Windows系统
icon: customize
order: 1
tag:
  - ffmpeg
  - Windows
  - 配置
  - 教程
category:
  - Windows
---

### 1.下载ffmpeg并解压到一个不经常动的位置
- [下载地址](https://wwp.lanzoub.com/ifhhC091vp3a)  

### 2.解压完成后，双击进入bin文件夹
![进入bin文件夹](/ffmpeg/1.jpg)
- 点击上方空白处  
![点击上方空白处](/ffmpeg/11.jpg)
- 复制路径  
![复制路径](/ffmpeg/10.jpg)

### 3.按下win键＋r打开对话运行框
- 输入`sysdm.cpl`并回车  
![运行](/ffmpeg/9.jpg)
### 4.打开环境变量
![高级](/ffmpeg/7.jpg =200x300)![ffm](/ffmpeg/8.jpg =200x300)

### 5.配置环境变量
- 点击pash栏，点击编辑，点击新建  

![环境变量](/ffmpeg/5.jpg =200x300)![环境变量](/ffmpeg/4.jpg =200x300)
- 粘贴刚刚复制的路径，点击确定
![粘贴路径](/ffmpeg/3.jpg)
- 下面还有一个，同上操作
![粘贴路径](/ffmpeg/12.jpg)

#### 点击确认，把能确认的都确认了

### 6.验证是否配置成功
win+r然后输入cmd打开终端  
然后输入ffmpeg，如果有以下输出就算安装成功  
![检查](/ffmpeg/13.jpg)

::: warning 
V3版本开始就需要在config\bot.yaml中加上路径   
（注意后面需要带上\ffmpeg.exe）  

![配置](/ffmpeg/14.jpg)
