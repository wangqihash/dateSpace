class Game {
  constructor(fps = 60) {
    let g = {
      actions: {},
      keydowns: {},
      state: {},
      state_START: 1,
      state_RUNNING: 2,
      state_STOP: 3,
      state_GAMEOVER: 4,
      state_UPDATE: 5,
      canvas: document.getElementById("canvas"),
      context: document.getElementById("canvas").getContext("2d"),
      timer: null,
      fps: fps
    };
    Object.assign(this, g);
  };

  //绘制页面所有内容
  draw(paddle, ball, blockList, score) {
    let g = this;
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
    g.drawBg();
    g.drawImage(paddle);
    g.drawImage(ball);
    //绘制blockList
    g.drawAllBlock(blockList);
    //绘制score

  };

  //绘制canvas中的内容
  drawImage(obj) {
    this.context.drawImage(obj.image, objx, obj.y);
  };

  //绘制背景图
  drawBg() {
    let bg = imageFromPath(allImg.background);
    this.context.drawImage(bg, 0, 0);
  };

  //绘制所有砖块
  drawAllBlock(list) {
    for (let item of list) {
      this.drawImage(item);
    }
  };

  init(_main) {
    let g = this;
    // wq 生成挡板对象
    let paddle = _main.paddle;
    // wq 生成小球对象
    let ball = _main.ball;
    // wq 生成所有砖块对象集合
    let blockList = _main.blockList;
    // wq 生成计分板
    let score = _main.score;
    window.addEventListener('keydown', function(event) {
      g.keydowns[event.keyCode] = true;
    })
    window.addEventListener('keyup', function(event) {
      g.keydowns[event.keyCode] = false;
    })

    window.addEventListener('keydown', function() {})

  };

};
