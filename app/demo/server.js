// 该脚本浏览器无法解析执行
// 它是一个 Node 可以解析和执行的脚本代码
// 所以说要想执行该脚本，通过在终端中进入该脚本所属目录
// 然后使用 node 脚本文件名 基于可以执行当前这个脚本了
// 回车之后，node 会执行该脚本，启动一个服务器

var http = require('http')
var url = require('url')

var server = http.createServer()

// 监听客户端请求事件
// 只有有请求进来就会触发该事件指定的回到处理函数
// 回到函数中有两个参数：
//    request：是一个对象，可以用来获取请求地址的一些数据
//    response：是一个对象，可以用来给本次请求发送响应数据，通过 response.end(String) 发送响应内容
server.on('request', function(request, response) {
  var urlObj = url.parse(request.url, true)
  var queryObj = urlObj.query
  console.log('有请求进来了，请求地址是：' + request.url)
  var resData = queryObj.callback + '(' + '{"foo": "bar"}' + ')'
  console.log(resData)
  setTimeout(function () {
    response.end(resData)
  }, 3000)
})

server.listen(3000, function(err) {
  if (err) {
    return console.log('端口号被占用了')
  }
  console.log('server is running at port 3000.')
})
