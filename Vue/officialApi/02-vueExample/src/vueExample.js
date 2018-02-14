var data = {
  tempData: "hash"
};

// Object.freeze(data);

var app = new Vue({
  el: ".app",
  // 一切要映射到页面的数据，都必须先存在 Vue实例中的data中
  data: data,
  methods: {}

});
app.a = "qwe";

console.log(app.tempData, "app.tempData");
console.log(data.tempData, "tempData");


var obj = {
  tempData1: 'hash11',
  inputModel:"yeyeyy"
}
// Object.freeze 能够阻止以后的数据改变（首次加载的不能阻止  ）
// Object.freeze(obj)
var app1 = new Vue({
  el: ".app1",
  // data(){
  //   return {obj}
  // }
  data: obj,
  created() {
    console.log(this)
  }
  // created: ()=>{
  //   console.log(this);
  // }
});
// 类似 Angular中的监听
app1.$watch("inputModel",function(newV, oldV){
  console.log(arguments, "arguments");
})
