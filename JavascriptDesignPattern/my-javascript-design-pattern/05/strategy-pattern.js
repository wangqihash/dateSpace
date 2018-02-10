console.log("============ 5.1 使用策略模式计算奖金  ==============");
(function() {
  var outputLevelA = function(arg) {
    return arg * 4;
  };
  var outputLevelB = function(arg) {
    return arg * 5;
  };
  var outputLevelC = function(arg) {
    return arg * 6;
  };

  var calcBonus = function(outlevel, salary) {
    if (outlevel === 'A') {
      return outputLevelA(salary);
    }
    if (outlevel === 'B') {
      return outputLevelB(salary);

    }
    if (outlevel === 'C') {
      return outputLevelC(salary);
    }
  };
  console.log(calcBonus('B', 8000));

})();
console.log("====改进版本 => 策略模式{1.算法的使用 [环境类]， 2.算法的实现 [策略类]} ====");
(function() {
  /**
   * [description]
   *  策略模式
   *    将不变的部分和变化的部分隔离开是每个设计模式的主题
   */
  var outlevel = function(salary) {}; //实现
  outlevel.prototype = {
    outputLevelA: function(salary) {
      return salary * 4;
    },
    outputLevelB: function(salary) {
      return salary * 5;
    },
    outputLevelC: function(salary) {
      return salary * 6;
    }
  };

  var calcBonus = function() { //实现
    this.salary = null;
    this.optStrategy = null;
  };
  calcBonus.prototype = {
    setSalary: function(salary) {
      this.salary = salary;
    },
    setOptStrategy: function(outlevel) {
      this.optStrategy = outlevel;
    },
    setCalcBonus: function() {
      return this.optStrategy(this.salary);
    }
  };

  var bonus = new calcBonus(); // 使用
  bonus.setSalary(8000);
  console.log(new outlevel().outputLevelB, "new outlevel().outputLevelB");
  bonus.setOptStrategy(new outlevel().outputLevelB);

  console.log(bonus.setCalcBonus());

})();
console.log("=====5.2-使用javaScript版本的策略模式=====");
/**
 * [description]
 * 策略模式 => 体现了 对象多态的特性 大量的if语句可以用这种多态性来解决
 */
(function() {
  var outlevel = {
    outputLevelA: function(salary) {
      return salary * 4;
    },
    outputLevelB: function(salary) {
      return salary * 5;
    },
    outputLevelC: function(salary) {
      return salary * 6;
    }
  };
  var calcBouns = function(level, salary) {
    return outlevel[level](salary);
  };
  console.log(calcBouns('outputLevelB', 8000));

})();
/**
 * [description]
 * 策略模式 封装动画实现
 */
(function() {

  var tween = {
    /**
     * [description]
     * @param  {[type]} t [已消耗的时间]
     * @param  {[type]} b [原始位置]
     * @param  {[type]} c [目标位置]
     * @param  {[type]} d [持续的总时间]
     * @return {[type]}   [动画结束后的位置]
     */
    linear: function(t, b, c, d) {
      return c * t / d + b;
    },
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    strongEaseIn: function(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    sineaseIn: function(t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    sineaseOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }
  };

  var Animate = function(dom) {
    this.dom = dom;
    this.startTime = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.propertyName = null;
    this.easing = null;
    this.duration = null;
  };

  Animate.prototype.start = function(propertyName, endPos, duration, easing) {
    this.startTime = + new Date(); // 当前时间的毫秒值 => 动画启动时间
    this.startPos = this.dom.getBoundingClientRect()[propertyName]; // 返回元素的大小及其相对于视口的位置。
    this.endPos = endPos;
    this.duration = duration;
    this.propertyName = propertyName;
    this.easing = tween[easing];

    var self = this;
    var timeId = setInterval(function() {
      if (self.step() === 0) {
        clearInterval(timeId);
      }
    }, 19);

  };

  Animate.prototype.step = function() {
    var t = + new Date(); // 当前时间
    //说明小球已经停止运动了
    if (t >= this.startTime + this.duration) {
      this.update(this.endPos);
      return false;
    }
    // console.log(this.easing);
    // 动画已消耗的时间(在start中以获取到动画启动时间), 小球原始位置, 小球目标位置(相减因为，起始位置有值)，动画持续的总时间
    var pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
    // console.log(pos)
    this.update(pos);
  };

  Animate.prototype.update = function(pos) {
    this.dom.style[this.propertyName] = pos + 'px';
  };

  var div = document.getElementById('div');
  var animate = new Animate(div);
  animate.start('left', 1000, 3000, "strongEaseOut");

})();

console.log("======== 5.6 策略模式实现表单验证 ========");
(function() {
  var strategies = {
    isNoEmpty: function(value, errMsg) {
      if (value === '') {
        return errMsg;
      }
    },
    minLength: function(value, length, errMsg) {
      if (value.length < length) {
        return errMsg;
      }
    },
    isMobile: function(value, errMsg) {
      if (!/(^1[3|5|8][0-9]{9}$)/.test(registerForm.phoneNumber.value)) {
        return errMsg;
      }
    }
  };

  var validatFunc = function() {
    var validator = new Validator();
    validator.add(registerForm.userNmae, 'isNoEmpty', '用户名不能为空');
    validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位');
    validator.add(registerForm.phoneNumber, 'isMobile', '手机格式不正确');

    var errMsg = validator.start();
    return errMsg;
  };

  var registerForm = document.getElementById('registerForm');
  registerForm.onsubmit = function() {
    var errMsg = validatFunc();
    if (errMsg) {
      alert(errMsg);
      return false; // 阻止表单提交
    }
  };

  var Validator = function() {
    this.cache = [];
  };

  Validator.prototype.add = function(dom, rule, erroMsg) {
    var ary = rule.split(':');
    this.cache.push(function() {
      var strategy = ary.shift();
      ary.unshift(dom.value);
      ary.push(erroMsg);
      return strategies[strategy].apply(dom, ary);
    });
  };

  Validator.prototype.start = function() {
    for (var i = 0, validatFunc; validatFunc = this.cache[i++];) {
      var msg = validatFunc();
      if (msg) {
        return msg;
      }

    }
  };

})();

(function() {
  /**
   *  apply call 的使用
   *  apply call 都是来自 Function.prototype.apply  Function.prototype.call
   *  接收两个参数 => func.apply(指定函数func体内的this对象指向, 集合)
   *
   */


})();
(function() {})();
(function() {})();

/**
 * 策略模式
 *  定义一系列的算法，把他们一个个封装起来，并且他们可以相互替换
 *
 *
 */
