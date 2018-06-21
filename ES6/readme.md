# 根据 resyme-native
# 1.  Es5+ Array 中循环方式
#     [].filter(function(curVal, index, curArr){})
#     [].forEach()  
#
#     for(let elem of [].entries)介绍
#     for( of ) 比for forEach for(in) 更加强大
#     for：写法麻烦， forEach：无法 break||return 中断循环 for( in )只能遍历对象，其他的并不推荐使用
#     for( of) 可以遍历数组 对象，字符串 ，只要有Iterator的
#     // 该3个方法一般可以配合 for(let elem of [].entries)使用
#     [].entries()  => 遍历出的是键值对形式
#     [].keys()     => 遍历出的是键名
#     [].values()   => 遍历出的是键值
#
#     [].some(func)  => 用来检测数组中的元素是否满足指定条件  返回Boolean 值
#                   => some 不会对空数组进行检测，不会改变原始数组
#                   As:  var age = [45,46,47];
#                   As:  func checkAdult(age){ return age>=18};  
#                   As:  age.some(func)  
#    
# 2. Array 将类数组转数组方法
#     [].from(arrLike, [mapFun [, thisArg])   
#     arrLike: 类数组
#     mapFun: 对类数组中的每个元素进行加工处理，以后返回的数组元素也就是加工后的元素
#     thisArg: mapFun函数中this指向的对象, [将数据变量 和 操作的方法分离了]
#
#
# 3.Array 中的 reduce()
#   reduce() 方法接受一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
#   As: [3,4,5,6].reduce(function(preVal, curVal, index, arr){  })
#     preVal: 或者理解成 前几次的result
#
#
# 4.Reflect
#   Es6中的 反射  为了操作对象而提供的新 API
#   目前接触到的 Reflect.ownKeys(target) => 该方法返回对象的所有属性[键名], 以数组形式承接
#     
#
#
# 5. super()关键字的理解
#     super用两种用法 1：做函数调用， 2.做对象调用
#       1. 做函数用时，只能存在于子类的constructor中,
#         作用：继承父类的 constructor中的属性 类似于es的   父.call(子,arg)   子 借用 父
#
#       2. 做对象用时  => 注意点较多,在于理解
#          注意点： 1. 在普通方法中，指向父类的原型对象，静态方法中，指向父类
#                  2. 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
#                  3. 在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。
#
# 6.  Map
#     Map: 本质上是键值对的集合，本来 对象的键值只能是string -值
#           而 new Map([]) 的是 值-值的形式
#
#
# 7. Set
#     Es6提供了新的数据结构Set,他类似数组，但是成员的值都是唯一的，没有重复
#     Set中的只有键值（因为 键名 和 键值 都是一样的）
#     [...new Set([1,2,3,3,2,4,4]) ]   // [1,2,3,4]  
#     
#     数组去重 => Array.from(new Set(arr))
#
#
# 8. Promise 对象       https://www.jianshu.com/p/e0bb0083220e
#       Promise 是异步编程的一种解决方法，
#       ####  用Promise这个容器里面包含这 某个 异步操作   
#       有了Promise对象，可以把一个多层嵌套的同步、异步都有回调的方法，给拉直为一串.then()组成的调用链，避免了层层嵌套的回调函数
#       简单说是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作），所以一般是最后才执行
#       As: let promise = new Promise((resolved, rejected) => {})
#           promise.then((resolved, rejected) => {}).then(同理)  // then方法返回的是一个新的Promise实例
#              Promise中的resolved rejected两个方法是配合then来使用的
#              resolved: 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
#              Promise实例生成以后，可以后then 方法分别指定resolved状态和rejected状态 的回调函数
#
#
#
# 9. let 变量
#    1.声明的变量仅在块级作用域有效
#      as: for(let i =0  i <10; i++){}  和var i = 0进行比较
#         let中每次的i都是新值，且保存时当前这一轮的结果
#          var 中的i定义为全局的, 它每次都将会走完整个循环, 所以得到相同的结果   
#    2.不存在变量提升
#      as:  console.log(tmp)  // tem is not defined
#           let tmp = "xx";
#       
#    3. 暂时性死区  
#       说白了，就是使用 let[不光let，切记要先声明] 命令声明变量前，该变量都是不可用的，成为暂时性死区
#       => 所以 建议 变量一定要在声明之后使用，否则就报错
#
#    4. 不允许重复声明  
#         => let a = 1;  
#             var a = 2;  // 报错
#   
#
#
#
# 10. Object.assign     参考： https://www.cnblogs.com/libin-1/p/6845458.html
#       可以实现对象的浅复制
#       Object.assign(target, ...sources)
#       
#
#       let copy = JSON.parse(JSON.stringify(obj));
#       通过这么转换可以实现深度拷贝
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
#
#
#
#
#
