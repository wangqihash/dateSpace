$(function(){
  //创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,刷新列表数据;
  var mescroll = new MeScroll("body", { //id固定"body"
    //上拉加载的配置项
    up: {
      callback: getListData, //上拉回调,此处可简写; 相当于 callback: function (page) { getListData(page); }
      noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
      //加载第一页无数据是的 展示参数
      empty: {
        icon: "img/mescroll-empty.png", //图标,默认null
        tip: "暂无相关数据~", //提示
        btntext: "去逛逛 >", //按钮,默认""
        btnClick: function(){//点击按钮的回调,默认null
          alert("点击了按钮,具体逻辑自行实现");
        }
      },
      //1.下拉刷新时会自动先清空此列表,再加入数据; 2.无任何数据时会在此列表自动提示空
     clearEmptyId: "dataList", //相当于同时设置了clearId和empty.warpId; 简化写法;默认null
      toTop:{ //配置回到顶部按钮
        src : "img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
        //html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
        //offset : 1000
      }
    }
  });

  /*初始化菜单*/
  var pdType=0;//全部商品0; 奶粉1; 面膜2; 图书3;
  $(".nav p").click(function(){
    var i=$(this).attr("i");
    if(pdType!=i) {
      //更改列表条件
      pdType=i;
      $(".nav .active").removeClass("active");
      $(this).addClass("active");
      //重置列表数据
      mescroll.resetUpScroll();
    }
  })

  /*联网加载列表数据  page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
  function getListData(page){
    //联网加载数据
    getListDataFromNet(pdType, page.num, page.size, function(curPageData){
      //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
      //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
      console.log("pdType="+pdType+", page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length);

      mescroll.endSuccess(curPageData.length);

      //设置列表数据
      setListData(curPageData);
    }, function(){
      //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
              mescroll.endErr();
    });
  }

  /*设置列表数据*/
  function setListData(curPageData){
    var listDom=document.getElementById("dataList");
    for (var i = 0; i < curPageData.length; i++) {
      var pd=curPageData[i];

      var str='<img class="pd-img" src="'+pd.pdImg+'"/>';
      str+='<p class="pd-name">'+pd.pdName+'</p>';
      str+='<p class="pd-price">'+pd.pdPrice+' 元</p>';
      str+='<p class="pd-sold">已售'+pd.pdSold+'件</p>';

      var liDom=document.createElement("li");
      liDom.innerHTML=str;
      listDom.appendChild(liDom);
    }
  }

  /*联网加载列表数据
   在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
   请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
   实际项目以您服务器接口返回的数据为准,无需本地处理分页.
   * */
  function getListDataFromNet(pdType,pageNum,pageSize,successCallback,errorCallback) {
    //延时一秒,模拟联网
            setTimeout(function () {
              $.ajax({
                type: 'GET',
                url: 'json/pdlist1.json',
                dataType: 'json',
                success: function(data){
                  var listData=[];

                  //pdType 全部商品0; 奶粉1; 面膜2; 图书3;
                  if(pdType==0){
                    //全部商品 (模拟分页数据)
            for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
                    if(i==data.length) break;
                    listData.push(data[i]);
                  }

                  }else if(pdType==1){
                    //奶粉
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].pdName.indexOf("奶粉")!=-1) {
                        listData.push(data[i]);
                      }
                    }

                  }else if(pdType==2){
                    //面膜
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].pdName.indexOf("面膜")!=-1) {
                        listData.push(data[i]);
                      }
                    }

                  }else if(pdType==3){
                    //图书
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].pdName.indexOf("图书")!=-1) {
                        listData.push(data[i]);
                      }
                    }
                  }

                  //回调
                  successCallback(listData);
                },
                error: errorCallback
            });
            },1000)
  }

});
