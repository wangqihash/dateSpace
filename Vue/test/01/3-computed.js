var vm = new Vue({
  el: '.computed',
  data: {
    message: 'Hello'
  },
  computed: {
    reverseMessage() {
      return this.message.split("").reverse().join("")
    }
  }
});
