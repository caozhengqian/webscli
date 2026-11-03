
## 技术积累工具两步走(node18+)
为公司沉淀技术，已有（css架构项目、webpack4打包项目）
### 一：快速使用
1. 安装：`npm i -g @webscli/c`
2. 执行： `webscli-c init`
3. 选择公司积累的`项目`或`页面`
4. 会根据选择自动下载

### 二：新增技术流程
1. 选出优秀技术和功能，放入[模板git地址](https://github.com/caozhengqian/webstemplate.git)，并发布到`npm publish`,需要登录npm
2. 进入 webscliI
   1. `wescliI`的`createTemplate`
   2. 新增一个数组
   3. 修改版本号
   4. 登录npm，发布`npm publish`
3. 进入 `webscliC`
   1. 执行安装刚上传的wescliI版本号，比如`npm i @webscli/i@1.2.8`，
   2. 修改版本号
   3. `npm publish`

## 项目相关
### 基本脚手架
1. webscliC，创建bin目录下index，首行要用"#!/usr/bin/env node"
2. package.json加"bin"
3. `npm publish` 发布
4. `npm i -g @webscli/c`
   
### 库类介绍
1. `commander`是创建控制台的-v,-help等命令
2. `chalk`和`ora`返回文本颜色、样式、loading状态
3. `inquirer`监听键盘、光标、事件等