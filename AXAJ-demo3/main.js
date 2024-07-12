window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function ({url, method, body, successFn, failFn, headers}) {
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

    let request = new XMLHttpRequest()
    request.open(method, url) //配置 request
    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

function f1(responseText) { }
function f2(responseText) { }

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xue',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'frank': '18'
        },
        successFn: (x) => {
            //console.log(x) //callback --> responseText
            f1.call(undefined, x)
            f2.call(undefined, x)
        },
        failFn: (x) => {
            console.log(x) //callback --> request
            console.log(x.status)
            console.log(x.responseText)
        }
    })
})

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