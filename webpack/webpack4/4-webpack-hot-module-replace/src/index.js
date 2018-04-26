import _ from 'lodash';
import printMe from './print.js';
import './style.css';


function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = '点击打印';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

let element = component()
document.body.appendChild(component());


if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log("printMe 发生改变");
    // printMe()
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}
