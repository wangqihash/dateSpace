// 用来作为交互的空实例
var bus = new Vue({});

//实例数据
var exampleData = {
  message: "",
  showChild: "false",
};
//局部组件数据
var mutualComponentData = {
  mutualComponentMessage: "我是来自局部组件的String数据",
};
//局部组件
var mutualComponent = {
  template: `<button @click="handleEvent()" >子组件=>父级</button>`,
  data: function(){return mutualComponentData},
  methods: {
    handleEvent() {
      bus.$emit("on-message", this.mutualComponentMessage);
      console.log(this, "this");
      //这里直接通过子组件 修改了父级里的内容，但并不推荐这么写,[紧耦合了]
      // this.$parent.message = "我是来自 this.$parent.message中的数据"
    }
  }
};
var app = new Vue({
  el: "app",
  data: exampleData,
  mounted() {
    var self = this;
    bus.$on("on-message", function(data){
      self.message = data;
    })
  },
  components: {
    'mutual-component': mutualComponent
  },
  methods: {
    handleRef() {
      // console.log(this, "this");
      var msg = this.$refs.mutualComponentRef.mutualComponentMessage;
      console.log(msg, "msg");
    }
  }

});
