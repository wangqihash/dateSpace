import ajax from '../../core/ajax.js'

class Interface {
    loginAjax(body) {
        return ajax.post({url:'/users/login',"body":body})
    }

    registerAjax(body) {
        return ajax.post({url:'/users/register',"body":body})
    }

}

export default Interface;