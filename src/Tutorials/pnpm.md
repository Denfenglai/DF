---
title: pnpm的介绍与安装
icon: npm
order: 1
---

## 💡`pnpm` 是什么？

`pnpm` 是一个面向 JavaScript 项目的包管理工具。它旨在解决传统的包管理工具（如 npm 和 Yarn）在包安装过程中的一些限制和性能问题。与传统的包管理工具不同，`pnpm` 使用硬链接来共享和重复使用已安装的包，从而显著减少磁盘空间的使用量，并加快包的安装速度。

`pnpm` 支持 npm 的生态系统，并提供类似的命令行界面和功能，但在性能和空间利用方面具有优势。它被广泛用于 JavaScript 项目，特别是在多个项目之间共享相同依赖项时。

## 🧩安装 `pnpm`

以下是 `pnpm` 的安装步骤：

### 使用 npm 安装

你可以使用 npm 在全局范围内安装 `pnpm`。打开命令行终端并执行以下命令：

```bash
npm install -g pnpm
```
这将在全局环境中安装 `pnpm`。

## 🕯️命令用法

### 安装依赖项

`pnpm install`: 用于安装项目中的所有依赖项。它会读取 `package.json` 文件中的依赖项列表，并将它们下载到 `node_modules` 目录下。

示例用法：

```bash
# pnpm install可简写为 pnpm i
pnpm i
pnpm install
```
   
`pnpm add`: 用于向项目添加新的依赖项。

示例用法：

```bash
pnpm add <依赖名称>
```
### 安装指定版本的依赖项

`pnpm add` 命令支持安装指定版本的依赖项。你可以在包名称后面使用 `@` 符号和版本号来指定特定的版本。

示例用法：

```bash
pnpm add <依赖名称>@<版本>
```
例如，要安装 `puppeteer` 的 `13.7.0` 版本，可以运行以下命令：

```bash
pnpm add puppeteer@13.7.0
```
### 升级依赖项

`pnpm update`: 用于更新依赖项至其最新可用版本。

示例用法：

```bash
pnpm update  #更新全部依赖
pnpm update <依赖名称> #单独更新某个依赖
```
### 卸载依赖项

`pnpm remove`: 用于从项目中卸载指定的依赖项。

示例用法：

```bash
pnpm remove <依赖名称>
```
### 显示依赖项信息

`pnpm ls`: 用于显示项目中已安装的所有依赖项及其版本信息。

示例用法：

```bash
pnpm ls
```
