let doc = document
/**
 *  context  => parent
 *  selector => child
 *  context.querySelectorAll(selector)
 */
let getEles = (selector, context) => {
  /**
   *  Array.from(arrayLike [,mapFn [, thisArg]])
   *  arrayLike:类数组对象
   *  mapFn： 用来转换中，对每一个元素进行加工，并将加工后的结果作为结果数组的元素值
   *  thisArg：map函数中this指向的对象 [可以将需要指向的方法直接写在这个参数中]
   *  es6语法将类数组对象，或Iterable对象转成数组
   *  es5：[].slice.call(arguments);
   *  es6: Array.from(arguments);
   *
   */
  return Array.from(((context && context) || doc).querySelectorAll(selector))
}
let isUndefined = (obj) => {
  // void其实是javascript中的一个函数，接受一个参数，返回值永远是undefined
  //  使用void目的就是为了得到javascript中的undefined
  return obj === void 0
}

class Vquery {
  constructor (selector, context) {
    this.elements = getEles(selector, context)
  }

  optimizeCb (callback) {
    this.elements.forEach(callback)
  }

  get (index) {
    return this.elements[index < 0 ? 0 : index]
  }

  html (sHtml) {
    if (isUndefined(sHtml)) {
      return this.get(0).innerHTML
    }
    //得到的是 最开始 constructor中选中的元素
    this.optimizeCb((ele) => {
      ele.innerHTML = sHtml
    })

    return this
  }

  addClass (iClass) {
    this.optimizeCb((ele) => {
      if (ele.className.split(' ').indexOf(iClass) === -1) {
        ele.className += ` ${iClass}`
      }
    })

    return this
  }

  css (styles) {
    if (typeof styles === 'object') {
      this.optimizeCb((ele) => {
        for (let key in styles) {
          ele.style[key] = styles[key]
        }
      })
    }

    return this
  }

  height (h) {
    if (isUndefined(h)) {
      return this.get(0).offsetHeight
    }

    this.optimizeCb((ele) => {
      ele.style.height = h
    })
  }

  scrollTop (top) {
    if (isUndefined(top)) {
      return this.get(0).scrollTop
    }

    this.optimizeCb((ele) => {
      ele.scrollTop = top
    })
  }
}

export default (selector, context) => {
  return new Vquery(selector, context)
}
