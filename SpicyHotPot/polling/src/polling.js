$(document).ready(function() {
  // setInterval(init, 2000);
  // init();
});

var init = function() {
  $.ajax({
    url: ' http://route.showapi.com/64-19',
    type: 'get',
    data: {
      com: 'zhongtong',
      nu: '535962308717'
    },
    success: function(data) {
      console.log(data);
      var container = $(".container");
      var htmlText = "";
      htmlText += "<p>" + data + "<p>";
      container.append(htmlText);
    }
  });
};

var sendArg = function() {};
