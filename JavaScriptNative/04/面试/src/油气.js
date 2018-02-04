console.log("=============获取全部的 checkbox 属性标签================");
// 获取全部的 checkbox 属性标签
(function() {
  console.log(document.querySelectorAll("input[type='checkbox']"), "Dom");
  console.log($("input[type=checkbox]"), "jq");

  //  checkbox  指代的是 type="checkbox"
  //  checked 指代的默认选中的
  var arr = [];
  $("input").each(function(k, v) {
    var wq = $(this).attr("checked");
    // console.log(wq);
  });

})();

(function() {})();
(function() {})();
(function() {})();
(function() {})();
(function() {})();
