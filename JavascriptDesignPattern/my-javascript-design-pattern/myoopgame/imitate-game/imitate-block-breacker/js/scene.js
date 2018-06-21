/**
 * 定义挡板对象
 */
class Paddle {
  constructor(_main) {
    let p = {
      // x 坐标轴
      x: _main.paddle_x,
      // y 坐标轴
      y: _main.paddle_y,
      // 挡板的宽度
      w: 102,
      // 挡板的高度
      h: 22,
      // 挡板的速度
      speed: 10,
      // 小球反弹最大速度
      ballSpeedMax: 8,
      // 引用挡板图片
      image: imageFromPath(allImg.paddle),
      // 是否左移
      isLeftMove: true,
      //  是否右移
      isRightMove: true
    };
    Object.assign(this, p);
  }

  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  // 小球和挡板是否碰撞的处理
  collide(ball) {
    let b = ball;
    let p = this;
    if (Math.abs((b.x + b.w / 2) - (p.x + p.w / 2)) < (b.x + p.x) / 2 && Math.abs((b.y + b.h / 2) - (p.y + p.h / 2)) < (b.h + p.h) / 2) {
      return true
    }
    return false
  }
  // 计算小球和挡板碰撞后 小球的速度
  collideRange(ball) {
    let b = ball;
    let p = this;
    let rangeX = 0;
    rangeX = (p.x + p.w / 2) - (b.x + b.w / 2);
    // 说明小球碰撞在挡板的左侧
    if (rangeX > 0) {
      return rangeX / (b.w / 2 + p.w / 2) * p.ballSpeedMax;
      // 说明小球碰撞在挡板的右侧
    } else if (rangeX < 0) {
      return rangeX / (b.w / 2 + p.w / 2) * p.ballSpeedMax
    }
  }
};

/**
 * 小球对象
 */
class Ball {
  constructor(_main) {
    let b = {
      x: _main.ball_x,
      y: _main.ball_y,
      w: 18,
      h: 18,
      speedX: 1,
      speedY: 5,
      image: imageFromPath(allImg.ball),
      //小球是否运动
      fired: false
    }
    Object.assign(this, b);
  };
  //小球的移动,
  move(game) {
    if (this.fired) {
      //处理小球与边界碰撞后的方向
      if (this.x < 0 || this.x > 1000 - this.w) {
        this.speedX *= -1;
      }
      // 向上运动为负，向下为正
      if (this.y < 0) {
        this.speedY -= -1
      }
      // 表示向下且 超出低下canvas部分
      if (this.y > 500 - this.h) {
        game.state = game.state_GAMEOVER
      }

      this.x -= this.speedX;
      this.y -= this.speedY;
    }
  }

};
