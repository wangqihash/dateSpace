console.log("==========关于LZ基类的理解 ==========");
(function() {
  LZClass = function() {};
  //深度拷贝=> 将函数中每个参数都拷贝给 第一个
  LZClass.extendProp = function(dest) {
    var i, j, len, src;
    for(j = 1, len = arguments.length; j < len; j++) {
      src = arguments[j];
      for(i in src) {
        dest[i] = src[i];
      }
    }
    return dest;
  };

  // LZClass.create = Object.create || (function(){
  //   function F() {};
  //   return function (proto) {
  //     F.prototype = proto;
  //     return new F();
  //   };
  // })()

  LZClass.create = function(proto) {
    function F() {};
    F.prototype = proto;
    console.log(new F(), "new F()")
    return new F();
  };


  LZClass.extend = function(props) {
    var NewClass = function() {
      if(this.init){
        this.init.apply(this, arguments);
      }
    };

    //  NewClass.__proto__ = NewClass.prototype;
    var parentProto = NewClass.__super__ = this.prototype;
    var proto = LZClass.create(parentProto);  // proto 为原型 ?
    console.log(proto, "proto");
    proto.constructor = NewClass;   // 这里本来构造函数是f 但是将其强行换成 NewClass了
    NewClass.prototype = proto;

    for(var i in this) {          // 将LZClass构造函数中的属性都遍历给 NewClass
      if (this.hasOwnProperty(i) && i !== 'prototype') {
        NewClass[i] = this[i];
      }
    }
    LZClass.extendProp(proto, props);
    return NewClass;
  };

  lzDeclare = function (baseclass, object) {
    if (baseclass != undefined && object == undefined) {
        return LZClass.extend(baseclass);
    }else if(baseclass == null || baseclass == undefined) {
        return LZClass.extend(object);
    }else {
        return baseclass.extend(object);    //这里能够这么些说明，baseclass已经继承过LZClass，已有extend属性
    }
  };

  //使用
  var DocView = lzDeclare({
    init: function(param, param1) {},
    hash: function () {console.log("this is hashMap")}
  });

  var LmapView = lzDeclare(DocView, {
    init: function(param, param1) {},
    childName: "LmapView",
    chindFunc: function(){},
    childEx: function(){},
    childEvent: function(){}
  });

  // var LmapView1 = lzDeclare(LmapView, {
  //   childBind: function(){}
  // });

  var lmapview = new LmapView("dd", 1);
  console.log(lmapview, "lmapview");






})();


console.log("============= js原生保留2位小数 =============");
(function() {
  function toDecimal2(x) {
    var f = parseFloat(x);
    console.log(f, "f")
    if (isNaN(f)) {
      return false;
    }
    var f = Math.round(x * 100) / 100;
    console.log(f, "f2")
    var s = f.toString();

    var rs = s.indexOf('.');
    console.log(rs, "rs")
    if (rs < 0) {
      rs = s.length;
      s += '.'; // s = s+ "."
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    return s;
  }
   // console.log(toDecimal2(.39));
  // console.log(toDecimal2(123.6));
})();
(function() {
  function toFloat2(num) {
    var num = parseFloat(num);
    if (isNaN(num)) {
      return false;
    }
    var numToStr = num.toString();
    var floatNum = numToStr.indexOf(".");
    if (floatNum < 0) {
      floatNum = numToStr.length;
      numToStr+=".";
    }
    while(numToStr.length <= floatNum+2){
        numToStr += "0"
    }
    return numToStr;

  };
  console.log(  toFloat2(.29))

})();


console.log("============= 模仿oop调用初始化方法 =============");
(function() {
  function Main(){
      this.sname = "wq";
      this.init();
  }
  Main.prototype = {
    init: function(){
      this.get();
      this.set();
    },
    get: function(){console.log("get方法")},
    set: function(){console.log("set方法")}
  };
  new Main()



})();
