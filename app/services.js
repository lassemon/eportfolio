'use strict';

var ePortfolioServices = angular.module('ePortfolioServices', ['ngResource']);

ePortfolioServices.factory('SkillsService', ['$resource',
	function($resource){
		return $resource('data/skills.json', {}, {
			query: {method:'GET'}
		});
	}
]);

ePortfolioServices.factory('ProjectsService', ['$resource',
	function($resource){
		return $resource('data/projects.json', {}, {
			query: {method:'GET', isArray:true}
		});
	}
]);

ePortfolioServices.factory('SlidesService', ['$resource',
	function($resource){
		return $resource('data/slides.json', {}, {
			query: {method:'GET', isArray:true}
		});
	}
]);