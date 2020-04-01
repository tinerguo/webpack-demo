# webpack babel 使用

## 一、@babel/polyfill
Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API ，
比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

### 依赖包
~~~
    "dependencies": {
        "@babel/polyfill": "^7.0.0"
     },
     "devDependencies": {
        "@babel/cli": "^7.1.2",
        "@babel/core": "^7.1.2",
        "@babel/preset-env": "^7.1.0",
        "webpack": "^4.23.1",
        "webpack-cli": "^3.1.2"
     }
~~~
### 配置babel.config.js
~~~

     module.exports = (api) => {
      const presets = [
        [
            "@babel/preset-env", {
              "targets": {
                "chrome": "70",
                "ie": "11"
              },
              modules:commonjs,
              "useBuiltIns": "usage",
              corejs: 2,
              debug:false
        ]
      ];
      api.cache(false);
      return { presets };
    }
~~~

### 设置useBuiltIns的usage和entry的区别
1.如果设置"useBuiltIns": "usage" babel 会根据targets中设置的浏览器引入相应的模块，不是完全引入只是把需要的core-js引入

2.如果设置entry的话就需要在入口文件处加入import 'polyfill'

### 测试 userBuiltIns 按需导入
1.设置 ie11后在编译后会自动引入core-js 的一些polyfill包
2.去掉 ie11编译后的js文件中就会自动去掉core-js导入的包

### corejs: 2 配置

在babel7.x env reset 中需要设置corejs:2


## 二、babel-preset-env 常用配置

modules：
    将ES6模块语法转换为另一种模块类型：amd commonjs systemjs umd
    false
