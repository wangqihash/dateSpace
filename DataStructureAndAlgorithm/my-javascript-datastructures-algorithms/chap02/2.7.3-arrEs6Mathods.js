console.log("==========Es6中的 for( of ) 循环==========");
(function() {
  var arr = [2, 3, 4, 5, 6];
  var newarr = [];
  var newarr1 = [];
  for (let n of arr) { // n=>  2 3 4 5 6 数组中每一项
    newarr.push((n % 2 == 0) ? 'even' : 'odd');
    // console.log((n % 2 == 0) ? 'even' : 'odd');
  }
  console.log(newarr);

  console.log("====");
  for (let n in arr) { // n=> 0 1 2 3 4 数组中的下标
    // console.log((n % 2 == 0) ? 'even' : 'odd');
    newarr1.push((n % 2 == 0) ? 'even' : 'odd');
  }
  console.log(newarr1);
})();

console.log("==========Es6中新的迭代器 @@iterator==========");
(function() {
  let arr = [2, 3, 4, 5, 6];
  let iterator = arr[Symbol.iterator]();
  console.log(iterator, "数组迭代器")
  console.log(iterator.next().value); // 2
  console.log(iterator.next().value); // 3
  console.log(iterator.next()); // {value: 4, done:false}

})();

console.log("==========Es6中新的迭代器 entries==========");
(function() {
  let arr = [2, 3, 4, 5, 6];
  let aEntries = arr.entries();
  console.log(aEntries, "aEntries=>通过entries方法得到 @@iterator ")
  console.log(aEntries.next().value); // [0, 2] 下标， 值
  console.log(aEntries.next()); // {value: [], done:fasle}

})();

console.log("==========Es6中新的迭代器 keys==========");
(function() {
  let arr = [2, 3, 4, 5, 6];
  let aKeys = arr.keys();
  console.log(aKeys.next()); // { value:0, done:fasle};
  // { value:1, done:fasle} =>这里的value表示是的下标，done:fasle表示还可以迭代，
  // 如果为true了，那么aKeys.next()就会返回undefined 不会迭代了
  console.log(aKeys.next());

})();

console.log("========Es6中新的迭代器 values=======");
(function() {
  //作用同上，不过这里的 用来 输出 value的
  let arr = [2, 3, 4, 5, 6, 7, 8];
  // let aValue = arr.values();
  // console.log(aValue); // 游览器暂不支持该方法，可用Babel.js来访问
})();

console.log("========Es6中from方法=======");
(function() {
  let arr = [2, 3, 4, 5, 6, 7, 8];
  var newArr = Array.from(arr);
  console.log(newArr, "newArr => Array.from(arrr)");

  // var newArr1 = Array.from(arr, function() {
  //   // console.log(arguments, "arguments")
  // });
  var newArr1 = Array.from(arr, (value, index) => {
    return value % 2 == 0 ? value : ''
  })
  console.log(newArr1, "newArr1");

})();

console.log("========Es6中fill方法=======");
(function() {
  /**
   * [arr description]
   * arr.fill(fillValue, startIndex, endIndex) //含头不含尾原则
   */
  let arr = Array.of(2, 3, 4, 5, 6);
  let newArr = arr.fill(8, 2, 4); //[2,3,8,8,6]
  console.log(newArr, "newArr => fill");

})();

console.log("========Es6中copyWithin方法=======");
(function() {
  /**
   * [arr description]
   * copyWithin(copySide, copysStartIndex [, copysEndIndex] )
   *  copysEndIndex => 没有的话，直接copy到结束,
   *  遵循 含头不含尾原则
   */
  let arr = [22, 33, 44, 55, 66, 77, 88]; // => [22,33,44,77,88,77,88];
  arr.copyWithin(3, 5);
  console.log(arr);

})();

console.log("========Es6中 排序=======");
(function() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // console.log(arr.sort());
  console.log(arr.sort(function(a, b) {
    return a - b;
  }));
})();

console.log("========Es6中 find 和 findIndex 排序=======");
(function() {
  var arr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
  function multipleOf13(element, index, array) {
      return (element % 2 == 0) ? true : false;
  };
console.log(arr.find(multipleOf13)); // value
console.log(arr.findIndex(multipleOf13)); //index(selector/element)

})();
