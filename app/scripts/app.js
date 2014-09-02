'use strict';

/**
 * @ngdoc overview
 * @name fuzzyApp
 * @description
 * # fuzzyApp
 *
 * Main module of the application.
 */
angular
  .module('fuzzyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
