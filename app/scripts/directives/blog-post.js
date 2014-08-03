'use strict';

/**
 * @ngdoc directive
 * @name fuzzyApp.directive:blogPost
 * @description
 * # blogPost
 */
angular.module('fuzzyApp')
  .directive('blogPost', function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: false,
      templateUrl: '/views/blog-post.html'
    };
  });
