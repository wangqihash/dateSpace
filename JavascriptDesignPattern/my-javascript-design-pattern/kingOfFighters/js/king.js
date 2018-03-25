function Game(obj) {
  this.obj = obj;
  this.time = null;
  this.left = 100;
}
//改变 图片 运动状态的函数
Game.prototype.skill = {
  "87": function() {
    this.obj.src = 'images/7490881c38cfba5ef724e4ba.gif'; //w
  },
  "65": function() {
    this.obj.src = 'images/retreat.gif'; //a
    this.time = setInterval(function() {
      this.left -= 5;
      this.obj.style.left = this.left + "px";
      //这里通过bind 能够留着this [原来setInterval中的this指向的是 window现在指向Game对象]
    }.bind(this), 1000 / 60)
  },
  "83": function() {
    this.obj.src = 'images/stand.gif'; //s
  },
  "68": function() {
    this.obj.src = 'images/advance.gif'; //d
    this.time = setInterval(function() {
      this.left += 5;
      this.obj.style.left = this.left + "px";
    }.bind(this), 1000 / 60)
  }
}
Game.prototype.stop = function() {
  clearInterval(this.time);
  this.obj.src = 'images/stand.gif';
}
Game.prototype.active = function(keycode) {
  if (this.skill[keycode]) {
    /*
    * Function.prototype.call(arg1 ,arg2);
    * arg1: 函数体内this对象的志向
    * arg2: 作为Function的参数传入 [call中的为带下标的结合 apply中的是一个数组]
    * call现在的作用 => 借用Game.skill() 方法
    */
    this.skill[keycode].call(this);
  }
}

var imgMC = document.getElementById("mc");
var person = new Game(imgMC);

// aa.onclick = function(){}
document.onkeydown = key;
function key(ev) {
  //w:87,a:65,s:83,d:68
  person.active(ev.keyCode);
  this.onkeyup = function() {
    person.stop();
    this.onkeydown = key;
  }
  this.onkeydown = null;
}
