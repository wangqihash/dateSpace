console.log("=========3.1.2 变量的生存周期==============");
// 3.1.2 变量的生存周期
//最原始 闭包形式， 这里注意的是 退出函数时，这些局部变量即失去了
//它们的价值，它们都会随着函数的结束而被销毁;
// 这里需要用变量来 承接 func 是因为 需要用匿名函数能够访问到 func的执行环境
// func()() => 这里一直调用的将是 return function()
// var f = func(); f(); 这里将一直会调用 func函数中的变量
//
(function() {
  var func = function() {
    var a = 1;
    return function() {
      a++;
      console.log(a);
    }
  };

  // console.log(func()());
  func()();     //注意 闭包是 相互之间的引用，单个调用形成不了闭包。
  func()();
  func()();

  // var f = func();
  // f();
  // var j = func();
  // j(); //这里操作的 内存是新的空间，所以不会是 ++效果。
  // var j = f;
  // j();
  //
  // f();
  // f();

})();
console.log("==========3.1.3 闭包的作用===========");
// 3.1.3 闭包的作用
(function() {
  var mult = function() {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return a;
  };

  console.log(mult(1, 2, 2, 3), "出自-a");
})();


//优化： 传入相同参数，是一种计算浪费，可以加入缓存机制来提高函数性能
(function() {
  var cache = {};
  var mult = function() {
    console.log(arguments, "arguments");
    // 注意的是这里已经是 string 类型了 所以到 cache["str"] = number;
    var args = Array.prototype.join.call(arguments, ",");
    console.log(args, "类型" + typeof args, "出自-args");
    if (cache[args]) {
      return cache[args];
    }

    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
      cache[args] = a;
      // console.log(cache[args], "cache[args]", a, "a");
    }
    console.log(cache); // { "1,2,2,2,3" : 24};
    return cache[args] = a;
  };

  console.log(mult(1, 2, 2, 2, 3), "cache");
})();

console.log("==========3.1.4 闭包和面向对象设计===========");
// 3.1.4 闭包和面向对象设计
(function() {
  var extent = function() {
    var value = 0;
    return {
      call: function() {
        value++;
        console.log(value);
      }
    }
  };

  var ex = extent();
  // extent().call(); // 这种每一次的调用，变量都会随着 return 而销毁。
  // extent().call();
  // extent().call();
  ex.call(); // 这里是闭包的关系，通过 var ex = extend(); 来承接了 extend() ex就能访问其生产环境
  ex.call();
  ex.call();
})();

console.log("==============3.1.5 用面向对象实现命令模式=================");
// 3.1.5 用面向对象实现命令模式
(function() {
  var Tv = {
    open: function() {
      console.log('打开电视机');
    },
    close: function() {
      console.log('关上电视机');
    }
  };

  var OpenTvCommand = function(receiver) {
    this.receiver = receiver;
  };

  OpenTvCommand.prototype.execute = function() {
    this.receiver.open(); // 执行命令，打开电视机
  };

  OpenTvCommand.prototype.undo = function() {
    this.receiver.close(); // 撤销命令，关闭电视机
  };

  var setCommand = function(command) {
    document.getElementById('execute').onclick = function() {
      //command.execute(); // 输出：打开电视机
      command.receiver.open();
    }

    document.getElementById('undo').onclick = function() {
      command.undo(); // 输出：关闭电视机
    }
  };

  var obj = new OpenTvCommand(Tv);
  console.log(obj, "obj");
  // setCommand(new OpenTvCommand(Tv));
  setCommand(obj);

})();


console.log("==============3.1.5 用闭包实现命令模式=================");
// 3.1.5 用闭包实现命令模式
(function() {
  var Tv = {
    open: function() {
      console.log('打开电视机');
    },

    close: function() {
      console.log('关上电视机');
    }
  };

  var createCommand = function(receiver) {
    var execute = function() {
      return receiver.open(); // 执行命令，打开电视机
    }
    var undo = function() {
      return receiver.close(); // 执行命令，关闭电视机
    }
    return {
      execute: execute,
      undo: undo
    }
  };

  var setCommand = function(command) {
    document.getElementById('execute').onclick = function() {
      command.execute(); // 输出：打开电视机
    }
    document.getElementById('undo').onclick = function() {
      command.undo(); // 输出：关闭电视机
    }
  };

  console.log(createCommand(Tv), "createCommand( Tv )");
  setCommand(createCommand(Tv));
})();


console.log("==========3.2.2 函数作为返回值输出===========");
// 3.2.2 函数作为返回值输出
(function() {

  var isType = function(type) {
    return function(obj) {
      console.log(Object.prototype.toString.call(obj), "数据类型 ");
      return Object.prototype.toString.call(obj) === '[object ' + type +
        ']';
    }
  };

  var isString = isType('String');
  var isArray = isType('Array');

  console.log(isArray([1, 2, 3]));
  console.log(isType('String')("wangqi"));

})();

console.log("==========3.2.2 初实单例模式===========");
// 3.2.2 初实单例模式
(function() {

  var getSingle = function(fn) {
    var ret;
    return function() {
      // console.log(this, "getSingle -> retur -> this")
      console.log(ret, "ret");
      return ret || (ret = fn.apply(this, arguments));
    };
  };

  var getScript = getSingle(function() {
    return document.createElement('script');
  });

  var script1 = getScript();
  var script2 = getScript();

  console.log(script1 === script2);
})();

console.log("==========3.2.2 初实单例模式 个人理解===========");
(function() {

  var getSingle = function(fn) {

    return function() {
      return fn.apply(this, arguments);  //这里 借用了fn中的方法，使getSingle可用，
    }
  };

  var getSingleSiblings = getSingle(function() {
    return 123
  });
  console.log(getSingleSiblings(), "===");

  var func = getSingleSiblings();
  // console.log(func, "func");

})();

console.log("==========3.2.4 uncurrying===========");
// 3.2.4 uncurrying
(function() {
  // console.log(arguments, 'arguments');

  Array.prototype.push.call(arguments, 4);

  console.log(arguments, "arguments-push");
})(1,2,3);



(function() {})();


(function() {})();
