angular.module('douban.directive', [])
  .directive('autoActive',['$location',function($location){
    // Runs during compile
    return {
      link: function($scope, iElm, iAttrs, controller) {

        console.log($location.url())

        $scope.$location = $location

        $scope.$watch('$location.url()', function(newValue, oldValue, scope) {
          // 根据 hash 中 url 的变化，改变导航栏的 active 状态
          iElm.children().removeClass('active')
          Array.from(iElm.find('a')).forEach(function (a) {
            if (newValue.startsWith(a.hash.substr(1))) {
              angular.element(a).parent().addClass('active')
            }
          })
        });

        // 编辑 ul 下面所有的 li，给每一个 li 添加单击事件
        // 遍历 ul 下面所有的 li，删除 li 的active 类名
        // ES6 中增加了一个新方法 Array.from 可以将一个伪数组转为真正的数组
        // Array.from(iElm.children()).forEach(function (li) {
        //   angular.element(li).on('click', function () {
        //     iElm.children().removeClass('active')
        //     angular.element(this).addClass('active')
        //   })
        // })
      }
    };
  }]);
