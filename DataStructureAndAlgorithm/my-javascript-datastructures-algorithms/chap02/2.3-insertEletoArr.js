console.log("=======2.3.1-push向数组末位添加元素=======");
(function() {
  var arr = [22, 33];
  // arr.length = 44;
  arr.push(44);
  console.log(arr, "push");
})();

console.log("=======2.32-向数组中 首位 插入元素=======");
(function() {
  var arr = [11, 22, 33, 44, 55, 66];
  for (var i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = -11;
  console.log(arr, "原生做法");
})();

console.log("=======2.32-向数组中首位插入元素--使用unshift=======");
(function() {
  var arr = [11, 22, 33, 44, 55, 66];
  arr.unshift(-11);
  console.log(arr, "unshift");
})();

console.log("=======2.4删除数组末位元素=======");
(function() {
  var arr = [11, 22, 33, 44, 55, 66];
  arr.pop();
  console.log(arr, "pop");
})();

console.log("=======2.4删除数组首位元素=======");
(function() {
  var arr = [12, 34, 56, 78];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  console.log(arr, "删除数组首位->原生"); // [34, 56, 78, undefined]

  var newArr = [11, 22, 33, 44, 55, 66]; // [22, 33, 44, 55, 66]
  newArr.shift();
  console.log(newArr, "shift");

})();

(function() {

})();
