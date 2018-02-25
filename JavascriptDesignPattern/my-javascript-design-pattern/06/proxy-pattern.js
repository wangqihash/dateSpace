console.log("===========6.3虚拟代理实现图片预加载===========");
/**
 * 代理模式中的预加载
 * @return {[type]}
 * 网络不好的情况下 先会加载 本地预选图片，等到网络畅通时在加载网络图片
 */
(function() {
  var myImage = (function() {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
      setSrc: function(src) {
        imgNode.src = src;
      }
    };

  })();

  var proxyImage = (function() {
    var img = new Image();
    img.onload = function() {
      myImage.setSrc(this.src);
    };

    return {
      setSrc: function(src) {
        myImage.setSrc("img/timg.gif");
        img.src = src;
      }
    };
  })();

  // var hash = 'http://img1.imgtn.bdimg.com/it/u=3720668662,1197182767&fm=27&gp=0.jpg';
  var hash = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=483984344,2672014204&fm=27&gp=0.jpg';
  proxyImage.setSrc(hash);
})();

console.log("===========6.4代理的意义===========");
/**
 * 普通处理预加载方法
 * @return {[type]}
 */
(function() {
  var myImage = (function() {
    var img = new Image();
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);

    img.onload = function() {
      imgNode.src = img.src;
    };

    return {
      setSrc: function(src) {
        imgNode.src = 'img/timg.gif';
        img.src = src;
      }
    };

  })();
  myImage.setSrc("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=483984344,2672014204&fm=27&gp=0.jpg");

  /**
   * 比较后=>
   *  使用代理的意义在于 面向对象中的 单一职责原则
   *  每一个类（对象||函数）尽量让其承担的职责更少，也达到了解耦原则
   *
   *  代理只是起到景上添花作用，预加载的操作完成之后，请求重新交给本体 MyImage
   *
   */
})();

console.log("===========6.6虚拟代理合并HTTP请求===========");
(function() {
  /**
   *  模拟发送多次请求额情况
   *   每选中1次checkout那么就会想服务器发送1次请求
   *   这样太消耗带宽了，所以运用代理模式，将需要发送给服务器的请求 setTimeout后都交给代理一次性发送
   */

  var synchronousFile = function(id) {
    console.log("开始同步 id:" + id);
  };

  var proxysynchronousFile = (function() {
    var cache = [],
      timer;
    return function(id) {
      cache.push(id);
      if (timer) {
        return;
      }
      timer = setTimeout(function() {
        synchronousFile(cache.join(","));
        clearTimeout(timer);
        timer = null;
        cache.length = 0; // 清空ID集合
      }, 2000);
    };
  })();
  // var checkouts = document.getElementsByClassName('checkouts');
  var checkouts = document.getElementsByTagName('input');
  for (var i = 0; i < checkouts.length; i++) {
    var tempCheckouts = checkouts[i];
    tempCheckouts.onclick = function() {
      if (this.checked === true) {
        proxysynchronousFile(this.id);
      }
    };
  }

})();

console.log("===========6.8.1缓存代理--> 计算乘积===========");
(function() {
  /**
   * 计算乘积
   */
  var mult = function() {
    var arg = arguments;
    var tempVal = 1;
    for (var i = 0; i < arg.length; i++) {
      tempVal = tempVal * arg[i];
    }
    console.log(tempVal, "mult");
  };

  var proxyMult = (function() {
    var cache = {};
    return function() {
      var args = Array.prototype.join.call(arguments, ",");
      if (args in cache) {
        return cache[args];
      }
      console.log(cache, "proxyMult");
      return cache[args] = mult.apply(this, arguments);
    };

  })();
  // 本质上是把 proxyMult =>参数作为键名来识别[键值无意义],  mult =>专门做计算
  proxyMult(2, 3);
  proxyMult(2, 3);
  proxyMult(2, 3, 4);

})();

console.log("===========6.8.2缓存代理--> Ajax异步请求数据===========");
(function() {})();

console.log("===========6.9 用高阶函数动态创建代理===========");
(function() {
  // 乘法
  var mult = function() {
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
      a = a * arguments[i];
    }
    return a;
  };
  // 加法
  var puls = function() {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {
      a = a + arguments[i];
    }
    return a;
  };
  // 代理工厂函数  => 传入的为函数更加的灵活
  var createProxyFactory = function(fn) {
    var cache = {};
    return function() {
      var args = Array.prototype.join.call(arguments, ',');
      if (args in cache) {
        return cache[args]
      };
      return cache[args] = fn.apply(this, arguments);
    }
  };

  var proxyMult = createProxyFactory(mult);
  var proxyPlus = createProxyFactory(puls);
  console.log(proxyMult(1, 2, 3, 4));
  console.log(proxyPlus(1, 2, 3, 4));

})();
