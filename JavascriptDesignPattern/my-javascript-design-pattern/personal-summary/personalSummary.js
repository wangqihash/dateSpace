console.log("==========关于LZ基类的理解 ==========");
(function() {
  // var parentView = parentFunc({
  //   init: function(){}
  // })
  //
  // var childView = childFunc(parentView, {
  //   init: function() {}
  // })
  //
  // var callChild = new childView();
  //
  // var tempFunc = function() {};
  // tempFunc.extendFunc = function() {
  //   console.log('tempFunc.extendFunc');
  // };
  // console.log(tempFunc);
  // console.log(tempFunc.extendFunc());
})();

/*
*  js原生保留2位小数
*
 */
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
