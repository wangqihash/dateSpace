var data = {
  parentMessage: "水果列表",
  items: [
    {message: "香蕉"},
    {message: "苹果"},
    {newM: "xxx"},
  ],
  objItems:{
    sname: "hash",
    sage: "11",
    sex: "man",
  }
};
var vm = new Vue({
  el: '.app',
  data: data,

});
