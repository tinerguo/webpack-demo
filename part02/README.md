# webpack 模块化解析


## 一、loader

~~~
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: { loader: 'babel-loader' } // options 在 .babelrc 定义
    }
  ]
}
~~~

> test 属性，用于表示出应该被对应的loader进行转换的某个或某些文件
use 属性，表示进行转换时，应该使用哪个loader

loader支持链式，顺序是相反的，返回值是一个一个传递的

## 二、postcss-loader

### 安装
~~~
cnpm install --save-dev postcss-loader autoprefixer
~~~
### 创建 postcss.config.js
> 在webpack.css.config.js 同目录下创建postcss.config.js

~~~
module.exports = {
    plugins:[
        require("autoprefixer")
    ]
}
~~~
### 配置
~~~
    const ExtractPlugin = require('extract-text-webpack-plugin')

    test: /\.css$/,
    use:ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
          'css-loader',
          {
              loader: "postcss-loader"
          }
      ]
  })
  new ExtractPlugin('static/css/[name]_[md5:contenthash:hex:8]111.css'),
~~~
###  webpack 4.x后需要安装extract的下面版本
~~~

  "extract-text-webpack-plugin": "^4.0.0-beta.0",
~~~

### 要想post-loader 起作用需要在package.json中设置
~~~
  "browserslist": [
      "iOS >= 6",
      "Android >= 4",
      "IE >= 9"
  ]
~~~
