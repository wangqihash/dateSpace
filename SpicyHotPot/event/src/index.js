var oBox = document.getElementById('box');

window.onload = function() {

  oBox.onmousedown = function(ev) {
    ev = ev || window.event;    // 兼容 火狐游览器[window.event]
    // 点击具体 元素内的坐标 [从元素左上(0,0)开始计算]
    // 只存在 chrome ie 火狐中但值始终为0 需做兼容
    console.log(ev.offsetX, ev.offsetY ,"ev.offsetX x ,y");

    // 鼠标距离页面左侧的距离 [从页面左上(0,0)开始计算]  这三个得到相同结果
    console.log(ev.x, ev.y, "ev.x x ,y");
    console.log(ev.clientX, ev.clientY ,"ev.clientX x ,y");
    console.log(ev.pageX, ev.pageY ,"ev.pageX x ,y");   // 火狐中没有 ev.x 需用此来兼容

    console.log(ev.screenX, ev.screenY ,"ev.screenX  x ,y");

    console.log(ev.layerX, ev.layerY, "ev.layerX x ,y");

  };
};
