// var model = avalon.define("app", function(vm) {
//   console.log(vm);
// })
var vm = avalon.define({
  $id: "app",
  nmae: "hahs",
  array: [
    1, 2, 3
  ],
  methods: function() {
    alert(12);
  },
  aaa: "aaa bbb ccc",
  bbb: 'ddd',
  ccc: ['xxx', 'yyy', 'zzz']
})

vm.array.toJSON() //这个比push方法好用
console.log(vm.array);
// vm.array = [5,6,7];
// console.log(vm.array);
