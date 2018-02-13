console.log("=====1-base64Tocolor=====");
(function() {
  var rgb2hex = function(color) {
    var rgb = color.split(",");
    var r = parseInt(rgb[0].split('(')[1]);
console.log(r,"r");
    var g = parseInt(rgb[1]);
console.log(g,"g");
    var b = parseInt(rgb[2].split(')')[0]);
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // <<符号是"左位移"运算符

    return hex;
  }
  console.log( rgb2hex("40,44,52") );


})();


(function() {})();
(function() {})();
