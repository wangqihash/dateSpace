var data = {};
Vue.component("my-component", {
  template: '<div> Vue的 全局组件 </div>'
});
var Child = {
  template: '<div>局部注册 组件</div>'
};
var vm = new Vue({
  el: ".app",
  data: data,
  components: {
    'local-scope': Child,
  }
});




console.log(vm)
console.log(Vue)
