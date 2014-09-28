'use strict';

/**
 * @ngdoc service
 * @name fuzzyApp.articleHelper
 * @description
 * # articleHelper
 * Service in the fuzzyApp.
 */
angular.module('fuzzyApp')
  .service('articleHelper', function articleHelper() {
    this.cut = function (articleText) {
      if (articleText) {
        return articleText.slice(0, 200);
      }
    };
  });
