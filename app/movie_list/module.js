;
(function(angular) {
  angular.module('douban.movie_list', ['douban.service'])
    .controller('MovieListController', [
      '$scope',
      '$route',
      '$routeParams',
      'HttpService',
      function($scope, $route, $routeParams, HttpService) {
        // $routeParams 是一个服务对象，可以拿到路由配置中模糊参数 :page
        $scope.page = parseInt($routeParams.page || 1)
        var category = $routeParams.category
        $scope.totalCount = 0
        $scope.totalPage = 0
        var pageSize = 5
          // 1页  (当前页码 - 1) * 每页大小 = start  取每页大小数 0 5
          // 2页  (当前页码 - 1) * 每页大小 = start  取每页大小数 5 5
          // 3页  (当前页码 - 1) * 每页大小 = start  取每页大小数 10 5
          // 4页  (当前页码 - 1) * 每页大小 = start  取每页大小数 15 5
          // 综上，start 参数就可以使用 上面的公式进行计算得到要跳过的记录数
        $scope.loading = true
        $scope.title = 'Loading...'
        $scope.movies = []
        // http://localhost:8080/douban/app/index.html#/in_theaters
        // http://localhost:8080/douban/app/index.html#/coming_soon
          // 在异步代码的回调函数中如果修改了 $scope，需要手动调用 $scope.$apply() 强制视图模型更新
        HttpService.jsonp('https://api.douban.com/v2/movie/' + category, {
          start: ($scope.page - 1) * pageSize,
          count: pageSize,
          q: $routeParams.q
        }, function(data) {
          $scope.title = data.title
          $scope.totalCount = data.total
          $scope.totalPage = Math.ceil($scope.totalCount / pageSize)
          $scope.movies = data.subjects
          $scope.loading = false
          $scope.$apply()
        })

        $scope.go = function(page) {
          if (page <= 0 || page >= ($scope.totalPage + 1)) {
            return
          }
          // 动态的修改路由路径中的参数，也就是 hash 路径
          $route.updateParams({
              page: page
            })
            // 修改完之后，调用 reload() 方法，重载路由
          $route.reload()
        }
      }
    ])
})(angular)
