// 游戏主函数
let _main = {
  Lv: 1,
  MAXLV: 3,
  // 游戏的主要对象
  scene: null,
  blockList: null,
  ball: null,
  score: null,

  ball_x: 491,
  ball_y: 432,
  paddle_x: 449,
  paddle_y: 450,
  score_x: 10,
  score_y: 30,
  fps: 60,
  game: null,
  start: function(){
    let self = this;

    //生成场景
    // self.scene = new Scene(self.LV);

    // 实例化所有砖块对象集合
    // self.blockList = self.scene.

    // 小球
    self.ball = new Ball(self)

    // 挡板
    self.paddle = new Paddle(self);

    // 积分器
    // self.score = new Score(self);

    // 游戏逻辑
    self.game = new Game(self.fps);
    self.game.init(self);

    console.log(self, "self");

  },
};

_main.start();
