const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry: ['./entry.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.webpack.js'
  },
  mode: 'development'
}
