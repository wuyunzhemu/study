const path = require('path') //使用node的path模块，来操作文件路径
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: []
          }
        },
        exclude: /node_modules/,
      },
    ]
  }
}
