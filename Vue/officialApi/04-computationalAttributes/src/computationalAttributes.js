var data = {
  message: 'Vue!',
  tempClickData: "string",
  firstName: 'Fo0',
  lastName: 'Bar1',
  fullName: 'Foo Bar',
  question: '',
  answer: '在你问问题之前我不能给你答复!'
};

var vm = new Vue({
  el: ".app",
  data: data,
  // 计算属性
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    },
    now: function() {
      return Date.now()
    },
    lastName: function() {
      // alert(123);  ????
    },
    lastName:{
      get: function () {
        alert(213);
        return this.firstName + ' ' + this.lastName
      },
    }

  },
  // 方法
  methods: {
    reversedMessage1() {
      // var hash = this.message.split('').reverse().join('');
      // console.log(hash);
      return this.message.split('').reverse().join('');
    },

    tempClick: function() {
      console.log(this);
      this.tempClickData = Date.now()
      console.log(data.tempClickData)
    },

    getAnswer: _.debounce(
      function(){
        if(this.question.indexOf('?') === -1){
          this.answer = '问题通常包含问号。'
          return
        }
        this.answer = '谢谢...';
        var vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function(response){
            console.log(response,"response");
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function(error){
             vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      500
    )

    // getAnswer: _.debounce(
    //   function () {
    //     if (this.question.indexOf('?') === -1) {
    //       this.answer = 'Questions usually contain a question mark. ;-)'
    //       return
    //     }
    //     this.answer = 'Thinking...'
    //     var vm = this
    //     axios.get('https://yesno.wtf/api')
    //       .then(function (response) {
    //         vm.answer = _.capitalize(response.data.answer)
    //       })
    //       .catch(function (error) {
    //         vm.answer = 'Error! Could not reach the API. ' + error
    //       })
    //   },
    //   // 这是我们为判定用户停止输入等待的毫秒数
    //   500
    // )

  },

  // 监听
  watch: {
    firstName: function(newV, oldV){
      // this.fullName = val + '' + this.lastName
      this.fullName = this.lastName
      // alert(123);
    },
    // lastName: function(val){
    //   this.fullName = this.firstName + '' + val
    // },
    question: function() {
      this.answer = '等你停止打字...',
      this.getAnswer()
    },
  }

})
vm.message = 'Goodbye';
console.log(data.tempClickData);
// console.log(vm.lastName.get);

// vue 中的 methods方法中取不到值  as => vm.xx
// console.log(vm.reversedMessage1);

/**
 *  方法： 每次加载都会重新执行
 *  计算属性:   计算属性是基于它们的依赖进行缓存的 只有在它的相关依赖发生改变时才会重新求值
 *          作用：当遇到性能开销较大的情况下，可以使用属性机制(和方法机制结果相同，但性能较高)
 *                可联想到 代理缓存机制
 *  监听:
 *
 */
