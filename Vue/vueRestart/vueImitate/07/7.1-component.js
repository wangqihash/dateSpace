
var data = {
  counter: 0,

};

//全局组件 [且组件的声明必须在实例Vue之前]
Vue.component("global-component", {
  template: "<button @click='counter++'>{{counter}}</button>",
  data: function(){
    return {
      counter: 0,
    };
  },
});

//局部组件
var localComponent = {
  template: "<div >local-component {{localText}}<button @click='num--'>{{num}}</button> </div>",
  data: function(){
    return {
      num: 0,
      localText: "是一个局部组件",
    }
  }
};
var app = new Vue({
  el: "app",
  data: {
    tempData:"来自new Vue的tempData",
    hashNum: 100,
  },
  components: {
    "local-component": localComponent,
  },
  methods: {
  },
  computed: {

  },
})


var app1 = new Vue({
  el: "app1",
  data: {},
  methods: {},
  computed: {},
})
