(function() {
  var a = {
    'name': 'wq'
  };
  var b = a;
  b.age = 12;

  b.name = {
    "jb": 'xxx'
  };
  // console.log(a);
  // console.log(b);
})();

(function() {

  var a = [];
  for (var i = 0; i < 5; i++) {
    // console.log(i);
    a.push(function() {
      console.log(i);  // 注意这函数中访问的是 全局中的 i 也就是for循环之外的变量i
    })
    // setTimeout(function() {console.log(i)},1000);
    // (function(i) {setTimeout(function() {console.log(i)},1000)})(i);
  }
  i = 9;
  // console.log(i, "oop");
  // console.log(a);
  // a[1]();
})();
/**
 * 数组去重
 * 简单低效的 =>
 *  var arr= [1,1,1,2,2,2];
 *  var temp = [];
 *   for(arr){ if(temp.indexOf(arr[i] == -1)){temp.push(i)}};
 */
(function() {
  var arr = [0,1, 2, 1,2,3,3];
  var temp = {};
  for (var i = 0; i < arr.length; i++) {
    temp[arr[i]] = 1;
  };
  // console.log(temp);

  var newArr = [];
  for (var key in temp) {
    newArr[key] = key;
  }
  // console.log(newArr)

})();

/**
 *
 * 排序
 */
(function() {

  function sort() {
    for (var i = 0; i < arr.length-1; i++) {
      for (var j = 0; j < arr.length; j++) {
        if(arr[j]>arr[j+1]) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    };
    return arr
  };
  var arr = [23, 12, 67, 1, 3, 5, 12];
  console.log(sort(arr));

})();

(function(){

})();
