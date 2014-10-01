'use strict';

describe('Controller: ArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('fuzzyApp'));

  var $httpBackend,
    ArticleCtrl,
    scope,
    article = {
      _id: '540d73dafef38b74188ecde5',
      author: 'Author 4',
      body: 'Lorem Ipsum',
      date: '2014/10/01',
      title: 'Title 4'
    },
    articleUrl = 'http://54.72.3.96:3000/posts/' + article._id;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', articleUrl).respond(article);

    scope = $rootScope.$new();
    ArticleCtrl = $controller('ArticleCtrl', {
      $scope: scope,
      $routeParams : {
        id : article._id
      }
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should attach a list of awesomeThings to the scope x', function () {
    $httpBackend.flush();
    expect(scope.article.title).toBe(article.title);
  });
});
