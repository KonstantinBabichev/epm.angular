'use strict';

/**
 * @ngdoc function
 * @name fuzzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fuzzyApp
 */
angular.module('fuzzyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
