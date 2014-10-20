'use strict';

describe('Controller: ArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('fuzzyApp'));

  var articlesFactory,
    ArticleCtrl,
    scope,
    article = {
      _id: '540d73dafef38b74188ecde5',
      author: 'Author 4',
      body: 'Lorem Ipsum',
      date: '2014/10/01',
      title: 'Title 4'
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    articlesFactory = $injector.get('Articles');
    spyOn(articlesFactory, 'get').andReturn(article);

    scope = $rootScope.$new();
    ArticleCtrl = $controller('ArticleCtrl', {
      $scope: scope,
      $routeParams : {
        id : article._id
      }
    });
  }));

  it('should add article to scope', function () {
    expect(scope.article.title).toBe(article.title);
  });
});
