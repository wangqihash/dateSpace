var data = {
  ok: true,
  styleObject: {
    color:'rgb(80, 203, 46)',
    fontSize:'30px'
  },
  classObject: {
    classColor: true,
    classFontSize: true,
  },
  loginType: "username",

};
var vm = new Vue({
  el: ".app",
  data: data,
  methods: {
    vClick() {
      this.loginType === "username" ? this.loginType = "" : this.loginType = "username"
    }
  }

});
