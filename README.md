# react-webpack-demo
babel-loader8  babel-core7

## 搭建步骤参考

https://www.jianshu.com/p/c53473191910?utm_campaign=hugo&utm_medium=reader_share&utm_content=note&utm_source=weixin-friends 【简书】

https://www.cnblogs.com/52tech/p/9917661.html 【论坛:babel最新】

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

## 优化

babel-runtime: 模块复用

babel-polyfil: 转义es6部分api

## 遇到问题

1.自从webpack4, webpack 需要结合  webpack-cli使用

2.Cannot find module '@babel/core'

babel-loader@8 requires Babel 7.x (the package '@babel/core')

use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

解决:使用最新的babel版本(写法:@babel/)
