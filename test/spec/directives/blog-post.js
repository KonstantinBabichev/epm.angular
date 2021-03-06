'use strict';

describe('Directive: blogPost', function () {

  // load the directive's module
  beforeEach(module('fuzzyApp'));
  beforeEach(module('templates'));

  var element,
    scope,
    article = {
      _id: '540d73dafef38b74188ecde5',
      author: 'Author 4',
      body: 'Lorem Ipsum',
      date: '2014/10/01',
      title: 'Title 4'
    };

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.article = article;
    element = angular.element('<blog-post></blog-post>');
    $compile(element)(scope);
    scope.$digest();
  }));

  it('title should be in right place', function () {
    expect(element.find('span').text()).toBe(article.title);
  });

});
