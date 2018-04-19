//事件相关方法
import Client from './client.js';
let client = Client();

class EventUntil {
    /**
     * 兼容IE和其他浏览器的事件添加方法，
     * @param {[object]} element [元素对象]
     * @param {[string]} type    [事件类型 click等]
     * @param {[function]} handler [操作函数]
     */
    addHandler(element, type, handler) {
        // 标准方法
        if (element.addEventListener) {
            // false表示冒泡
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            // Dom0级事件
            element['on' + type] = handler;
        }
    }
    removeHandler(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            // Dom0级移除事件
            element['on' + type] == null;
        }
    }
    // 获取事件IE和w3c的不同
    getEvent(event) {
        return event ? event : window.event;
    }
    // 事件的目标,就是指点在哪里
    getTarget(event) {
        return event.target || event.srcElement;
    }
    preventDefault(event) {
        if (event.preventDefault) {
            // 阻止默认行为
            event.preventDefault();
        } else {
            // IE阻止默认行为
            event.returnValue = false;
        }
    }
    stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            // IE取消冒泡
            event.cancelBubble = true;
        }
    }
    // 已经兼容了IE8和以下浏览器
    getPageX(event) {
        let pagex = 0;

        if (event.pageX === undefined) {
            pagex = event.clientX +
                (document.documentElement.scrollLeft || document.body.scrollLeft);

        } else {
            pagex = event.pageX;
        }
        return pagex;

    }
    getPageY(event) {
        let pagey = 0;
        if (event.pageY === undefined) {
            pagey = event.clientY +
                (document.documentElement.scrollTop || document.body.scrollTop);
        } else {
            pagey = event.pageY;
        }
        return pagey;
    }
    getRelatedTarget(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }
    getWheelDelta(event) {
        // 向上滚蛋为+120，向下滚动为-120
        if (event.wheelDelta) {
            // IE和其他浏览器支持mousewheel事件
            return (client.engine.opera && client.engine.opera < 9.5) ? -event.wheelDelta : event.wheelDelta;
        } else {
            // 火狐支持一个DOMMouseScroll事件
            return -event.detail * 40;
        }
    }
    getCharCode(event) {
        if (typeof event.charCode == 'number') {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}

export default new EventUntil();


// //实例

// document.onclick = function (event) {
//     let e = eventUntil.getEvent(event);
//     alert(eventUntil.getPageX(event) + ' ' + eventUntil.getPageY(event));
// }
// let mouse = document.getElementById('mouseover');
// eventUntil.addHandler(mouse, 'mouseover', function (event) {
//     let event = eventUntil.getEvent(event);
//     let related = eventUntil.getRelatedTarget(event);
//     alert(related);
// });

// eventUntil.addHandler(mouse, 'mouseout', function (event) {
//     let event = eventUntil.getEvent(event);
//     let related = eventUntil.getRelatedTarget(event);
//     alert(related);
// });

// eventUntil.addHandler(document, 'click', function (event) {
//     let event = eventUntil.getEvent(event);
//     let btnValue = eventUntil.getButton(event);
//     eventUntil.preventDefault(event);
//     switch (btnValue) {
//         case 0:
//             alert('左键');
//             break;
//         case 1:
//             alert('中键');
//             break;
//         case 2:
//             alert('右键');
//             break;
//     }
// });
// 谷歌等其他滚动事件
// eventUntil.addHandler(document, 'mousewheel', function (event) {
//     let event = eventUntil.getEvent(event);
//     alert(event.wheelDelta);
// });
// 火狐浏览器滚动事件
// eventUntil.addHandler(window, 'DOMMouseScroll', function (event) {
//     let event = eventUntil.getEvent(event);
//     let detail = eventUntil.getWheelDelta(event);
//     alert(detail);
// });

// eventUntil.addHandler(document.getElementById('keypress'), 'keypress', function (event) {
//     let event = eventUntil.getEvent(event);
//     let charcode = eventUntil.getCharCode(event);
//     alert(charcode);
// });

// eventUntil.addHandler(window, 'scroll', function (event) {
//     // 表示标准模式
//     if (document.compatMode == 'CSS1Compat') {
//         document.documentElement.scrollTop = '200';
//     } else {
//         alert(document.body.scrollLeft);
//     }
// });

