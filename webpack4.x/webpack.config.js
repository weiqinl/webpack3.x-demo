const path = require('path') // nodejs模块，处理文件路径

module.exports = {
  entry: './src/index.js', // 入口起点
  output: { //  出口/输出
    filename: 'main.js', // 输出文件名称
    path: path.resolve(__dirname, 'dist') // 输出的目录
  }
}