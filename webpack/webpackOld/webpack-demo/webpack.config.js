var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './src/scripts/main.js',
    a: './src/scripts/a.js',
    b: './src/scripts/b.js',
    c: './src/scripts/c.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name]-[chunkhash].js',
    publicPath: "http://wangqi",
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      inject: 'false',
      title: "htmlWebpackPlugin a.html",
      minify: {
        removeComments:true,
        collapseWhitespace: true,
      },
      excludeChunks: ['b', 'c'],
    }),

    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: 'false',
      title: "htmlWebpackPlugin b.html",
      excludeChunks: ['a', 'c'],
    }),

    new htmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      inject: 'false',
      title: "htmlWebpackPlugin c.html",
      excludeChunks: ['a', 'b'],
    }),
  ],

};
