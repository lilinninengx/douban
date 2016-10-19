angular.module('douban', [
    'ngRoute',
    'douban.movie_list',
    'douban.directive',
    'douban.movie_detail'
    // 'douban.in_theaters',
    // 'douban.coming_soon',
    // 'douban.top250',
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // /in_theaters/:page? 模糊匹配请求路径
    // /in_theaters 可以匹配
    // /in_theaters/* 可以匹配
    // /in_theaters/*/* 不能匹配
    // 以上 * 表示任意内容
    // page就是一个名字，主要目的是为了在控制器中通过 $routeParams 服务拿到该参数用于进一步处理
    // .when('/in_theaters/:page?', {
    //   templateUrl: 'in_theaters/view.html',
    //   controller: 'TheaterController'
    // })
    // .when('/coming_soon/:page?', {
    //   templateUrl: 'coming_soon/view.html',
    //   controller: 'ComingsoonController'
    // })
    // .when('/top250/:page?', {
    //   templateUrl: 'top250/view.html',
    //   controller: 'Top250Controller'
    // })
    // .when('/search/:page', {
    //   templateUrl: 'movie_list/view.html',
    //   controller: 'MovieListController'
    // })
      .when('/subject/:id', {
        templateUrl: 'movie_detail/view.html',
        controller: 'MovieDetailController',
      })
      .when('/:category/:page?', {
        // /:category/:page?
        // http://127.0.0.1:3000/search?q=黄晓明
        // /in_theaters
        // /in_theaters/*
        // /coming_soon
        // /coming_soon/*
        // /top250
        // /top250/*
        templateUrl: 'movie_list/view.html',
        controller: 'MovieListController',
      })
      .otherwise({
        redirectTo: '/in_theaters'
      })
  }])
  .controller('SearchController', ['$scope', '$route', function($scope, $route) {
    $scope.search_text = ''
    $scope.search = function() {
      // 当路径匹配规则中没有 q 的时候，会以 ? 的形式将 q 放到 hash 后面
      $route.updateParams({
        category: 'search',
        page: 1,
        q: $scope.search_text
      })
      $route.reload()
    }
  }])
