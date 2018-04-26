import _ from 'lodash';
import './style.css';
import Timg from './timg.gif';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Timg;
  // 图片类型 loader + css style类型loader
  element.appendChild(myIcon);

  //xml文件
  console.log(Data, "Data");

  return element;
}

document.body.appendChild(component());
