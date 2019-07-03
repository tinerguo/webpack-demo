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
1. 外部结构
bundle 最外部就是一个自执行函数，参数就是我们的entry.js 和 first.js 对象
```javascript
(function(modules) {
    return __webpack_require__(__webpack_require__.s = "./entry.js");
})
({
    "./entry.js":(function(module, exports, __webpack_require__) {
        eval();
    }),
    "./first.js":(function(module, exports) {
        eval();
    })
);
```
2. 分析2 __webpack_require__ 分析
在bundle函数体重有一个__webpack_require__内部函数，这个函数作用是什么呢？
```javascript
// The module cache
// 模块缓存
/******/ 	var installedModules = {};
// The require function
// require 方法，接受一个模块ID作为参数
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
                // 检测是否存在缓存
/******/ 		if(installedModules[moduleId]) {
                    //如果存在那么直接返回exports
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
                // 不存在则生成新的模块,并放到缓存模块中
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
                // call的方式加载模块 this转交，参数转交，对应其打包构建好的每个模块的参数结构。
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
                // 表示已加载
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
                // 返回模块的exports
/******/ 		return module.exports;
/******/ 	}

```

知识点：javascript的call方法使用，相关知识 this、call、bind、apply的使用

```javascript
//call和bind是一样的，call是bind的语法糖，区别是call接收的是参数列表，apply接收的事参数数组
//此方法的第一个参数为改变后调用这个函数的对象，this指代第一个参数

var num = 9;
var mymodule = {
  num: 81,
  getNum: function() {
      console.log();
      console.log(this.num);
  }
};

mymodule.getNum();//81

var o2 = mymodule.getNum;
o2();//9

//下面展示bind和apply、call的区别
var boundGetNum = o2.bind(mymodule);
boundGetNum(1,2,3);//81

o2.apply(mymodule,[1,2,3]);//81
o2.call(mymodule,1,2,3);//81



```



参考：https://blog.csdn.net/weixin_34391445/article/details/88216015

3. 分析2 __webpack_require__ 其他属性

```javascript

// 入口模块的ID
__webpack_require__.s = the module id of the entry point

//模块缓存对象 {} id:{ exports /id/loaded}
__webpack_require__.c = the module cache

// 所有构建生成的模块 []
__webpack_require__.m = the module functions

// 公共路径，为所有资源指定一个基础路径
__webpack_require__.p = the bundle public path
//
__webpack_require__.i = the identity function used for harmony imports

// 异步模块加载函数，如果没有再缓存模块中 则用jsonscriptsrc 加载  
__webpack_require__.e = the chunk ensure function

// 设定getter 辅助函数而已
__webpack_require__.d = the exported property define getter function

// 辅助函数而已 Object.prototype.hasOwnProperty.call
__webpack_require__.o = Object.prototype.hasOwnProperty.call

// 给exports设定attr __esModule
__webpack_require__.r = define compatibility on export

// 用于取值，伪造namespace
__webpack_require__.t = create a fake namespace object

// 用于兼容性取值（esmodule 取default， 非esmodule 直接返回module)
__webpack_require__.n = compatibility get default export

// hash
__webpack_require__.h = the webpack hash

//
__webpack_require__.w = an object containing all installed WebAssembly.Instance export objects keyed by module id

// 异步加载失败处理函数 辅助函数而已
__webpack_require__.oe = the uncaught error handler for the webpack runtime

// 表明脚本需要安全加载 CSP策略
__webpack_require__.nc = the script nonce


```
