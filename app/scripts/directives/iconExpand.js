'use strict';

angular.module('ngWidgetsApp')
  .directive('iconExpand', function () {
    return {
      templateUrl: 'views/iconExpand.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
