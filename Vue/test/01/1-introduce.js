var app = new Vue({
  el: '#app',
  data: {
    messages: 'Hello Vue'
  }
});

var introduceBind = new Vue({
  el: ".introduce-bind",
  data: {
    message: '页面加载于' + new Date().toLocaleDateString()
  }
});
var introduceIf = new Vue({
  el: '.introduce-if',
  data: {
    seen: 'true'
  }
});
// introduceIf.seen = false;

var introduceFor = new Vue({
  el: '.introduce-for',
  data: {
    todos: [
      {
        sname: 'wangqi'
      }, {
        age: '11'
      }, {
        job: 'codding'
      }
    ]
  }
});

introduceFor.todos.push({test: '新增加的~~~'});

var introduceOn = new Vue({
  el: '.introduce-on',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage() {
      console.log(this.message.split("").reverse().join(""), "this");
    }
  }
});

var introduceModel = new Vue({
  el: '.introduce-model',
  data: {
    message: 'Hello Vue2'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});
var introduceComponent = new Vue({
  el: '.introduce-component',
  data: {
    groupList: [
      {
        id: 0,
        text: '蔬菜'
      }, {
        id: 1,
        text: '水果'
      }, {
        id: 2,
        text: '其他'
      }
    ]
  }
});
