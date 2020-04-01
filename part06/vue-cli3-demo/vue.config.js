// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/demo/'
      : '/',
    lintOnSave: false,
    assetsDir:'static',
    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 10240 }));
              // 请确保为正确的环境变量指定默认模式
              config.defaultModes = {
                'my-build': 'development'
              }
      }
}
