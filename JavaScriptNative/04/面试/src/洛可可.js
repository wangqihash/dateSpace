(function() {
  // (function() {
  //   var sname = 'wq';
  //   (function(){
  //     setTimeout(function(){
  //       console.log(sname);
  //
  //        arguments.callee();
  //     },10000)
  //   })();
  // })();
})();

// 闭包实现缓存
console.log("=========== 闭包实现缓存==============");
(function() {
  function configCache() {
    var obj = {}; //设置一个内部的对象 用来存储缓存数据;这个属性是私有的
    //对外暴露两个公共的方法
    return {
      setCache: function(k, v) { //设置缓存
        console.log(obj,"obj")
        obj[k] = v;
      },
      getCache: function(k) { //获取缓存
        return obj[k];
      }
    };
  };
  console.log(configCache(), "configCache()");
  configCache().setCache('sname', 'wangqi');
  console.log(configCache().setCache('sname', 'wangqi'))
  console.log(configCache().getCache('sname'));


  // var conf = configCache();
  // console.log(conf);
  // conf.setCache('sname', 'wangqi');
  // console.log(conf.getCache('sname'));

})();


// 算法--规律
console.log("=========== 算法--规律==============");

(function() {
  // 1 2 3 5 8 13  ...n

  function d(n) {
    if (n >= 1) {
      if (n == 1 || n == 2) {
        return 1
      } else {
        return d(n - 1) + d(n - 2)
      };

    }
  };

  for (var i = 0; i <= 8; i++) {
    console.log(d(i) + " ");
  }

})();

(function() {})();
