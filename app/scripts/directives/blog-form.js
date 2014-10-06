'use strict';

/**
 * @ngdoc directive
 * @name fuzzyApp.directive:blogForm
 * @description
 * # blogForm
 */
angular.module('fuzzyApp')
  .directive('blogForm', function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: false,
      templateUrl: 'views/blog-form.html'
    };
  });
