'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fuzzyApp'));

  var $httpBackend,
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
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', 'http://54.72.3.96:3000/posts').respond(queryRespond);
    $httpBackend.when('PUT', 'http://54.72.3.96:3000/posts/540d73dafef38b74188ecde5').respond(newArticle);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // Getting array of articles through articlesFabric
  it('should get array of articles', function () {
    expect(scope.articles.length).toBe(0);
    scope.refreshArticles();

    $httpBackend.flush();

    expect(scope.articles.length).toBeGreaterThan(0);
  });

  // Getting array of articles through articlesFabric -> adding one more article to server -> refreshing articles list from server
  it('should add one more article to articles list', function () {
    var articlesOldLength;
    scope.refreshArticles();

    $httpBackend.flush();

    articlesOldLength = scope.articles.length;
    scope.newArticle = newArticle;
    queryRespond.push(newArticle);
    scope.addArticle();

    $httpBackend.flush();

    expect(scope.articles.length).toBeGreaterThan(articlesOldLength);
  });
});
