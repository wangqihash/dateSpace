import 'whatwg-fetch';
/* {credentials: 'include'}  option 请求带入cookie信息
omit: 默认值，忽略cookie的发送
same-origin: 表示cookie只能同域发送，不能跨域发送
include: cookie既可以同域发送，也可以跨域发送 */


/**
 * 
method: 请求使用的方法，如 GET、POST。
headers: 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。
body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome 50 开始， 这个属性也可以接受 FederatedCredential 实例或是一个 PasswordCredential 实例。
cache:  请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
redirect: 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。
referrer: 一个 USVString 可以是 no-referrer、client或一个 URL。默认是 client。
referrerPolicy: Specifies the value of the referer HTTP header. May be one of no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url 。
integrity: 包括请求的  subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。
 */


/**
 * 
 *fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
}).then(function(response) {
  response.status     //=> number 100–599
  response.statusText //=> String
  response.headers    //=> Headers
  response.url        //=> String

  response.text().then(function(responseText) { ... })
}, function(error) {
  error.message //=> String
})
 */
var oldFetchfn = fetch; //拦截原始的fetch方法

var __defaultOptions = {
    body: "",
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: function () {
        var heads = {};
        heads['Content-Type'] = "application/json"
        return heads
    }()
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}
function parseJSON(response) {
    return response.json();
}
function request(url, options) {
    let opt = options || {};
    return oldFetchfn(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => (data))
        .catch((err) => (err));
}
/**
 * //定义新的fetch方法，封装原有的fetch方法
 * url 请求地址
 * body 请求参数
 * config 配置数据
 */
window.fetch = function (option) {
    let fetchPromise //定义的请求
    let config = {} //传给后端的参数
    if (option.url instanceof Array) {
        let ajaxArr = []
        for (let i = 0; i < option.url.length; i++) {
            Object.assign(config, __defaultOptions)
            config.body = JSON.stringify(option.body[i])
            let res = request(option.url[i], config)
            ajaxArr.push(res)
        }
        fetchPromise = Promise.all(ajaxArr)
    } else {
        Object.assign(config, __defaultOptions)
        config.body = JSON.stringify(option.body)
        fetchPromise = request(option.url, config);
    }
    if (!config.timeout) {
        config.timeout = 1000 * 60 //设置默认超时时间
    }
    var timeoutPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(new Error("请求超时"))
        }, config.timeout)
    })
    var p = Promise.race([fetchPromise, timeoutPromise])
    return p
}

class Ajax {
    post(option) {
        __defaultOptions.method = "POST"
        return fetch(option)
    }
    get(option) {
        __defaultOptions.method = "GET"
        return fetch(option)
    }
}
export default new Ajax()