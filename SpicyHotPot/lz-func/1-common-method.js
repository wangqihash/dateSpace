console.log("========= LZ-common方法 -- 留住this =========");
(function() {

  /**
   * [关于 apply的理解]
   *
   * 猫[吃鱼].apply(狗, 吃鱼);
   */

  var hitch = function(scope, callBack) {
    return function() {
      return callBack.apply(scope, arguments || [])
    };
  };

  var getData = function() {
    console.log(this, "this+")
    var self = this;
    $.ajax({
      url: 'json/pdlist1.json', type: 'GET', dataType: 'json',
      // success: function(data) {
      //   console.log(data, "data+");
      //   console.log(this, "success+");
      // }
      // 理解： hitch(this, callBack) => callBack.apply(this, arguments)
      //        this指向的是 Ajax中的this, 他需要借用callback中的this[他是上一层的this===window]
      //        arguments 作为参数也是 指向callBack中的参数，相当于把callback中的东西[包括参数] 复制了给this
      success: hitch(this, function(data) {
        // console.log(data, "data+");    // 使用时放开
        //console.log(this, "success+");  // 使用时放开
      })
    })
    // .done(function(data) {
    //   console.log(data, "success");
    //   console.log(this, "this+")
    // })
    // .done(hitch(this, function(data){
    //     console.log(data, "success");
    //     console.log(this, "this+")
    // }))
  };

  getData();

})();

console.log(" ======== 对象数组深度复制 ======== ");
(function() {
  var lzObj = {
    clone: function(obj) {
      var a;
      if (obj instanceof Array) {
        a = [];
        for (var i = 0; i < obj.length; i++) {
          a.push(this.clone(obj[i]))
        }
      } else if(obj instanceof Function) {
        return eval('(' + obj.toString() + ')')
      }else if(obj instanceof Object) {
        a = {};
        for(var i in obj) {
          a[i] = this.clone(obj[i])
        }
      } else {
        return obj;
      }
      return a;
    }
  }

  var newObj = {"sname": "wq", "sage":"11"};
  var newArr = ["zhang", "李四", "网二", "马总"];
  var newFunc = function(){alert(12)};
  console.log(lzObj.clone(newObj), "clone(newObj)+");
  // console.log(lzObj.clone(newArr), "clone(newArr)+");
  // console.log(lzObj.clone(newFunc), "clone(newFunc)+");

})();

console.log("=============== 关于js深浅复制的理解-1 ===============");
(function() {

  /**
   * 1.深复制和浅复制只针对像 Object, Array 这样的复杂对象的。
   * [对于字符串类型，浅复制是对值的复制，这种较简单的]
   * 2.浅复制只复制一层对象的属性
   * 3.而深复制则递归复制了所有层级
   */
  var obj = { a:1, arr: [2,3] };
  var dst = {};
  for (var prop in obj) {
    dst[prop] = obj[prop];
  }
  //进行测试 如果只是对这种Numebr值改变，并不会将指针改变， [嵌套的对象里也需要引用类型]
  // dst.a = 100;
  // obj.a = 100;

  // 说明浅复制 是针对引用类型的
  obj.arr[1] = 19;
  console.log(dst, "shallowObj");
  console.log(obj, "obj");
})();

console.log("=============== 关于js深浅复制的理解-2 ===============");
(function() {
  /**
   * 深度拷贝会将引用类型的数据进行 递归，将其所有的数据遍历，重新开辟栈，与之前的相互之间不影响
   * 解释： 因为 每当var 声明一次对象，就开辟了新的存储空间，深度拷贝，就是这原理
   *          浅拷贝：
   */
  var lzObj = {
    clone: function(obj) {
      var a;
      if (obj instanceof Array) {
        a = [];
        for (var i = 0; i < obj.length; i++) {
          a.push(this.clone(obj[i]))
        }
      } else if(obj instanceof Function) {
        return eval('(' + obj.toString() + ')')
      }else if(obj instanceof Object) {
        a = {};
        for(var i in obj) {
          a[i] = this.clone(obj[i])
        }
      } else {
        return obj;
      }
      return a;
    }
  };

  // var china = {
  // 	  	nation : '中国',
  // 	  	birthplaces:['北京','上海','广州'],
  // 	  	skincolr :'yellow',
  // 	  	friends:['sk','ls']
  // };
  var china = [
    {
      nation : '中国',
      birthplaces:['北京','上海','广州'],
      skincolr :'yellow',
      friends:['sk','ls']
    },
  ];
  var newChina = lzObj.clone(china);
  newChina.tempHash = "dest";
  console.log(newChina, "newChina+");
  console.log(china, "china+");


})();

console.log(" ======= 理解深度克隆 ======= ");
(function() {
  /**
   * 这里不同于 浅复制，因为它们的指针 指向的不是同一地址
   */
  var a = {"sname":"wq","job":["code", "jianzu"]};
  var cloneObj = {
    clone: function(obj){
      return obj
    }
  };

  var clonenewA = cloneObj.clone(a);
  console.log(a, "a");
  a.sname = "wangqi";
  console.log(clonenewA, "clonenewA");

})();

console.log("=== 配合深度拷贝理解流程 =====");
(function() {
  /**
   * 赋值都是从左到右执行的，
   * 解释： ① a.x 前此时b中也有 b.x了
   *       ② a.x = a <=> a.x = { n: 1}  此时a 的结构 a:{n:1, x{n:1} ...}
   *       ③ a = {n: 2} 注意的是这里是a= {n:2}了，不是a.x所以
   *          这里a的结构就将重新改变了[这时候 a 和 b的指针也分开了]
   *       ④ 这时候a的赋值已经结束，那的 b.x = a <=> b.x = { n: 2}
   *       ⑤ b的数据结构 b: {n:1, x:{n:2} }
   */
  var a = {n: 1};
  var b = a;
  a.x = a = {n: 2};
  b.x = 888;
  b.n = 666
  console.log(a);
  console.log(b)

})();

console.log(" ================ 获取Url中的&参数 ================ ");
(function(){




})();



(function(){})();
(function(){})();
(function(){})();
(function(){})();
(function(){})();
(function(){})();
