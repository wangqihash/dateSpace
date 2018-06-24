// 局部数据
var dataMutalData = {
  counter: 0,
};
//局部组件
var dataMutal = {
  props:[],
  template: `
            <div>数据交互 $on $emit
              <button @click='handleAdd()'>+1</button>
              <button @click='handleReduce()'>-1</button>
            </div> `,
  data: function(){
    return dataMutalData
  },
  methods: {
    handleAdd() {
      this.counter++;
      this.$emit('add', this.counter, "hash");
    },
    handleReduce(){
      this.counter--;
      this.$emit('reduce', this.counter, "temphash");
    },
  }

};

var app = new Vue({
  el: "#app",
  data: {
    total: 0,
  },
  methods: {
    handleGetTotal(total){
      console.log(arguments);
      this.total = total;
    }
  },
  computed:{},
  components: {
    "data-mutal": dataMutal,
  }

});
