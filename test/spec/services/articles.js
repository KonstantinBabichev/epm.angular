'use strict';

describe('Service: Articles', function () {
  var $httpBackend,
    articles,
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

  beforeEach(module('fuzzyApp'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', 'http://54.72.3.96:3000/posts').respond(queryRespond);

    articles = $injector.get('Articles');
  }));

  it('should slice text', function () {
    var articlesList  = articles.query();
    expect(articlesList.length).toBe(0);

    $httpBackend.flush();

    expect(articlesList.length).toBeGreaterThan(0);
  });
});
