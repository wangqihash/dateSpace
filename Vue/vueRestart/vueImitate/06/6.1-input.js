var app = new Vue({
  el: "app",
  data:{
    "message": "hash",
    selected: ['html', 'js', "css"],
    value: "temp"
  },
  methods: {
    handleInput(e) {
      this.message = e.target.value
    },
  },

})
