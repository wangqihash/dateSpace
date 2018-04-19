import $ from './yquery.js';
class Base {
    constructor() {
        _lockBodyTop: void 0;
        loader: false;
    }
    lockBodyScroll() {
        this._lockBodyTop = document.body.scrollTop;
        $('body').css({
            position: 'fixed',
            overflow: 'hidden',
            height: document.body.clientHeight,
            'top': this._lockBodyTop * -1
        });
    }
    unLockBodyScroll() {

        $('body').css({
            position: '',
            overflow: '',
            height: '',
            top: ''
        });

        document.documentElement.scrollTop = this._lockBodyTop;
        document.body.scrollTop = this._lockBodyTop;
    }
    append(o, l, h) {
        let local = ['beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'];
        o.insertAdjacentHTML(local[l], h);
    }
    loading() {
        this.append(document.body, 2, '<div class="loadBlock"><div class="loadBg"></div>' +
            '<div class="loadCartoon"> <div class="loadHead"></div> <div class="loadBody"></div>' +
            '<div class="loadDun"></div><div class="loadCappa"></div></div><div class="loadCon">加载中...</div>' +
            '<div class="backcolor"></div><div class="layer"></div></div>');
        this.loader = true;
    }
    loaded() {
        if (this.loader) {
            document.body.removeChild($('.loadBlock').get(0));
            this.loader = false;
        }
    }
}

export default Base;