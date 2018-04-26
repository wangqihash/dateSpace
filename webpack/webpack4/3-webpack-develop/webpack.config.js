const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  //前端自己完成刷新，貌似这种刷新性能消耗较大
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 这里的根下 是指
    publicPath: "/"
  },

  plugins: [
    // 清楚 打包生成后无关的文件
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'output manager',
    })
  ]


};
