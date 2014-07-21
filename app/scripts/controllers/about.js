'use strict';

/**
 * @ngdoc function
 * @name fuzzyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fuzzyApp
 */
angular.module('fuzzyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
