

var recursionComponent = {
  name: "recursion-codemponent",
  props: {
    count: {
      type: Number,
      default: 1,
    }
  },
  template: `<div>
                  来自递归组件的中的内容
                 <recursion-codemponent :count="count+1" v-if="count<3"></recursion-codemponent>
               </div>`
};

var app = new Vue({
  el: "#app",
  components: {
    'recursion-codemponent': recursionComponent
  },
});
