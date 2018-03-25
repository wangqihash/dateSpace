var listData;
var getData = function(){
  $.ajax({
    url: 'json/pageData.json',
    // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
    // data: {param1: 'value1'}
  })
  .done(function(data) {
    listData = data
    var tempHt = "";
    tempHt += "<tr><th>id</th><th>姓名</th><th>性别</th><th>年龄</th></tr>"
    for(var i=0; i<data.length; i++){
      tempHt += "<tr><td>"+data[i].id+"</td><td>"+data[i].sname+"</td><td>"+data[i].sex+"</td><td>"+data[i].sage+"</td></tr>"
    }
    document.getElementById("table").innerHTML = tempHt;
    goPage(1, 6)
  })

}

getData()

/**
 * 分页函数
 * pno--页数
 * psize--每页显示记录数
 * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数
 * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能
 **/
function goPage(pno, psize) {
  var itable = document.getElementById("table");
  // var num = itable.rows.length; //表格所有行数(所有记录数)
  //
  var num = listData.length;
  var totalPage = 0; //总页数
  var pageSize = psize; //每页显示行数
  //总共分几页
  if (num / pageSize > parseInt(num / pageSize)) {
    totalPage = parseInt(num / pageSize) + 1;
  } else {
    totalPage = parseInt(num / pageSize);
  }

  var currentPage = pno; //当前页数
  var startRow = (currentPage - 1) * pageSize + 1; //开始显示的行  31
  // console.log(startRow, "startRow");
  var endRow = currentPage * pageSize; //结束显示的行   40
  endRow = (endRow > num)
    ? num
    : endRow;
  // 40
  // console.log(endRow);

  //遍历显示数据实现分页
  for (var i = 1; i < (num + 1); i++) {
    // var irow = itable.rows[i-1];
    var irow = itable.rows[i];
    // console.log(irow)
    if (i >= startRow && i <= endRow) {
      irow.style.display = "block";
      // num[i].style.display = "block";
    } else {
      irow.style.display = "none";
    }
  }
  var tempStr = "共" + num + "条记录 分" + totalPage + "页 当前第" + currentPage + "页";
  if (currentPage > 1) {
    tempStr += "<a href=\"#\" onClick=\"goPage(" + (
    1) + "," + psize + ")\">首页</a>";
    tempStr += "<a href=\"#\" onClick=\"goPage(" + (
    currentPage - 1) + "," + psize + ")\"><上一页</a>"
  } else {
    tempStr += "首页";
    tempStr += "<上一页";
  }


  // 生成num
  // var tempjumpPage;

  for(var i=1; i<psize; i++){
     currentMaxPageNum = currentPage * psize;
     currentMinPageNum = (currentPage * psize) - (psize-1);
    console.log(currentMaxPageNum, currentMinPageNum)
     minAsMax = currentMaxPageNum - currentMinPageNum;
    // tempStr += "<a>"+currentMinPageNum+"</a>"
    // shou 1 2 3 4 5 6 wei
    // for(var j =2; j <= minAsMax; j++){
    //   tempStr += "<span>"+j+"</span>"
    // }
  }
  for(var j =2; j <= minAsMax; j++){
    // console.log(j)
    tempStr += "  <a href='#'>"+j+"</a>"
  }
  // tempStr += "12"

  if (currentPage < totalPage) {
    tempStr += "<a href=\"#\" onClick=\"goPage(" + (
    currentPage + 1) + "," + psize + ")\">下一页></a>";
    tempStr += "<a href=\"#\" onClick=\"goPage(" + (
    totalPage) + "," + psize + ")\">尾页</a>";
  } else {
    tempStr += "下一页>";
    tempStr += "尾页";
  }

  document.getElementById("showPage").innerHTML = tempStr;

}
