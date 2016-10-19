angular.module('douban.service', [])
  .service('HttpService', ['$window', function($window) {
    this.jsonp = function(url, params, fn) {
      var callbackName = 'itcast_' + (Math.random() * Math.random()).toString().substr(2)
      $window[callbackName] = function(data) {
        fn(data)
        $window.document.body.removeChild(scriptElement)
      }
      var queryString = ''
      for (var key in params) {
        queryString += key + '=' + params[key] + '&'
      }
      url = url + '?' + queryString
      url += 'callback=' + callbackName

      var scriptElement = $window.document.createElement('script')
      scriptElement.src = url
      $window.document.body.appendChild(scriptElement)
    }
  }])
