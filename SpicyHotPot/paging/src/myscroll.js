var mescroll = new MeScroll("mescroll", {
  down: {
  },
  up: {
    auto:true,//初始化完毕,是否自动触发上拉加载的回调
    isBoth: true, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
    isBounce: false,
    clearEmptyId: "dataList", //1.下拉刷新时会自动先清空此列表,再加入数据; 2.无任何数据时会在此列表自动提示空
    callback: getListData, //上拉回调,此处可简写; 相当于 callback: function (page) { getListData(page); }
  }
});


function getListData(page) {
  console.log("上拉数+")
  getListDataFromNet(page.num, page.size, function(curPageData) {
    mescroll.endSuccess(curPageData.length);
    setListData(curPageData);
  }, function() {
    mescroll.endErr();
  })
};

/* 设置列表数据 */
function setListData(curPageData) {
  var listDom = document.getElementById("dataList");
  for (var i = 0; i < curPageData.length; i++) {
    var pd = curPageData[i];

    var str = '<img class="pd-img" src="' + pd.pdImg + '"/>';
    str += '<p class="pd-name">' + pd.pdName + '</p>';
    str += '<p class="pd-price">' + pd.pdPrice + ' 元</p>';
    str += '<p class="pd-sold">已售' + pd.pdSold + '件</p>';

    var liDom = document.createElement("li");
    liDom.innerHTML = str;
    listDom.appendChild(liDom);
  }
}

function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
  setTimeout(function() {
    $.ajax({
      type: 'GET',
      url: '../json/pdlist1.json',
      dataType: 'json',
      success: function(data) {
        //模拟分页数据
        var listData = [];
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (i == data.length)
            break;
          listData.push(data[i]);
        }
        // console.log(listData, "listData")
        successCallback(listData);
      },
      error: errorCallback
    });
  }, 1000)
}




// 每次 下拉也会出发该函数
var loadFileList = function(){
  $scope.originData = [];
   // $scope.fileData = [];
  // 调用此方法（ 类似mescroll 插件回掉）， 会执行 getData函数
  pageing.success();
}

var getData = function(){
  $.ajax({
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $scope.originData.concat(data); // 1 2 3
      $scope.fileData = []; //  这里制空  我为了解决异步问题
      //  处理data  数据的一些逻辑
      //  对数据做了排序处理
      if(data.content[i].inews){
        $scope.oldData = yy
      } else{
        $scope.newsData = xx
      }
      $scope.fileData = $scope.newsData.concat($scope.oldData);

      // 如果这是第二次请求
      if(data.length>20){
         $scope.fileData = $scope.originData;
      }

  })
}

 拿到数据后   ng-repeat= "item in fileData"  显示数据
