'use strict';

describe('Directive: blogForm', function () {

  // load the directive's module
  beforeEach(module('fuzzyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<blog-form></blog-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the blogForm directive');
  }));
});
