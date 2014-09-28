'use strict';

describe('Service: articleHelper', function () {

  // load the service's module
  beforeEach(module('fuzzyApp'));

  // instantiate service
  var articleHelper;
  beforeEach(inject(function (_articleHelper_) {
    articleHelper = _articleHelper_;
  }));

  it('should do something', function () {
    //expect(!!articleHelper).toBe(true);
  });

});
