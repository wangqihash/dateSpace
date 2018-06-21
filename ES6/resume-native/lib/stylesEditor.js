import styles from './data/styles'
import $ from './vQuery'
import Prism from 'prismjs'

let $stylesWrap = $('#app .styles-wrap')
let stylesWrap = $stylesWrap.get(0)
let $style = $('style', stylesWrap)
let $stylePre = $('pre', stylesWrap)

let currentStyle = ''
//左侧 设置延迟时间
let delay = 1
let timer = null
let MAX_HEIGHT

const goBottom = (top) => {
  $stylesWrap.scrollTop(top)
}

const showStyles = (num, callback) => {
  let style = styles[num]
  let length
  let prevLength

  if (!style) {
    return
  }
  /**
   * [].filter((curVal, index, curArr) => {})
   * [].reduce(preVal, curVal, index, arr); => 将数组中的值从左到右合并，最终为一个值
   */
  length = styles.filter((item, i) => {
    return i <= num
  }).reduce((result, item) => {
    result += item.length;
    return result
  }, 0)

  prevLength = length - style.length

  //开始填充内容，和计算高度
  clearInterval(timer)
  timer = setInterval(() => {
    let start = currentStyle.length - prevLength
    let char = style.substring(start, start + 1) || ''
    currentStyle += char
    if (currentStyle.length === length) {
      clearInterval(timer)
      callback && callback()
    } else {
      MAX_HEIGHT = $stylesWrap.height()
      let top = $stylePre.height() - MAX_HEIGHT
      if (top > 0) {
        goBottom(top)
      }
      // console.log(currentStyle, "currentStyle+");
      // 填内容
      $style.html(currentStyle)
      // 填样式
      $stylePre.html(Prism.highlight(currentStyle, Prism.languages.css))
    }
  }, delay)
}

export default {
  showStyles
}
