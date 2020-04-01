const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractPlugin = require('extract-text-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './cssModules/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use:ExtractPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader','postcss-loader' 
                ]
            })
      }
    ]
 },
 plugins: [
    new ExtractPlugin('static/css/[name]_[md5:contenthash:hex:8]111.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
 ]
}
