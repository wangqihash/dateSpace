console.log("========2.2创建和初始化数组========");
console.log("========斐波那数列========");
(function() {
  var arr = [];
  arr[1] = 1;
  arr[2] = 2;
  for (var i = 3; i < 20; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  // for (var i = 1; i < arr.length; i++) {
  //    console.log(arr[i]);
  //
  // }
  console.log(arr);
})();

(function() {

  function d(n) {
    var arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for (var i = 3; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
  }
  console.log(d(20));


})();
