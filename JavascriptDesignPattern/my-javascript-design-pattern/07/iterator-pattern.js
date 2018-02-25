console.log("=============  迭代器模式 =============");
console.log("==============7.2实现自己的迭代器====================");
(function(){
  var each = function(ary, callback) {
  for (var i = 0; i < ary.length; i++) {
      // 把下标和值 都当做参数传给callback  => 这里的重点不在于 call的使用，用它是因为，后续考虑到了this的扩张性
      // callback.call(this, i, ary[i]);
      callback(i, ary[i]);
    };
  };

  each([2, 3, 5, 6], function(index, el) {
    // console.log(this, "主要看callback.call()传递的是啥?")
    console.log(index, el);
  });

})();

console.log("==============7.3.1内部迭代器===============");
(function(){



})();

(function(){})();
(function(){})();
(function(){})();
