let swipe = require('../lib/swiper.js');
new swipe('.swiper-container', {
  autoplay: 3000,
  loop: true
});

// 引用dialog组件
import Dialog from '../component/dialog';
let dialog = new Dialog({});
console.log(dialog, "dialog");
alert(1212)

// $('.search').on('click',function () {
//   alert(1)
// })
