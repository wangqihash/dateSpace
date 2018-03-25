(function() {
  // var width = document.documentElement.getBoundingClientRect().width;
  var width = document.documentElement.clientWidth || document.body.clientWidth;;

  console.log(width, "width");
  var dev = 640;
  // if (width > dev) {
  //   width = dev;
  //   return;
  // }

  // 页面缩放到 640px时，这是 html => font-size:100px
  document.documentElement.style.fontSize = width / dev * 100 + 'px';

})();


// 模拟无限加功能， 分页的需要后台做分页处理，然后对总页数进行判断处理
(function() {
  var data = [
    {
      'title': "文件列表1" , 'container': '我是文件列表的内容1'
    }, {
      'title': "文件列表2" , 'container': '我是文件列表的内容2'
    }, {
      'title': "文件列表3" , 'container': '我是文件列表的内容3'
    }, {
      'title': "文件列表4" , 'container': '我是文件列表的内容4'
    }, {
      'title': "文件列表5" , 'container': '我是文件列表的内容5'
    }, {
      'title': "文件列表6" , 'container': '我是文件列表的内容6'
    }
  ];

  var container = $(".container");
  function showAjax(data) {
    var htmlTmp = "";
    for (var i = 0; i < data.length; i++) {
      htmlTmp += "<h4 style='fontSize:14px'>" + data[i].title + "</h4>"
      htmlTmp += "<p>" + data[i].container + "</p>"
    }
    container.append(htmlTmp)


  }
  function scrollFn() {
    //真实内容的高度
    var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
    //视窗的高度   即在浏览器中所能看到的内容的高度
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    //隐藏的高度   视窗上面隐藏掉的部分，即滚动条滚动的距离
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log("元素内容的高度:", pageHeight, "视窗的高度:", viewportHeight, "隐藏的高度:", scrollHeight)
    if (false) { //数据全部加载完了
      return;
    } else if (pageHeight - viewportHeight - scrollHeight < 10) { //如果满足触发条件，执行
      console.log(pageHeight - viewportHeight - scrollHeight)
      console.log("重新加载")
      showAjax(data);
    }
  }

  $(window).bind("scroll", scrollFn); //绑定滚动事件

})();

(function() {
  // http://blog.csdn.net/helloxiaoliang/article/details/51492250

  // var page=1; 当前页的页码
  // var flagNoData = false; false
  // var allpage; 总页码，会从后台获取
  // function showAjax(page){
  //   $.ajax({
  //     url:"",
  //     type:"",
  //     success:function(data){
  //       要执行的内容
  //       showContent();
  //         if(page>=data.allpage){ 当前页码大于等于总页码
  //         flagNoData = true;
  //         };
  //       page+=1;  页数加1
  //     }
  //   })
  // }
  // function scrollFn(){
  //   真实内容的高度
  //   var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
  //   视窗的高度
  //   var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
  //   隐藏的高度
  //   var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //      if(falgNoData){ 数据全部加载完了
  //      return;
  //     }else if(pageHeight - viewportHeight - scrollHeight < 10){  如果满足触发条件，执行
  //       console.log("重新加载")
  //      showAjax(page);
  //   }
  // }
  // $(window).bind("scroll",scrollFn);  绑定滚动事件
})();
