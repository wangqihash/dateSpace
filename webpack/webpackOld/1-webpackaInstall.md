1. 快速打开 Atom 方法
    => cd 到需要打开的项目下 atom ./ 表示atom在当前目录下打开
        mkdir webpack-deom =>新建文件夹   
        码经: 类似论坛的网站
        inject：注入

2. webpack的使用    
   webpack hello.js[需要打包文件]  hello.bundle.js[打包后文件]  
   webpack参数
   --module-bind 'css=style-loader!css-loader' => 命令行中让其支持打包css style 文件
   --watch 用于监听 [需要打包文件] 文件的变化, 来实时响应给 [打包后文件]
   --progress 显示项目加载进度的百分比
   --display-modules 将引用的所有模块列出来
   --display-reasons 将打包文件的原因显示出来 [其实就是那块用了类似 require引用的]
   --config  webpack --config wbepack.dev.config.js
              => 因为一般都是 webpack.config.js 但是如果是其他的 直接用webpack是不会打包的 则需要用这个参数

3. 注意 webpack.config.js中的 path 中根路径的问题 ?
    __dirname   表示当前文件所在的目录的绝对路径  
          As: newapp > demo > hello.js / console.log(__dirname) => /Users/jerry/51talk/newapp/demo
    __filename  表示当前文件的绝对路径
          As: newapp > demo > hello.js / console.log(__filename) => /Users/jerry/51talk/newapp/demo/hello.js

4. webpack中的 entry 和 output
    entry有3中方法
    1. string => entry: './main.js',
    2. array  => entry: ['./entry1', './entry2'] //将2个入口文件合并成一个文件        
    3. object => entry: {page1: './main.js', page2: ['./entry1', './entry2'] }

    output的2个常用属性
    1. filename
        =>这个值是根据entry的输入方式而决定的，每entry 1次也就有一个chunk那么也将会产生1个
        =>filename,但如果 filename是个固定值，那么entry中array,和object也将无意义了

      filename: 3中展位符
          filename: '[name].js' => name: 每次entry的key
          filename: '[hash].js' =>  hash 每次entry的key的 hash值
          filename: '[chunkhash].js' => cheunkhash 每次entry的key的 cheunkhash值,每一次的watch后该值都会改变,
                                     => 可以理解为该文件的MD5值，每次改变后值将值将发生改变
    2. path:  "./dist" => 指定打包后的文件位置


    webpack插件
      html-webpack-plugin: 每次打包都会将js打包，这样js文件名就可能实时改变了, 而页面中需要引用js，造成了问题
                  => 以一个html文件作为模板，自动将打包的js文件引用到页面中，生成于 output指定的path路径中
                  =>用法 以及参数  
                  plugins: [
                    new htmlWebpackPlugin({
                      filename: 'index.html',  // 打包后/dist 文件夹下规定的名称
                      template: 'index.html',  // 打包的文件出自于此模板,htmlWebpackPlugin可输出
                      inject: 'false',         // 将模板插入到指定位置，[作用不大]
                      title: "htmlWebpackPlugin 设置页面title",
                      minify: {                //压缩代码的参数
                        removeComments:true,   // 删除注释
                        collapseWhitespace: true, // 删除空格
                      },
                    })
                  ],


                    <!-- <script type="text/javascript" src="<%=htmlWebpackPlugin.files.chunks.main.entry %>"> </script> -->
                  <!-- <script type="text/javascript" src="<%=htmlWebpackPlugin.files.chunks.index.entry %>">
                  </script> -->             


5.loader   
  babel-core:
  babel-loader: 让该文件能够支持es6+语法，在不同游览器中显示
  babel-preset-latest: 是babel的插件，帮助babel-loader来完成语法的转化，然后babel-loader通知游览器
  参数:
    module: {
      loaders: [
        {
          test: /\.js$/,    // 用来匹配的正则
          loader: 'babel',  //
          exclude: './node_modules',
          query: {          //
            persets: ['latest']
          }
        }
      ]
    },
