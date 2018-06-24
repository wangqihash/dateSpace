//data
var exanpleData = {
  exanpleDes: "我是 Vue实例的数据",
  initcount: 0,
};
var componentsData = {
  componentDes: "我是 children-component组件的数据",
};
var globalData = {
  globalComponentData: "我是global-component组件数据",
  componentCount: this.initcount
};


//局部组件
var childrenComponent = {
  props: ['children-count', 'childrenComponentData', 'tempStringData'],
  template: "\
        <div style='color:red;'>难道不能写局部组件吗== {{childrenComponentData}} == {{tempStringData}}\
          <button @click='childrenCount++'>{{childrenCount}}</button>\
        </div>"
};

//全局组件
Vue.component('global-component', {
  props: ["formExanpleString", "formExanple", "width"],
  template: "\
            <div :style='style'>现在是全局的组件 =={{formExanpleString}} == {{formExanple}}\
            </div>",
  data: function(){
    return globalData
  },
  computed:{
    style(){
      return {
        width: this.width + "px",
      }
    },
  },
})

var app = new Vue({
  el: "#app",
  data: exanpleData,
  methods: {},
  computed: {},
  components: {
    props: ['hash'],
    "children-component": childrenComponent,
    data: function() {
      return componentsData
    }
  }
});
