var data = {
  isActive: true,
  hasError: false,
  classObject: {
    tempHash: true,
    tempisHave: true,
  },
  objIsActive: 'objActive',
  styleObject: {
    color: 'red',
    fontSize: '13px'
  },
};

var vm = new Vue({
  el: ".app",
  data: data,

})
