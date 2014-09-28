'use strict';

/**
 * @ngdoc function
 * @name fuzzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fuzzyApp
 */
angular.module('fuzzyApp')
  .controller('MainCtrl', function ($scope, $filter, $http, $resource, Articles, articleHelper) {

    $scope.refreshArticles = function () {
      $scope.articles = Articles.query();

      $scope.articles.$promise.then(function () {
        angular.forEach($scope.articles, function (article) {
          article.body = articleHelper.cut(article.body);
        });
      });
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
