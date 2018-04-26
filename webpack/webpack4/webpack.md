1. webpack 安装并不建议全局安装
    如果是全局的 那么它可能会将具体某个项目中的 webpack版本覆盖了，导致该项目可能启动不了
    所以建议的是本地安装

2. 一定要注意 cnpm install 时 --save 和 --save-dev 安装的区别 ??  

3. npx的作用??

4. HtmlWebpackPlugin 插件????
   1.能够自动根据 output中的 filname 动态生成的文件名 展示到页面中去

5. clean-webpack-plugin 比较普及的插件 **
   1. 只保留构建后生成的文件！使项目更加简洁直观  [hash hashname 的每次build后都不一样]

6. devtool: 'inline-source-map',    ==> Source Map入门教程
    能够帮助你定位到 报错的模块文件，而不是直接报 错误来自bundle.js

7. webpack-dev-server具体的参数配置????
    #为你提供了一个简单的 web 服务器，并且能够实时重新加载
    每次要编译代码时，手动运行 npm run build 就会变得很麻烦，这种工具能够省去每次都打包的麻烦
    区分它和 热更新的区别

    当和nodeApi配合使用时的使用方式?
    本质步骤: 下载[ cnpm install webpack-dev-server]
              配置  ①单独使用：devServer:{contentBase:"./dist"}
                              插件中 new webpack.HotModuleReplacementPlugin();
                    ②配合nodeApi使用时： 会在server.js中 require('webpack-dev-server');
                      本来在 webpack.config.js中的配置项也将放在 server.js中  
                      As =>  new webpackDevServer(require("compiler.js"), devServer)
              启用 ①单独使用时在 package.json 中的script中配置         
                  ②配合nodeApi使用时，直接启用server.js即可

8. webpack-dev-middleware插件 是 webpack-dev-server中也包含他
    webpack-dev-middleware可以作为一个单独的包使用，也可配合express使用
