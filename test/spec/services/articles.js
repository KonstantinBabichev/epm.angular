'use strict';

describe('Service: articles', function () {

  // load the service's module
  beforeEach(module('fuzzyApp'));

  // instantiate service
  var articles;
  beforeEach(inject(function (_articles_) {
    articles = _articles_;
  }));

});
