console.log("=============  迭代器模式 =============");
console.log("==============7.2实现自己的迭代器====================");
(function() {
  var each = function(ary, callback) {
    for (var i = 0; i < ary.length; i++) {
      // 把下标和值 都当做参数传给callback  => 这里的重点不在于 call的使用，用它是因为，后续考虑到了this的扩张性
      // callback.call(this, i, ary[i]);
      callback(i, ary[i]);
    };
  };

  each([
    2, 3, 5, 6
  ], function(index, el) {
    // console.log(this, "主要看callback.call()传递的是啥?")
    console.log(index, el);
  });

})();

console.log("==============7.3.1内部迭代器===============");
(function() {
  var each = function(ary, callback) {
    for (var i = 0; i < ary.length; i++) {
      callback(i, ary[i]);
    }
  };

  var compare = function(arr1, arr2) {
    each(arr1, function(index, el) {
      if (el !== arr2[index]) {
        // throw new Error("arr1 !== arr2");
        console.log('arr1 !== arr2');
      } else {
        console.log("arr1 === arr2");
      }
    });
    // alert("arr1 === arr2");
  };
  compare([
    1, 2, 3
  ], [3, 5, 4]);

})();

console.log("==============7.3.2内部迭代器===============");
(function() {
  // 在一些没有闭包的语言中，迭代器本身的实现也相当复杂
  var Iterator = function(obj) {
    var current = 0;
    var next = function() {
      current += 1;
    };
    var isDone = function() {
      return current >= obj.length;
    };
    var getCurrItem = function() {
      return obj[current];
    };

    return {
      next: next,
      isDone: isDone,
      getCurrItem: getCurrItem,
      length: length
    }

  };

  // 使用 Iterator
  var compare = function(iterator1, iterator2) {
    if (iterator1.length !== iterator2.length) {
      alert(213)

      alert('iterator1 和 iterator2 不相等');
    }
    while (!iterator1.isDone() && !iterator2.isDone()) {
      if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
        // alert('迭代器1 和 迭代器2 不相等');
        console.log('迭代器1 和 迭代器2 不相等');
      }else{
        console.log("他们相等~");
      }
      iterator1.next();
      iterator2.next();
    }
    // alert('他们的值不相同');
  };

  var iterator1 = Iterator([0, 9, 3]);
  var iterator2 = Iterator([1, 2, 3]);
  compare(iterator1, iterator2);

})();

console.log("==============7.5倒序迭代器===============");
(function() {
  var reverseEach = function(ary, callback) {
    for (var i = ary.length - 1; i >= 0; i--) {
      // callback(this, i, ary[i])
      if(callback(this, i, ary[i]) === false){
        break;
      }
    }
  };
  reverseEach([0, 1, 2], function(index, el) {
    console.log(el);
  })

})();

(function() {})();
