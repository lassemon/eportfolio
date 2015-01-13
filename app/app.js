'use strict';

// Declare app level module which depends on views, and components
var ePortfolio = angular.module('ePortfolio', [
  'ngRoute',
  'ePortfolioControllers',
  'ePortfolioServices',
  'angular-carousel'
])

ePortfolio.config(['$routeProvider', 
	function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      }).
      when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsController'
      }).
      when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioController'
      }).
      when('/lifestyle', {
        templateUrl: 'views/lifestyle.html',
        controller: 'LifestyleController'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      }).
      otherwise({
        redirectTo: '/about'
      });
}]);

var ePortfolioControllers = angular.module('ePortfolioControllers', []);
