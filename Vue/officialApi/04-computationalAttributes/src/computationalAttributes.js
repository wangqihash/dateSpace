var data = {
  message: 'Vue!',
  tempClickData:"string"
};
var vm = new Vue({
  el: ".app",
  data: data,
  // 计算属性
  computed:{
    reversedMessage: function(){
      return this.message.split('').reverse().join('');
    },
    now: function () {
      return Date.now()
    }
  },
  // 方法
  methods: {
    reversedMessage1() {
      // var hash = this.message.split('').reverse().join('');
      // console.log(hash);
      return this.message.split('').reverse().join('');
    },

    tempClick: function () {
       console.log(this);
       this.tempClickData = Date.now()
       console.log( data.tempClickData)
    }
  }
})
vm.message = 'Goodbye';
console.log(data.tempClickData)
// vue 中的 methods方法中取不到值  as => vm.xx
// console.log(vm.reversedMessage1);
