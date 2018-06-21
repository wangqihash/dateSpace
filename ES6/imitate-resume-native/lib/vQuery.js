let doc = document;
/**
 * [getEles description]
 * @param  {[type]} selector [子选择起]
 * @param  {[type]} context  [父选择器]
 */
let getEles = (selector, context) => {
  //给一个父类默认值
  //return Array.from((context && context)|| doc.querySelectorAll(selector));
  return Array.from(((context && context) || doc).querySelectorAll(selector))
};

/**
 * [isUndefined description]
 * @param  {[type]}  obj [传入的对象]
 * @return {Boolean}     [用来判断是否为undefined]
 */
let isUndefined = (obj) => {
  //return obj === undefined;   // obj = void 0;
  return obj === void 0
};

/**
 * [Vquery description]
 * 创建一个类似jquery的方法
 */
class Vquery {
  constructor (selector, context){
    this.elements = getEles(selector, context);
  };
  /**
   * [optElemCb description]
   * description:对选择的元素进行循环赋值
   * @param  {Function} callback []
   */
  optElemCb (callback) {
    this.elements.forEach(callback);
  };

  /**
   * [get description]
   * description: 根据传入的下标获取选择元素中的内容
   * @param  {[type]} index []
   */
   get (index) {
       return this.elements[index < 0 ? 0 : index]
   }

  /**
   * [html description]
   * description: 根据传入的string替换选择元素的内容
   * @param  {[type]} sHtml [description]
   */
  html (sHtml) {
    //如果传入的值就是undefined,那么久直接获取到第一个
    if (isUndefined(sHtml)) {
      return this.get(0).innerHtml;
    };
    this.optElemCb((ele) => {
      ele.innerHTML = sHtml;
    })


    return this
  };

  /**
   * [addClass description]
   * description: 给选择的元素添加类
   * @param {[type]} iClass []
   */
  addClass(iClass){
    this.optElemCb((ele) => {
      if (ele.className.split(" ").indexOf(iClass) === -1) {
        ele.className += `${iClass}`;
      }
    })
    return this
  };

  /**
   * [css description]
   * description: 给选择的元素添加样式
   * @return {[type]} []
   */
  css(styles) {
    if( typeof styles === 'object') {
      this.optElemCb((ele) => {
        for(let key in styles) {
          ele.style[key] = styles[key];
        }
      });
    }
    return this
  };

  /**
   * [height description]
   * description: 设置选择元素的高度
   * @param  {[type]} h []
   */
  height (h) {
    if (isUndefined(h)) {
        return this.get(0).offsetHeight
      }

      this.optimizeCb((ele) => {
        ele.style.height = h
      })
  };

  /**
   * [scrollTop description]
   * description: 设置选择元素的 scrolltop
   * @param  {[type]} top [description]
   */
  scrollTop (top) {
    if (isUndefined(top)) {
      return this.get(0).scrollTop;
    }

    this.optElemCb((ele) => {
      ele.scrollTop = top;
    })
  }

};

export default (selector, context) => {
  return new Vquery(selector, context)
}
