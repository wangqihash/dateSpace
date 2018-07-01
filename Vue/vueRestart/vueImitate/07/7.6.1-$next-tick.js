var app = new Vue({
  el: "app",
  data: {
    showEle:false,
    testData:'begin',
  },
  methods: {
    getText() {
      this.showEle = true;
      // this.$nextTick(function(){
      //   var htmlStr = document.getElementById("div");
      //   console.log(htmlStr, "htmlStr+");
      // });
      // var htmlStr = document.getElementById("div");
      // console.log(htmlStr, "htmlStr+");

      this.testData = 'end';
      // console.log(this.testData);    // end
      console.log(this.$refs.testData.innerText);  // begin

    }
  }
});

/**
 *  http://www.sohu.com/a/227583981_500651
 * vm.$nextTick 作用： 可以理解成 和computed类似
 * 当所有状态都计算处理好了，只要更新最后一次的状态，就行 这样能够减少计算，渲染的开支
 * 这么做，需要等到 将渲染操作推迟到所有状态都修改完毕，vue将渲染操作推迟到本轮事件循环的最后
 *  这里就用到了异步
 */
