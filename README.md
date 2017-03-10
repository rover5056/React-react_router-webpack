# React-react-router-webpack
不用redux的轻便型结构，减轻项目重量，同时保留一个数据仓库（乞丐版REDUX）

主要库:react + react-router + webpack

这是个主要使用 webpack + react + es6 + cssModule 的 demo，包含 React 技术栈全家桶，可作为开发模板使用。


##主要功能特征
- 使用热加载，文件改变页面自动刷新
- 文件 Code Spliiting 按需加载
- 使用 DllPlugin 将依赖文件独立打包
- 使用 ESlint 检测 js
- less->css，autoprefixer
- 小于 8k 图片转化为 base64，图片压缩
- 文件压缩、添加 MD5
- 使用 Fetch，抛弃 Ajax

---------
## 特点

在不使用REDUX的情况下，实现使用父路由来存储全局变量数据。可以避免因为Router改变，销毁组件后的数据丢失。

在轻型项目中使用效果非常好用。


---------



## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [webapck](https://webpack.github.io/)


## Usage
####安装
```
git clone https://github.com/rover5056/React-react-router-webpack.git

npm install
```
####开始开发
```
//启动服务器开始开发
npm start
```
####生产打包
```
npm run builwin
```


## Linting
本项目使用 ESlint，项目开发过程中会自动检测 js

也可手动检测：
```
npm run lint src
```

检测完毕会在命令行显示所有纠错提示


## Dependencies
- [React](https://github.com/facebook/react)
- [React-router](https://github.com/reactjs/react-router)
- [redux](https://github.com/reactjs/redux)
- [fetch](https://github.com/github/fetch)
- [postcss](https://github.com/postcss/postcss)
- [eslint](https://github.com/eslint/eslint)
- [babel-loader](https://github.com/babel/babel-loader)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)