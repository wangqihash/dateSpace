
Vue.component('todo-item',{
  /**
   * 通过 props进行和data 之间的数据通信 ，不然component中获取不到data中数据
   * 或者说是 父作用域与子组件之间的通信
   */
  props: ['todo'],
  template:'<li>{{todo.text}}</li>'
})

var app = new Vue({
  el: "#app",   // Vue 控制的范围
  data: {
    // message: 'hello Vue',
    message:"绑定元素特性//但 data 是固定写法",
    seen:true,
    todos:[
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ],
    vModelData:"temp vModelData",
    groceryList:[
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]

  },
  methods: {  // 方法也是固定模式 和 数据同理
    reverseMessage(){
      this.message = this.message.split("").reverse().join('');
    }
  }

});
