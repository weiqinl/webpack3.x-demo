const path = require('path') // nodejs模块，处理文件路径
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html

module.exports = {
  entry: { // 入口起点
    index: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack--Code-Splitting-weiqinl',
      filename: 'index.html' // 相对于输出目录
    })
  ],
  output: { //  出口/输出
    filename: '[name].bundle.js', // 输出文件名称
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), // 相对publicPath的输出的目录
    publicPath: '/'
  }
}