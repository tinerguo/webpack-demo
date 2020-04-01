const Config = require('webpack-chain');
const config = new Config();
config
  // 修改 entry 配置
  .entry('index')
    .add('src/index.js')
    .end()
  // 修改 output 配置
  .output
    .path('dist')
    .filename('[name].bundle.js');
