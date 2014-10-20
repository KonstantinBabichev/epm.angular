'use strict';

describe('Service: articleHelper', function () {

  // load the service's module
  beforeEach(module('fuzzyApp'));

  // instantiate service
  var articleHelper;
  beforeEach(inject(function (_articleHelper_) {
    articleHelper = _articleHelper_;
  }));

  it('should slice text', function () {
    var text = new Array(1100).join('Thanks, Nadzeya! '),
      cuttedText = articleHelper.cut(text);

    expect(cuttedText.length).toBeLessThan(101);
  });

});
