
ePortfolioControllers.controller('PortfolioController', ['$scope', 'ProjectsService',
  	function($scope, ProjectsService) {
  		$scope.name = 'portfolio';
  		$scope.projects = ProjectsService.query();
	}
]);