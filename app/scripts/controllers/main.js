'use strict';

/**
 * @ngdoc function
 * @name fuzzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fuzzyApp
 */
angular.module('fuzzyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.articles = [
      {
        author: 'Onliner.by',
        title: 'Bose подала в суд на Beats из-за технологии шумоподавления в наушниках',
        introText: 'Компания Bose обвинила Beats в неправомерном использовании технологии шумоподавления в моделях наушников Beats Studio и Beats Studio Wireless. В поданных в суд документах юристы Bose указывают на длительную историю разработок и инвестиций в исследования технологии шумоподавления и требуют применить санкции в отношении конкурента, если нарушение патента было умышленным.',
        image: 'images/article-1.jpg'
      },
      {
        author: 'Onliner.by',
        title: 'Кинокритики советуют не тратить время на блокбастер «Геракл»',
        introText: 'Стартовал мировой и белорусский прокат очередного летнего блокбастера. Кинокритики успели высказать свое мнение о «Геракле», причем в целом ленту они приняли негативно. Средняя оценка на Metacritic составляет всего 48 из 100 (на основе 20 рецензий), а на Rotten Tomatoes — 5,4 из 10 (72 отзыва).',
        image: 'images/article-2.jpg'
      },
      {
        author: 'Onliner.by',
        title: 'Австралийская полиция арестовала «Дэдпула» с мечами и кексами',
        introText: 'Австралийский косплеер в образе Дэдпула не смог вовремя добраться до места проведения благотворительного мероприятия, так как полиция посчитала всю бутафорию на нем настоящим оружием. По данным издания The Daily Telegraph, мужчина привлек внимание горожан своим костюмом, высоким ростом, а также гранатой, самурайским мечом, лентами патронов и коробкой с кексами.',
        image: 'images/article-3.jpg'
      },
      {
        author: 'Onliner.by',
        title: 'Nokia предложила заряжать смартфон Lumia 930 с помощью картошки',
        introText: 'Британское подразделение Nokia совместно с художником и ученым-энтузиастом Калебом Чарлэндом, а также сетью розничных магазинов мобильной электроники Carphone Warehouse организовало проект, в рамках которого был представлен «самый органический способ зарядки». Для получения энергии использовались 800 объединенных между собой картофелин и яблок. ',
        image: 'images/article-4.jpg'
      }
    ];

    $scope.addArticle = function () {
      $scope.articles.unshift($scope.newArticle);
      $scope.resetForm();
      $scope.togglePopUp();
    };

    $scope.resetForm = function () {
      $scope.articleForm.$setPristine();
      $scope.newArticle = {};
    };

    $scope.togglePopUp = function () {
      $scope.showForm = !$scope.showForm;
    };
  })

//  .controller('formController', function ($scope) {
//
//  })
;
