# webpack babel 使用
## npx
~~~
    npx 调用项目安装的模块,npx 和npm是一起安装的
    cnpm install -D mocha
    cnode-modules/.bin/mocha --version
    npx mocha --version
~~~

## plugins
~~~
@babel/core，@babelb/cli 只有这两个是不行的还需要用到transform 中的各种插件
npm install --save-dev @babel/plugin-transform-arrow-functions
npx babel test.js --plugins @babel/plugin-transform-arrow-functions


@babel/plugin-transform-arrow-functions：要将箭头函数编译成普通函数需要@babel/plugin-transform-block-scoping：，要将const或者let变量编译成var变量需要
@babel/plugin-transform-classes，要将class关键字转化成传统基于原型的类需要

为了让插件进行统一管理需要用到.babelrc配置文件

"plugins": [
    "@babel/plugin-transform-runtime"
]

现在运行npx babel index.js >> out.js


~~~

## perset
~~~


babel提供了perset的概念就是插件包
@babel/preset-env
@babel/preset-flow
@babel/preset-react
@babel/preset-typescript


1.安装preset-env等效于三个插件包

Using plugins:
transform-template-literals {}
transform-literals {}
transform-function-name {}
transform-arrow-functions {}
transform-block-scoped-functions {}
transform-classes {}
transform-object-super {}
//...

~~~
