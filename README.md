# react-webpack-demo
babel-loader8  babel-core7

## 1. 搭建步骤参考

https://www.jianshu.com/p/c53473191910?utm_campaign=hugo&utm_medium=reader_share&utm_content=note&utm_source=weixin-friends 【简书】

https://www.cnblogs.com/52tech/p/9917661.html 【论坛:babel最新】

## 2.连接 redux

(1) 调整目录结构,调整webpack.config.js路径配置

(2) App -> Router -> Provider

(3) 在middleware文件夹下面,写异步请求action

(4) 封装createStoreWithMiddleWare,生成store

## 3.koa2+mongoose启动服务

(1)src/server.js，编写后台代码,启动服务

(2)src/server文件,编写数据库部分

连接数据库-> 建模、建类 -> 操作数据库

(3)package.json里，自定义命令。 build+start

## 关键

(1) cnpm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D

(2) webpack.config.js

```
module : {
        // 所有第三方模块的配置规则（Webpack默认只能打包js文件，对于其他vue，png，react是无法直接使用的）
        // 只要代码中有webpack不能识别的规则，就需要配置loader
        rules : [
            {test : /\.(js|jsx)$/, use : 'babel-loader', exclude : /node_modules/}  // 这里的exclude是不能少的
        ]
}
```

(3).babelrc

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": []
}
```

## bebel优化

babel-runtime: 模块复用

babel-polyfil: 转义es6部分api

## 遇到问题

1.自从webpack4, webpack 需要结合  webpack-cli使用

2.Cannot find module '@babel/core'

babel-loader@8 requires Babel 7.x (the package '@babel/core')

use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

解决:使用最新的babel版本(写法:@babel/)

3.webpack报错:  

webpack 升级Getting error: configuration.resolve.extensions[0] should not be empty

解决: extensions 数组中不能使用空字符串，需要使用* 代替。 如:extensions: [‘*’, ‘js’, ‘ts’]

