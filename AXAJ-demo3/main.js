window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function ({ url, method, body, headers }) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url) //配置 request
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
    // let url = options.url
    /*let url
    if (arguments.length === 1) {
        url = options.url
    } else if (arguments.length === 2){
        url = arguments[0]
        options = arguments[1]
    }*/
    /*let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers*/
    // ES6 解构赋值 --> 分析它的结构，然后赋值


}


myButton.addEventListener('click', (e) => {
    let Promise = window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'frank': '18'
        },

    })
    Promise.then(
        (text) => { console.log(text) },   //成功
        (request) => { console.log(request) }   //失败
    )
})

/*return new promise(function(resolve,reject)){

}

/*
jQuery.ajax({
    success: ()=>{},
    error: ()=>{}
})

frank.ajax({
    成功: function(){},
    失败: function(){}
})

Image.onload = function(){}
Image.onerror = function(){}

jack.ajax(null, null, null, successFn, failFn)

fs.readFile(function(error, content){
  if(error){
    //失败
  }else{
    //成功
  }
})
  */