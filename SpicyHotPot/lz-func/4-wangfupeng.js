console.log("10-this");
(function(){
  /**
   * 在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了【核心】
   *
   *  this的取值 可以分为四种情况
   *    1. 构造函数中的this
   *    2. 对象中的this
   *    3. 函数中的this
   *    4. 函数中用call 或者apply调用
   *
   *
   *    2.对象中的this
   *      对象中调用 要注意的是 对象调用
   *      类似  var obj = { x:10, fn: function(){ console.log(this.x) }};
   *        obj.fn()  // 10 =>这里的this指向的是调用者 obj
   *        var fn1 = obj.fn; fn1(); // undefined  而这里的this指向的window,
   *                                // 这里赋值给函数，函数里的调用时 相当于 window.fn1()
   *                               //  所以这里的this也就指向了window
   *      这里的this.
   *
   */
  function func() {};



})();

(function(){})();
(function(){})();
(function(){})();
(function(){})();
