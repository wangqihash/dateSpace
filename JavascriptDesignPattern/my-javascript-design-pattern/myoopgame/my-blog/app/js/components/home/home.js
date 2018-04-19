import Base from '../../core/base.js';
import View from './views.js';
import Login from '../login/login.js';
import Interface from '../interface/interface.js';
import $ from '../../core/yquery.js';
import EventUtil from '../../core/eventUtil.js';

const copyProperties = function (target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
};
const mix = function (...mixins) {
    class Mix { }
    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
};
var log = console.log.bind(console)
class Home extends mix(View, Login, Base, Interface) {
    constructor() {
        super();
        this.initStatus();
        this.initLoginEvent()
    }
    initStatus(){
        // this.login();
    }
    initLoginEvent() {
        let _this = this;
        EventUtil.addHandler($('body').get(0), 'click', _this.useEvent.bind(_this));
        EventUtil.addHandler($('body').get(0), 'keyup', _this.activeEle.bind(_this));
    }
}

export default Home

