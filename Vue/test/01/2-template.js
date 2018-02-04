var templateOnce = new Vue({
  el: ".template-once",
  data: {
    message: '这是once需要的值1'
  }
});

var templateHtml = new Vue({
  el: ".template-html",
  data: {
    message: '<span style="color:red;">一段span文本 || 双大括号会将数据解释为普通文本 </span>',
    id:2
  }
});
