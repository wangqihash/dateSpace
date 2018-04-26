const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 这里的根下 是指
    publicPath: "/"
  },
  devtool: 'inline-source-map',
  //前端自己完成刷新，貌似这种刷新性能消耗较大
  devServer: {
    contentBase: './dist',
    //是否需要热更新
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    // 清楚 打包生成后无关的文件
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'output manager',
    }),

    // 以便更容易查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    // 热更新
    new webpack.HotModuleReplacementPlugin()
  ]


};
