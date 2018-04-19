var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "production",
  entry: {
    index: './src/scripts/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'false',
      title: "htmlWebpackPlugin a.html",
    }),
  ],

};
