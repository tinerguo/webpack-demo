# webpack vue-cli3使用
## 可以对文件进行 vue serve 和 vue build 进行开发
安装
~~~
npm install -g @vue/cli-service-global
~~~
命令
~~~
vue serve [options] [entry]
Options
    -o 打开浏览器
    -c 负责本地url
    -h 帮助信息
~~~
创建vue-cli项目，配置文件存储在~/.vuerc中
~~~
vue create vue-cli-demo
vue create
用法：create [options] <app-name>

创建一个由 `vue-cli-service` 提供支持的新项目


选项：

  -p, --preset <presetName>       忽略提示符并使用已保存的或远程的预设选项
  -d, --default                   忽略提示符并使用默认预设选项
  -i, --inlinePreset <json>       忽略提示符并使用内联的 JSON 字符串预设选项
  -m, --packageManager <command>  在安装依赖时使用指定的 npm 客户端
  -r, --registry <url>            在安装依赖时使用指定的 npm registry
  -g, --git [message]             强制 / 跳过 git 初始化，并可选的指定初始化提交信息
  -n, --no-git                    跳过 git 初始化
  -f, --force                     覆写目标目录可能存在的配置
  -c, --clone                     使用 git clone 获取远程预设选项
  -x, --proxy                     使用指定的代理创建项目
  -b, --bare                      创建项目时省略默认组件中的新手指导信息
  -h, --help                      输出使用帮助信息

  vue ui
~~~
如果还想使用vue2.x那么
~~~
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project

vue-cli-service serve
用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
 vue-cli-service build
 用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化

  vue-cli-service inspect
  用法：vue-cli-service inspect [options] [...paths]
选项：
  --mode    指定环境模式 (默认值：development)

  npx vue-cli-service help

  Usage: vue-cli-service <command> [options]


  Commands:

    serve     start development server
    build     build for production
    inspect   inspect internal webpack config
    lint      lint and fix source files

  run vue-cli-service help [command] for usage of a specific command.


~~~

支持sass

~~~
cnpm install sass-loader node-sass webpack --save-dev
~~~
