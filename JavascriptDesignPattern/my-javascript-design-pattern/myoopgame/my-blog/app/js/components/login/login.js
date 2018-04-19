import $ from '../../core/yquery.js';
import ajax from '../../core/ajax.js';
import EventUtil from '../../core/eventUtil.js';
class Login {
    constructor(){
       
    }
    tpl(){
        let tpl = `<div id="login-box" class="auth-modal-box hide">
            <div class="auth-form">
                <div class="panfish" >
                    <img src="//gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" class="normal" style="">
                    <img src="//gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="greeting" style="display: none;">
                    <img src="//gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="blindfold" style="display: none;">
                </div>
                <i title="关闭" class="close-btn iconfont icon-close"></i>
                <div class="panel login-form">
                    <h1 class="title">登录</h1>
                    <div class="input-group">
                        <div class="input-box">
                            <input name="loginAccount" maxlength="64" placeholder="请填写昵称/账号" class="input">
                        </div>
                        <div class="input-box">
                            <input name="loginPassword" type="password" maxlength="64" placeholder="请输入密码" class="input">
                        </div>
                    </div>
                    <button class="btn" id="login">登录</button>
                    <div class="prompt-box">没有账号？ <span class="clickable register">注册</span></div>
                </div>
                <div class="panel hide register-form">
                    <h1 class="title">注册</h1>
                    <div class="input-group">
                        <div class="input-box">
                            <input name="Account" maxlength="64" placeholder="请填写昵称/账号" class="input">
                        </div>
                        <div class="input-box">
                            <input name="Password" type="password" maxlength="64" placeholder="请输入密码" class="input">
                        </div>
                        <div class="input-box">
                            <input name="RePassword" type="password" maxlength="64" placeholder="请再次输入密码" class="input">
                        </div>
                    </div>
                    <button class="btn" id="register">注册</button>
                    <div class="prompt-box text-center"><span class="clickable entry">已有账号登录</span></div>
                </div>
            </div>
        </div>`;
        $('body').append(tpl)
    }
    openLogin(){
        if($('#login-box').elements.length == 0){
            this.tpl()
        }
        $('#login-box').removeClass('hide')
        $('input[name="loginAccount"]').get(0).focus()
        this.activeEle()
    }
    closeLogin(){
        $('#login-box').addClass('hide')
    }
    initLoginEvent() {
        let _this = this;
        EventUtil.addHandler($('body').get(0), 'click', _this.useEvent.bind(_this));
        EventUtil.addHandler($('body').get(0), 'keyup', _this.activeEle);
    }
    clickResgister(){
        let formData = {}
        formData.username = $('input[name="Account"]').value()
        formData.password = $('input[name="Password"]').value()
        formData.repassword = $('input[name="RePassword"]').value()
        this.registerAjax(formData)
    }
    clickLogin(){
        let formData = {}
        formData.username = $('input[name="loginAccount"]').value()
        formData.password = $('input[name="loginPassword"]').value()
        this.loginAjax(formData)
    }
    register(){
        $('.login-form').addClass('hide');
        $('.register-form').removeClass('hide');
        $('.panfish').addClass('hide');
        $('input[name="Account"]').get(0).focus();
        this.activeEle()
    }
    entry() {
        $('.login-form').removeClass('hide');
        $('.register-form').addClass('hide');
        $('.panfish').removeClass('hide');
        $('input[name="loginAccount"]').get(0).focus();
        this.activeEle()
    }
    useEvent(event) {
        let events = EventUtil.getEvent(event);
        let target = EventUtil.getTarget(events);
        if (target.className.indexOf('close-btn') > -1) {
            this.closeLogin();
        } else if (target.className.indexOf('login-btn') > -1) {
            this.openLogin();
        } else if (target.className.indexOf('register') > -1) {
            this.register();
        } else if (target.className.indexOf('entry') > -1) {
            this.entry();
        }else if(target.id === 'register'){
            this.clickResgister()
        }else if(target.id === 'login'){
            this.clickLogin()
        }
        this.activeEle();
    }

    activeEle() {
        let events = EventUtil.getEvent(event);
        let code = events.keyCode;
        let act = document.activeElement;
        if(events.type === 'keyup' && code !== 9){
            return;
        }
        if (act.name === 'loginAccount') {
            $('.normal').css({display:'none'});
            $('.blindfold').css({display:'none'});
            $('.greeting').css({display:'block'});
        } else if (act.name === 'loginPassword') {
            $('.normal').css({display:'none'});
            $('.greeting').css({display:'none'});
            $('.blindfold').css({display:'block'});
        }else {
            $('.greeting').css({display:'none'});
            $('.blindfold').css({display:'none'});
            $('.normal').css({display:'block'});
        }
    }
}

export default Login;