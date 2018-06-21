var app = new Vue({
  el: "#app",
  data: {
    type: "name",
    isShow: true,
    isClassArr: {
      "fontSize": "16px",
      "color": "red",
    },
    arrMethods: [
      {"name": "-三国-wang"},
      {"name": "-盗墓笔记-wang"},
      {"name": "ding-斗破苍穹-ding"},
    ],
  },
  methods: {
    handleToggleClick() {
      this.type = this.type === "name" ? "mail" : "name";
    }
  }
})
app.arrMethods.push({"name": "西游记"});

app.arrMethods = app.arrMethods.filter(function(item){
  return item.name.match(/wang/)
})
