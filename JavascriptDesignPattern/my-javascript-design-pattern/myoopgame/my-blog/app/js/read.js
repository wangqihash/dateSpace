import Base from './core/base.js';
import Login from './components/login/login.js';
import $ from './core/yquery.js';
import Interface from './components//interface/interface.js';
import EventUtil from './core/eventUtil.js'; 

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
class Read extends mix(Login, Base, Interface) {
    constructor() {
        super();
        // this.initStatus();
        this.initLoginEvent()
        // this.initEVent()
    }
    initStatus(){
       
    }
    initEVent(){
        let _this = this
        
    }
}

export default Read

let read = new Read()
window.read = read
window.$ = $


