# webpack入门及bundle代码分析
## 环境搭建
    1. npm init 系统会生成 package.json
    2. 创建entry.js 和 first.js

```javascript
//entry.js
require('./first')
//first.js
var h2= document.createElement("h2")
h2.innerHTML="不是吧，那么快第二个打包程序啦！";
document.body.appendChild(h2);
```


```javascript
//执行
webpack entry.js --output-filename=./bundle.js --mode=development //输出 dist/bundle.js
```
    3. 手动创建webpack.dev.config.js


```javascript
//执行
npm run build //输出 dist/bundle.webpack.js
```

## bundle代码分析
上面通过两种方式分别输出：bundle.js 和 bundle.webpack.js 两种方式打包的代码没有什么区别，webpack配置文件打包后的文件多出一个序号为0的模块引入的是entry.js：
```javascript
//84行
return __webpack_require__(__webpack_require__.s = 0);

//111行
0:(function(module, exports, __webpack_require__) {
    eval("module.exports = __webpack_require__(/*! ./entry.js */\"./entry.js\");\n\n\n//# sourceURL=webpack:///multi_./entry.js?");
})

```

既然没有什么区别我们就来分析一下：
```javascript
(function(modules) {
    return __webpack_require__(__webpack_require__.s = "./entry.js");
})
({
    "./entry.js":(function(module, exports, __webpack_require__) {

        eval("__webpack_require__(/*! ./first */ \"./first.js\")\n\n\n//# sourceURL=webpack:///./entry.js?");

    }),

    "./first.js":(function(module, exports) {

        eval("var h2= document.createElement(\"h2\")\nh2.innerHTML=\"不是吧，那么快第二个打包程序啦！\";\ndocument.body.appendChild(h2);\n\n\n//# sourceURL=webpack:///./first.js?");

    })
);
```
