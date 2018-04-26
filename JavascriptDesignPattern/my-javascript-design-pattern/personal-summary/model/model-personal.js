(function() {
  // function LZClass(){ };
  var LZClass = {
    extendProp: function(dest) {
      var i, j, len, src;
      for(j = 1, len = arguments.length; j < len; j++) {
        src = arguments[j];
        for(i in src) {
          dest[i] = src[i];
        }
      }
      return dest;
    },
    create: function(proto) {
      function F() {};
      F.prototype = proto;
      console.log(new F(), "new F()")
      return new F();
    },
    extend: function(props) {
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
    },
  };
  console.log(LZClass, "LZClass");



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
  //
  // var LmapView1 = lzDeclare(LmapView, {
  //   childBind: function(){}
  // });
  var LmapView = new LmapView("dd", 1);
  console.log(LmapView, "LmapView");





})();
