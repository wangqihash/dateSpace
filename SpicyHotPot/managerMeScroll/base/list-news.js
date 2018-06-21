$(function() {
  // 第一个参数"mescroll"对应上面布局结构div的id
  var mescroll = new MeScroll("mescroll", {
    down: {
      use: true,
      auto: false,
      isLock: false,
      offset: 80,
      callback: downCallback
    },
    up: {
      use: true,
      auto: true,
      isLock: false,
      offset: 80,
      clearEmptyId: "newsList",
      htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">游游正在努力加载中..</p>',
      htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
      callback: upCallback
    }
  });

  function downCallback() {
    getListDataFromNet(0, 1, function(data) {
      //请求数据成功，将mescroll的加载状态隐藏
      mescroll.endSuccess();
      //拼接数据到页面上
      setListData(data, false)
    }, function() {})
    mescroll.endErr();
  };

  function upCallback(setPage) {
    getListDataFromNet(setPage.num, setPage.size, function(data) {
      // mescroll.endByPage(当前页长度， 总数量)
      mescroll.endSuccess(data.length);
      setListData(data, true)
    }, function() {
      mescroll.endErr();
    })
  };

  /**
   * [setListData 设置列表数据]
   */
  function setListData(data, isAppend) {
    var listDom = document.getElementById("newsList");
    for (var i = 0; i < data.length; i++) {
      var newObj = data[i];
      var str = '<p>' + newObj.title + '</p>';
      str += '<p class="new-content">' + newObj.content + '</p>';
      var liDom = document.createElement("li");
      liDom.innerHTML = str;

      if (isAppend) {
        listDom.appendChild(liDom);
      } else {
        listDom.insertBefore(liDom, listDom.firstChild);
      }
    }
  };

  /**
   * [getListDataFromNet 联网加载数据]
   * pageNum：第几页
   * pageSize：每页多少条数据
   * @return {[type]} [description]
   */
  var downIndex = 0;
  function getListDataFromNet(pageNum, pageSize, successCallBack, errorCallback) {
    setTimeout(function() {
      try {
        var newArr = [];
        //区分上下拉，来加载不同数据
        //下拉
        if (pageNum == 0) {
          downIndex++;
          var obj = {
            title: "新增新闻标题" + downIndex,
            content: "新增新闻内容"
          };
          newArr.push(obj);
          //上拉
        } else {
          for (var i = 0; i < pageSize; i++) {
            var upIndex = (pageNum - 1) * pageSize + i + 1;
            var newObj = {
              title: "【新闻" + upIndex + "】 标题标题标题标题标题标题",
              content: "内容内容内容内容内容内容内容内容内容内容"
            };
            newArr.push(newObj);
          }
        }
        //这里的 newArr的数据就相当于Ajax请求后的数据，但不同的是这里的数据是无限制的
        successCallBack && successCallBack(newArr);
      } catch (e) {
        errorCallback && errorCallback();
      }

    }, 1000)
  }



})
