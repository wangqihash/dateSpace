console.log(" =======模拟移动端双击事件 ======= ");
(function(){
  var firstTouch;
  //console.log(firstTouch,"firstTouch");

  var btn = document.getElementsByClassName("btn")[0];
  btn.addEventListener("touchstart",function(){
    var currDate = new Date().getTime();
      console.log(firstTouch,"firstTouch");
      console.log(currDate,"currDate");
    if( currDate - firstTouch < 300){
      alert(firstTouch)
      // console.log(firstTouch);
      firstTouch = 0;
      // console.log(currDate);
      alert(firstTouch)
    } else {
      firstTouch = currDate
    }

  });

})();


(function(){})();
(function(){})();
(function(){})();
(function(){})();
(function(){})();
