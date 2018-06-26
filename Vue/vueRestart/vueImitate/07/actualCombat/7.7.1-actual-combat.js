var app = new Vue({
  el: "#app",
  data:{
    value: 5,
  },
  components: {
    "input-number": inputNumber,
  }
});
