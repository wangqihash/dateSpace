$(document).ready(function() {
  // setInterval(init, 2000);
  init();
});

var init = function() {
  $.ajax({
    // url: ' http://route.showapi.com/64-19',
    // url:'192.168.1.113:8080',
    // url:'http://192.168.1.113:8080/ProTest/HttpServer',
    url:'http://192.168.1.110:3000/123',
    type: 'get',
    // dataType:'jsonp',
    data: {
      // com: 'zhongtong',
      // nu: '535962308717'
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
