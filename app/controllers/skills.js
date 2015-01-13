
ePortfolioControllers.controller('SkillsController', ['$scope', 'SkillsService',
  	function($scope, SkillsService) {
  		$scope.skills = SkillsService.query();
	}
]);