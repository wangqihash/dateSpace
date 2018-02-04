(function() {
  var isEven = function(x) {
    // console.log(arguments);
    // console.log(x);
    return (x % 2 == 0) ? true : false;
  };
  var arr = [2, 4, 7, 8, 9, 1, 7];

  // arr.every(isEven);  //会遍历数组，直到返回值，遇到 flase结束
  // arr.some(isEven);   //会遍历数组，直到返回值，遇到 true结束

  arr.forEach(function(x) { //无返回值，遍历每一项
    console.log((x % 2 == 0));
  });

console.log(arr.map(isEven), "map()");   //有返回值 可返回新数组
console.log(arr.filter(isEven), "filter()"); 
console.log(arr.reduce(function(previous, current, index){
    console.log(previous,current)
    return previous + current;
}));

})();

console.log("遍历方法小结")
(function(){

  /**
  *  every  some  forEach map filter reduce
   *
   * arr.every(function(firstELe, firstindex, arr){ return 直到遇到true })   //遇到true之前，会遍历没一项

   * arr.some(func(){return 直到遇到false}) // 同上，但是这里的 retuen 是遇到false就结束
   *
   * arr.forEach(func(){})  //没有返回值
   *
   * arr.map(function(){ return newArr})  // 参数同上，这里会变量每一项，且会返回一个新数组
   *
   * arr.filter(func(){}) // 这里同 map 但是它返回的新数组全是 true的
   *
   * arr.redece(function(prev, curr, index, arr){ return }) // 作为求和运算和好用
   *
   *
   */
})();
