# 1.关于gulp的学习   => http://www.ydcss.com/archives/424 可参考
#   1.gulp.src(globs[, options])
#       src: 该方法是指定需要处理的源文件的路径，
#       globs: 需要处理文件路径
#       As: "src/a.js"
#           "*" => 匹配所有文件js文件
#           "**" =>   匹配0个或多个子文件加下的js文件
#           "{}" => 匹配多个属性，
#           "!"  => 排除文件  不包含的文件
#
#
#     options: 类型 object 可选参数，可借鉴网站
#   
#   2.gulp.dest(path [,options])
#       dest：  该方法是指定处理完后文件输出的路径
#       path：   类型是 string or function 指定文件输出路径
#       options：  可选 类型为 object
#
#   
#   3. gulp.task(name [,deps], fn)
#       task: task定义一个gulp任务
#       name: string类型  指定任务的名称
#       deps: StringArray类型，可选参数， 表示该任务的依赖任务，会先执行依赖任务，再去执行name定义的任务
#       fn:  function类型， 该任务调用的插件操作
#
#
#   4. gulp.watch(glob, tasks)  ||  gulp.watch(glob [,fn])
#       tasks:  类型为 stringArray  ['task'], 可理解成require中的依赖项
#       具体的可以参考网站细看  
#
#
#   gulp插件学习
#      gulp-sequence： 按顺序逐个同步地运行 Gulp 任务 [由于gulp执行任务是异步执行的]
#       As => runSequence('clean',['less', 'scripts'],'watch',callback);
#          => 从左到右依次执行，数组内的同步执行
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
