(function() {

  function Func() {};
  var func = new Func();

  console.log(func.__proto__ === Func.prototype);
  console.log(Func.prototype, "Func.prototype");
  console.log(Func.__proto__, "Func.__proto__");
  console.log(func.__proto__, "func.__proto__");

  console.log(func.__proto__.constructor.prototype, "func.__proto__.prototype");
})();

console.log("============时间处理===============", "\n");
(function() {
  var data = [
    {
      updatatime: "2018-06-21 22:36"
    }, {
      updatatime: "2018-06-21 20:36"
    },{
      updatatime: "2018-06-20 12:36"
    },{
      updatatime: "2018-06-20 18:36"
    },{
      updatatime: "2018-06-19 22:36"
    },{
      updatatime: "2017-03-12 22:36"
    },{
      updatatime: "2016-05-19 22:36"
    },
    {
      updatatime: "2016-05-19 22:36"
    },
  ];


  console.log(data, "data");

  var timeContainer = [];
  var showTimeContainer = [];
  for(var i = 0; i<data.length; i++){
    data[i].updatatime = data[i].updatatime.slice(0,10);
    if(timeContainer.indexOf(data[i].updatatime) == -1){
        timeContainer.push(data[i].updatatime)
    }
  }
  for(var j =0; j<timeContainer.length; j++){
    showTimeContainer.push([])
  }
  for(var k = 0; k<data.length; k++){
    for(var m = 0; m<timeContainer.length; m++){
      if(data[k].updatatime==timeContainer[m]){
        showTimeContainer[m].push(data[k])
      }
    }
  }
  // console.log(timeContainer, "timeContainer");
  console.log(showTimeContainer, "showTimeContainer")
})();

(function() {})();
(function() {})();
(function() {})();
