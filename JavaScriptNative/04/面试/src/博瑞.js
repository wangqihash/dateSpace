(function() {
  var beginTime = $(".begin-time");
  var endTime = $(".end-time");
  var wrap = $(".wrap");
  var beginVal;
  var endVal;

  //异步函数
  wrap.on("change", 'select', function(e) {

    var tag = $(this).attr("class");
    if (tag == 'begin-time') {
      beginVal = $(this).val();
    } else if (tag == 'end-time') {
      endVal = $(this).val();
    };
    if (parseInt(beginVal) > parseInt(endVal)) {
      alert('xx');
    };
  });


})();
