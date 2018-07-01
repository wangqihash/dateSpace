var showDate = [
  {
    "id": "1",
    "product": "iphone7",
    "price": "6188",
    "count": "1",
    "category": "电子",
    "check": false
  }, {
    "id": "2",
    "product": "ipad Pro",
    "price": "5888",
    "count": "1",
    "category": "电子",
    "check": false
  }, {
    "id": "3",
    "product": "MacBook Pro",
    "price": "21488",
    "count": "1",
    "category": "电子",
    "check": false
  }, {
    "id": "4",
    "product": "三国演义",
    "price": "218",
    "count": "1",
    "category": "书籍",
    "check": false
  }, {
    "id": "5",
    "product": "盗墓笔记",
    "price": "488",
    "count": "1",
    "category": "书籍",
    "check": false
  }, {
    "id": "6",
    "product": "斗破苍穹",
    "price": "88",
    "count": "1",
    "category": "书籍",
    "check": false
  }
];

var app = new Vue({
  el: "app",
  data: {
    showDate: showDate,
    ischeckSele: false,
    total: 0
  },
  mounted() {},

  methods: {
    //这里的加减 移除，都不需要缓存 要的是重新获新，所以这里用 methods是合适的
    handleReduce(index) {
      this.showDate[index].count !== 1
        ? this.showDate[index].count--
        : true
    },
    handleAdd(index) {
      this.showDate[index].count++
    },
    handleDele(index) {
      this.showDate.splice(index, 1);
    },

    checkSeleSingle(item) {
      item.check = !item.check;
    },
    checkSeleAll() {
      let isAll = document.querySelector('all');
      if (isAll.checked == true) {
        this.showDate.forEach(function(item, index) {
          item.check = true;
        })
      } else {
        this.showDate.forEach(function(item, index) {
          item.check = false;
        })
      }
    },
    selectCategory(seleselectcategory) {
      let isSeleElect = document.querySelector('isSeleElect');
      let isSeleBook = document.querySelector('isSeleBook');

      this.showDate.forEach(function(item, index) {
        if (seleselectcategory == "Electronics") {
          if (isSeleElect.checked == true) {
            if (item.category == "电子") {
              item.check = true;
            }
          } else {
            if (item.category == "电子") {
              item.check = false;
            }
          }

        } else if (seleselectcategory == "Book") {
          if (isSeleBook.checked == true) {
            if (item.category == "书籍") {
              item.check = true;
            }
          } else {
            if (item.category == "书籍") {
              item.check = false;
            }
          }
        }

      })
    }
  },
  computed: {
    //计算总价格 当价码不变时，也就不再重新请求，减少开支
    totalPrice() {
      let total = 0;
      this.showDate.forEach(function(val, index) {
        if (val.check == true) {
          total += parseFloat(val.price * val.count);
        }
      })
      return total.toString().replace(/B(?=(\d{3})+$)/g, ",");
    }
  },

  beforeDestroy() {}
})
