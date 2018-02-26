var data = {};
var vm = new Vue({
  el: ".app",
  data: data,
  methods: {
    greet(arg) {
      console.log(event);
      console.log('js文件中手动执行的方法!!!' + arg);
      if (event) {
        alert(event.target.tagName);
      }

    }
  }
});

console.log(vm.greet('hash'));
