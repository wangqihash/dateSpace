var padDate = function(val){
  return val < 10 ? ("0" + val) : val;
};

var app = new Vue({
  el: "#app",
  data: {
    data: new Date(),
  },

  filters: {
    formatDate(val) {
      var date = new Date(val);
      var year = date.getFullYear();
      var month = padDate(date.getMonth() + 1);
      var day = padDate(date.getDate());
      var hours = padDate(date.getHours());
      var minutes = padDate(date.getMinutes());
      var seconds = padDate(date.getSeconds());
      return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    },
  },

  mounted() {
    var self = this;
    this.time = setInterval(function(){
      self.data = new Date();
    },1000)
  },

  beforeDestroy() {
    if(this.time){
      clearInterval(this.time);
    }
  },

})
