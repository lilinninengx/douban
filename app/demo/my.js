// 不污染全局命名空间版
// var callbacks = {}

// function jsonp(url, params, fn) {
//   var scriptElement;
//   // 1. 向全局挂载一个不重名的全局函数
//   // （不重名的目的是为了防止多次调用jsonp函数造成接收数据的全局函数被覆盖）
//   var callbackName = 'itcast_' + (Math.random() * Math.random()).toString().substr(2)
//   // itcast_123456
//   // window.callbacks['itcast_123456'] = function () {}
//   window.callbacks[callbackName] = function(data) {
//     fn(data)
//     document.body.removeChild(scriptElement)
//   }

//   // 2. 处理查询字符串
//   var queryString = ''
//   for (var key in params) {
//     queryString += key + '=' + params[key] + '&'
//   }

//   // 2.1 拼接查询字符串
//   url = url + '?' + queryString

//   // 2.2 拼接回调函数请求参数
//   // http://127.0.0.1:3000?callback=itcast_123456
//   // itcast_123456({})
//   url += 'callback=' + 'callbacks.'+callbackName

//   // 3. 生成 script 标签，设置 src，添加到 DOM
//   // 这里才是核心，script 标签没有跨域限制
//   var scriptElement = document.createElement('script')
//   scriptElement.src = url
//   document.body.appendChild(scriptElement)
// }

// jsonp('http://127.0.0.1:3000',{}, function (data) {
//   console.log(data)
// })




function jsonp(url, params, fn) {
  var scriptElement;
  var callbackName = 'itcast_' + (Math.random() * Math.random()).toString().substr(2)
  window[callbackName] = function(data) {
    fn(data)
    document.body.removeChild(scriptElement)
  }
  var queryString = ''
  for (var key in params) {
    queryString += key + '=' + params[key] + '&'
  }
  url = url + '?' + queryString
  url += 'abc=' + callbackName

  var scriptElement = document.createElement('script')
  scriptElement.src = url
  document.body.appendChild(scriptElement)
}

jsonp('https://api.douban.com/v2/movie/in_theaters', {}, function(data) {
  console.log(data)
})
