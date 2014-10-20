'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fuzzyApp'));

  var articlesFactory,
    MainCtrl,
    scope,
    newArticle = {
      _id: '540d73dafef38b74188ecde5',
      author: 'Author 4',
      body: 'Lorem Ipsum',
      date: '2014/10/01',
      title: 'Title 4'
    },
    queryRespond = [
      {
        _id: '540d73dafef38b74188ecde4',
        author: 'Author 1',
        body: 'Lorem Ipsum',
        date: '2014/10/01',
        title: 'Title 1'
      },
      {
        _id: '540d73dafef38b74188ecde5',
        author: 'Author 2',
        body: 'Lorem Ipsum',
        date: '2014/10/01',
        title: 'Title 2'
      },
      {
        _id: '540d73dafef38b74188ecde6',
        author: 'Author 3',
        body: 'Lorem Ipsum',
        date: '2014/10/01',
        title: 'Title 3'
      }];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    articlesFactory = $injector.get('Articles');

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    // This yeoman generator uses jasmine 0.x.x version, so this is old syntax
    spyOn(articlesFactory, 'query').andReturn(queryRespond);
  }));

  // Getting array of articles through articlesFabric
  it('should get array of articles', function () {
    expect(scope.articles.length).toBe(0);

    scope.getArticles();

    expect(scope.articles.length).toBeGreaterThan(0);
  });

  // Getting array of articles through articlesFabric -> adding one more article to server -> refreshing articles list from server
 it('should add one more article to articles list', function () {
    var articlesOldLength;
    scope.getArticles();

    articlesOldLength = scope.articles.length;
    scope.newArticle = newArticle;
    queryRespond.push(newArticle);
    scope.addArticle();

    expect(scope.articles.length).toBe(articlesOldLength + 1);
 });
});
