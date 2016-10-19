;
(function(angular) {
  angular.module('douban.movie_detail', ['douban.service'])
    .controller('MovieDetailController', [
      '$scope',
      '$routeParams',
      'HttpService',
      function($scope, $routeParams, HttpService) {
        $scope.loading = true
        $scope.title = 'Loading...'
        $scope.movie = {}
        HttpService.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id, {}, function(data) {
          $scope.title = data.title
          $scope.movie = data
          $scope.loading = false
          $scope.$apply()
        })
      }
    ])
})(angular)
