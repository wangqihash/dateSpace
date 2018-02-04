// =============4.1 传统面向对象-实现单例模式============
console.log("=============4.1 传统面向对象-实现单例模式============");
(function() {
  var singleTon = function(sname) {
    this.sname = sname;
    this.instance = null;
  };

  singleTon.getInstance = function(sname) { //类属性 || 静态方法 （这方法不能被实例继承的）
    return this.instance = new singleTon(sname);
    // return "ww";
  };

  // var hash = new singleTon(sname);

  console.log(singleTon.getInstance("wq"));
  // console.log(singleTon, "singleTon");

  var func = singleTon.getInstance("wq");
  console.log(func, "func")
})();

// =============4.2 传统面向对象-用代理实现单例模式============
console.log("=============4.2 传统面向对象-用代理实现单例模式============");
(function() {
  var CreateDiv = function(html) {
    this.html = html;

    this.init();
  };
  CreateDiv.prototype.init = function() {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };

  var ProxySingletonCreateDiv = (function() {
    var instance;
    return function(html) {
      if (!instance) {
        instance = new CreateDiv(html);
      }
      return instance;
    }
  })();

  var a = new ProxySingletonCreateDiv('sven1');
  var b = new ProxySingletonCreateDiv('sven2');
  console.log(a, "a");
  console.log(b, "b");
  console.log(a === b);

})();

// =============4.3 理解闭包原理============
console.log("=============4.3 理解闭包原理============");
(function() {
  var func = (function() {
    var a = 1;
    return function() {
      a++;
      console.log(a);
    }
  })();

  var f1 = func;
  var f2 = func;

  f1();
  f2();
  f1();
})();

//=============4.3 理解 自执行函数 闭包原理============
(function() {
  var func = (function() {
    var a = 1;
    return function() {
      a++;
      console.log(a);
    }
  })();

  console.log(func, "----- my carry func");
  func();
  func();

  var f1 = func;
  var f2 = func;

})();

// =============4.5 js实现惰性单例============
console.log("=============4.5 js实现惰性单例============");
(function() {
  // 通过 这种闭包的形式 保存了div变量
  var createLoginLayout = (function() {
    var div;
    return function() {
      if (!div) {
        div = document.createElement('div');
        div.innerHTML = '只弹出--登陆框';
        div.style.display = 'none';
        document.body.appendChild(div);
      };
      return div;
    }
  })();

  document.getElementById("login").onclick = function() {
    var loginLayout = createLoginLayout();
    loginLayout.style.display = 'block';
  };

})();

// =============4.6 通用的惰性单例============
console.log("=============4.6 通用的惰性单例============");
(function() {
  var getSingle = function(fn) { //这里的作用本质上就是=>抽离实现单例的逻辑部分，如果单例存在，和单例不存在
    var result;
    return function() {
      var wq = fn.apply(this, arguments);
      // console.log(this, "this");   windows
      // console.log(fn, "fn");     var createLoginLayout = function(){}
      // console.log(wq, "wq");     <div ></div>

      return result || (result = fn.apply(this, arguments)); // Anguments 最好加上，这里虽然参数没用上，但如果需要没加上，怎不会显示【加上不会报错】
      // return (result = fn.apply(this, arguments))
    };
  };

  var createLoginLayout = function() {
    var div = document.createElement('div');
    div.innerHTML = '登陆悬浮框';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
  };

  var createSingleLoginLayer = getSingle(createLoginLayout); // 形成闭包

  document.getElementById("login-app").onclick = function() {
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
  };
})();
