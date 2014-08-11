'use strict';

/**
 * @ngdoc function
 * @name fuzzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fuzzyApp
 */
angular.module('fuzzyApp')
  .controller('MainCtrl', function ($scope, $filter, $http, $resource, Articles) {
//    $http({method: 'GET', url: 'http://54.72.3.96:3000/posts'}).
//      success(function(data, status, headers, config) {
//        console.log(data, status, headers, config);
//      }).
//      error(function(data, status, headers, config) {
//        console.warn(data, status, headers, config);
//      });

    $scope.refreshArticles = function () {
      $scope.articles = Articles.query();
    };

    $scope.addArticle = function () {
      if ($scope.newArticle._id) {
        Articles.update({ id: $scope.newArticle._id }, $scope.newArticle, function() {
          $scope.refreshArticles();
          $scope.resetForm();
          $scope.togglePopUp();
        });
      }else{
        var dateNow = new Date();
        $scope.newArticle.date = $filter('date')(dateNow, 'dd.MM.yyyy');

        Articles.save($scope.newArticle, function() {
          $scope.refreshArticles();
          $scope.resetForm();
          $scope.togglePopUp();
        });
      }
    };

    $scope.deleteArticle = function (article) {
      Articles.delete({ id: article._id }, function() {
        $scope.refreshArticles();
      });
    };

    $scope.editArticle = function (article) {
      $scope.newArticle = article;
      $scope.editingArticle = true;
      $scope.togglePopUp();
    };

    $scope.resetForm = function () {
      $scope.articleForm.$setPristine();
      $scope.newArticle = {};
      $scope.editingArticle = false;
    };

    $scope.togglePopUp = function () {
      $scope.showForm = !$scope.showForm;
    };

    $scope.refreshArticles();
  });
