---
title: Node.js 简介与安装指南
icon: nodeJS
order: 1
---

## 💡什么是 Node.js？

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，用于构建服务器端和命令行工具。它提供了一个事件驱动、非阻塞式的 I/O 模型，使得 JavaScript 可以高效地处理并发请求。Node.js 还拥有丰富的包管理器（npm）和生态系统，其中包含了大量的开源模块和框架，可大大简化开发过程。

## 🎖️Node.js 安装指南

以下是在常见操作系统上安装 Node.js 的简单步骤：

### Windows 安装

1. 访问 [Node.js](https://nodejs.cn/download/) 官方网站，下载适用于 Windows 的 LTS 版本（长期支持版本）的安装包。
2. 双击运行下载的安装包，并按照安装向导的指示进行安装。
3. 完成安装后，打开命令提示符或 PowerShell，并运行以下命令以验证 Node.js 是否安装成功：
```bash
node -v
```
### macOS 安装

1. 访问 [Node.js](https://nodejs.cn/download/
) 官方网站，下载适用于 macOS 的 LTS 版本（长期支持版本）的安装包。
2. 双击运行下载的安装包，并按照安装向导的指示进行安装。
3. 安装完成后，在终端中运行以下命令以验证 Node.js 是否安装成功：
```bash
node -v
```
### Linux 安装

1. 使用包管理器安装 Node.js。例如，在 Ubuntu 上，打开终端并运行以下命令：
```bash
sudo apt-get update
sudo apt-get install nodejs
```
   如果同时需要 npm（Node.js 包管理器），可以运行以下命令安装：
```bash
sudo apt-get install npm
```
2. 安装完成后，在终端中运行以下命令以验证 Node.js 是否安装成功：
```bash
node -v
```
## 💌验证安装

无论哪种操作系统，通过在命令提示符、PowerShell 或终端中输入 `node -v` 命令，如果返回 Node.js 版本号，则说明 Node.js 安装成功。

现在，你已经成功安装了 Node.js，可以开始学习和使用 Node.js 开发应用程序了！

请注意，上述步骤是适用于简单的本地安装。在生产环境中，可能需要更多的配置和安全性考虑。建议查阅 Node.js 官方文档或相关资源，以获取更详细和适合实际情况的安装和配置指南。
