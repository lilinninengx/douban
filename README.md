# 豆瓣电影

使用 Bootstrap + AngularJS + 豆瓣电影开放接口API 做的一个电影列表功能。

## 功能概要

## 项目骨架搭建

- app
  + app.js
  + app.css
  + index.html
  + in_theaters
    * view.html
    * module.js
  + coming_soon
    * view.html
    * module.js
  + top250
    * view.html
    * module.js
- README.md
- .gitignore
- .editorconfig
- bower.json
- .bowerrc

以约定的形式约定好咱们每一个文件或者目录的作用。

## 安装依赖

```bash
$ bower install --save bootstrap angular angular-route
```

## 路由

路由器

将用户的联网需求，发送到一个具体的另一个路由器中，这个过程就叫做路由。

https://docs.angularjs.org/api/ngRoute

## 根据不同的业余划分模块






## 跨域

https://api.douban.com/v2/movie/in_theaters?count=5&callback=angular.callbacks._0


https://api.douban.com/v2/movie/in_theaters?count=5&callback=angular.callbacks._1

因为前后台交互经常使用 json 格式字符串进行交互，pack 就是包装的意思
服务器将要返回的数据，包装一下
这是一个奇淫技巧，浏览器不想让你跨域，为了安全限制
有这个限制，有人就想了这么一出。
这个技术本身没有名字，用的人多了自然而然给了灌了一个术语，用来解决跨域问题

### 什么是跨域

浏览器的同源策略，出于防范跨站脚本的攻击，禁止客户端脚本（如 JavaScript）对不同域的服务进行跨站调用。

- 协议名protocol
- 主机host
- 端口号port
- 这三个中的任意一个不同，网站间的数据请求与传输便构成了跨域调用。

XMLHttpRequest 有跨域请求限制

- 不同域名，主机名会有跨域限制
  + 127.0.0.1
  + 192.168.135.25

- 同域名不同端口号也会有跨域限制
  + 127.0.0.1:3000
  + 127.0.0.1:5000

- 不同协议也有跨域限制
  + file:///C:/Users/iroc/Desktop/
  + http://www.baidu.com
  + https://www.baidu.com


### 为什么要有跨域

### 跨域的解决方案

- jsonp：从入门到放弃
  + 深入浅出jsonp
- Access-Control-Allow-Origin

### 小程序

- 发视频

### npm

- 在 Node 中会专门讲 NPM
- 会了 bower 就会了 npm

### gulp

- 安排孔令涛老师给大家补上

### 英语

- 明天或者后台我来教室给大家拷贝视频
- 新东方新概念英语视频（1-4册）

### 移动APP课程
  - Ionic
  - React
  - React Native
  - Vue
