// 数组随机排序
//
(function() {

  var arr = [1,2,5,88,23,54,67];
  var newArr = [];
  var lastArr = [];

  function SoftRandom(arr){
    var arrs = arr;
    for(var i = 0; i<arrs.length; i++) {
      var Random = Math.floor(Math.random()*(arrs.length-i));
      newArr.push(arrs[Random]);
      // for(var j = 0; j<newArr.length; j++){
      //   if(lastArr.indexOf(newArr[j]) == -1){
      //       lastArr.push(newArr[j]);
      //   }
      // }
      arrs.splice(Random, 1);
    }

    return newArr
  };

  // console.log(SoftRandom(arr));
})();


(function() {
  function randomsort(a, b) {
     return Math.random()>0.5 ? -1 : 1;
  }
  var arr = [1, 2, 3, 4, 5];
 console.log(arr.sort(randomsort), "wqhash");

})();


(function() {

  function randomSort(a){
      var arr = a,
          random = [],
          len = arr.length;

      for (var i = 0; i < len; i++) {
        var index = Math.floor(Math.random()*(len - i));
        // console.log(index, "index");
        random.push(a[index]);
        a.splice(index,1);
        // arr.splice(index,1);
      }
      return random;
    }

    var a = [1,2,3,4,5,6,7,8,9,10];
    console.log(randomSort(a));
})();



/**
 *  arr.sort([callback]) =>无callback 对数组中的字符串 按照 unicode进行排序
 *                      => 有callback 则是自定义排序
 *  这种自定义排序： 专门比较任意两值大小，不论什么，先转换为数字再比较
 *  arr.sort(function(a, b) { return parseFloat(a) - parseFloat(b) })
 *
 *
 */
(function() {
  var arr = ['a', 'c', 'e', 'w', 'p', 'u'];
  console.log(arr.sort(), "arr.sort");

})();

/*
    解决跨域问题
    open.com/index.html
    origin.com/index.html

    open.com/index.html
      <iframe id="btnClick" src="b.com/index.html"></iframe>
        var targetOrigin = 'http://origin.com';
        btnClick.window.postMessage('json.stringify()', targetOrigin);

    origin.com/index.html
      window.addEventListenr("message", function(e){
          if(e.origin == 'http://open.com') {
            console.log(e.data);
          }
      })

 */
(function() {
  /*
    1. jsonp => 原理 因 script标签不受 同源策略限制
                  它的跨域只能 是get的形式，且不易发现错误

    2. $ajax => 这种通过 jQuery封装的形式，方法更加具体了，有成功，失败的回调函

    3. 上边的  postMessage()  方法也行 不过需要配合  iframe来写

   */

})();




(function() {})();
(function() {})();
(function() {})();
(function() {})();
