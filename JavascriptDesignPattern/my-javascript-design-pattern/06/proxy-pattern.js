console.log("===========6.3虚拟代理实现图片预加载===========");
/**
 * 代理模式中的预加载
 * @return {[type]}
 * 网络不好的情况下 先会加载 本地预选图片，等到网络畅通时在加载网络图片
 */
(function() {
  var myImage = (function() {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
      setSrc: function(src) {
        imgNode.src = src;
      }
    };

  })();

  var proxyImage = (function() {
    var img = new Image();
    img.onload = function() {
      myImage.setSrc(this.src);
    };

    return {
      setSrc: function(src) {
        myImage.setSrc("img/timg.gif");
        img.src = src;
      }
    };
  })();

  // var hash = 'http://img1.imgtn.bdimg.com/it/u=3720668662,1197182767&fm=27&gp=0.jpg';
  var hash = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=483984344,2672014204&fm=27&gp=0.jpg';
  proxyImage.setSrc(hash);
})();

console.log("===========6.4代理的意义===========");
/**
 * 普通处理预加载方法
 * @return {[type]}
 */
(function() {
  var myImage = (function() {
    var img = new Image();
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);

    img.onload = function() {
      imgNode.src = img.src;
    };

    return {
      setSrc: function(src) {
        imgNode.src = 'img/timg.gif';
        img.src = src;
      }
    };

  })();
  myImage.setSrc("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=483984344,2672014204&fm=27&gp=0.jpg");

  /**
   * 比较后=>
   *  使用代理的意义在于 面向对象中的 单一职责原则
   *  每一个类（对象||函数）尽量让其承担的职责更少，也达到了解耦原则
   *
   *  代理只是起到景上添花作用，预加载的操作完成之后，请求重新交给本体 MyImage
   *
   */
})();
console.log("===========6.6虚拟代理合并HTTP请求===========");
(function() {})();

(function() {})();
