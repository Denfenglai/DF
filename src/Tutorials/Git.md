---
title: Git 简介与常见命令用法
icon: git
order: 1
---

## 💡什么是 Git？

Git 是一个分布式版本控制系统，用于跟踪文件的更改并协作开发代码。它可以帮助团队成员协同工作，记录文件的历史变更，提供分支管理功能等。Git 是目前最流行的版本控制系统之一，广泛应用于软件开发项目中。


## 💎Git 安装教程

### 步骤 1：下载 Git 安装包

根据你的操作系统，选择相应的 Git 安装包进行下载。你可以在 [Git 官方网站](https://git-scm.com/downloads)上找到适合你操作系统的安装包

### 步骤 2：安装 Git

#### Windows 系统

运行下载的 Git 安装包，按照默认设置进行安装。你可以选择自定义安装路径或使用默认路径。在安装过程中，可以根据提示进行一些选择，例如在路径环境变量中添加 Git。

#### macOS 系统

运行下载的 Git 安装包，按照默认设置进行安装。Git 通常已经默认安装在 macOS 系统中，如果已经安装了 Xcode 开发工具，那么 Git 已经随之安装。如果需要更新 Git 版本，可以通过 Homebrew 等软件包管理器进行更新。

#### Linux 系统

对于常见的 Linux 发行版，可以通过系统的软件包管理器进行安装。以下是一些常见发行版的安装命令：

- Ubuntu / Debian：

```bash
sudo apt-get install git
```
- Fedora：

```bash
sudo dnf install git
```
- CentOS：

```bash
  sudo yum install git
```
### 步骤 3：验证安装

安装完成后，打开命令行终端，并执行以下命令来验证 Git 是否成功安装：

```bash
git --version
```
如果成功输出 Git 版本信息，即表示 Git 安装成功。


## 🎮Git 常见命令用法

下面是一些常见的 Git 命令用法，供你参考：

### git init

用法：`git init`

说明：将当前目录初始化为一个 Git 仓库，创建一个空的 Git 仓库。

### git add

用法：`git add <文件名>`

说明：将文件添加到 Git 的暂存区，准备提交。

### git commit

用法：`git commit -m "提交信息"`

说明：将暂存区中的文件提交到本地仓库，添加一条提交信息。

### git status

用法：`git status`

说明：查看当前 Git 仓库的状态，显示文件的变更情况。

### git log

用法：`git log`

说明：查看当前分支的提交历史记录，显示每个提交的作者、日期和提交信息。

### git branch

用法：`git branch`

说明：列出当前 Git 仓库的所有分支，显示当前所在分支。

### git checkout

用法：`git checkout <分支名>`

说明：切换到指定的分支。

### git merge

用法：`git merge <分支名>`

说明：将指定的分支合并到当前分支。

### git remote

用法：`git remote add origin <远程仓库URL>`

说明：将本地仓库与远程仓库进行关联。`origin` 是远程仓库的别名，可以自定义。

### git pull

用法：`git pull`

说明: 拉取远程仓库的最新提交到本地仓库。如果远程仓库更新与本地仓库出现冲突可使用`git pull -f`来强制更新,需要注意这会覆盖你的本地修改，请谨慎操作！

### git push

用法：`git push <远程仓库名> <分支名>`

说明：将本地的提交推送到远程仓库。

### git clone

用法：`git clone <远程仓库URL>`

说明：从远程仓库克隆整个代码库到本地。执行该命令后，会在当前目录下创建一个与远程仓库相同的代码库副本。

Git clone 是一个重要的命令，它允许开发者获取远程代码库的完整副本。克隆操作不仅包括代码文件，还包括完整的提交历史记录、分支信息等。使用 git clone 命令可以方便地开始在本地进行开发和协作。