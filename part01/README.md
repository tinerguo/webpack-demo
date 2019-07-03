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
    上面通过两种方式
