'use strict';

/**
 * @ngdoc function
 * @name fuzzyApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the fuzzyApp
 */
angular.module('fuzzyApp')
  .controller('ArticleCtrl', function ($scope, $routeParams, Articles) {
    $scope.article = Articles.get({id:$routeParams.id});
  });
