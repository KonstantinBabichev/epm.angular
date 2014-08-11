'use strict';

/**
 * @ngdoc service
 * @name fuzzyApp.articles
 * @description
 * # articles
 * Factory in the fuzzyApp.
 */
angular.module('fuzzyApp')
  .factory('Articles', function ($resource) {
    return $resource('http://54.72.3.96:3000/posts/:id', {}, {
      update: {
        method: 'PUT'
      }
    });
  });
