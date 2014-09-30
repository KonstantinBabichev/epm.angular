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
    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue nibh ut pretium consequat. Vivamus felis nulla, ' +
      'consequat ullamcorper laoreet nec, placerat dignissim arcu. Nulla porta massa eget ante viverra fermentum. Aliquam libero ' +
      'velit, lobortis nec magna id, ullamcorper ullamcorper risus. Duis erat turpis, posuere tempus dui id, suscipit tempus justo.' +
      ' Morbi a nisi placerat, varius justo sit amet, fringilla dui. Suspendisse vel rutrum enim. Curabitur semper nisi vitae odio ' +
      'pharetra, sit amet gravida odio vestibulum. Quisque ornare arcu aliquet mattis rutrum. Ut ac odio ac lectus aliquet gravida ' +
      'sed id dolor. Nulla vel commodo neque. Nulla eget imperdiet nibh.',
      cuttedText = articleHelper.cut(text);

    expect(cuttedText.length).toBeLessThan(101);
  });

});
