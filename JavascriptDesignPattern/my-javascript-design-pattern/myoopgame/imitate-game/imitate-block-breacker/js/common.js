
// 生成图片的封装
const imageFromPath = function(src){
  let img = new Image();
  img.src = './images/'+ src;
  return img
};

// 图片素材路径
const allImg = {
  background: 'background.jpg',
  paddle: 'paddle.png',
  ball: 'ball.png',
  block1: 'block001.png',
  block2: 'block002.png',
};

// 检测页面不可见时自动暂停游戏方法
const isPageHidden = function(game){
  // 这里的 isHidden类型是一个boolean但是我测试 拿到的只是一个false
  // document.hidden 需要做兼容处理
  var isHidden = document.hidden;
  document.addEventListener("visibilitychange", function(){
    // document.visibilityState 有四个状态值
    if(document.visibilityState == 'hidden'){
      // 隐藏时
      game.state = game.state_STOP;
    }else if(document.visibilityState == 'visible') {
      // 显示时
      setTimeout(function(){
        game.state = game.state_RUNNING;
      }, 100)
    }

  })

};
