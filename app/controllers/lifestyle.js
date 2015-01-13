
ePortfolioControllers.controller('LifestyleController', ['$scope', 'SlidesService',
  	function($scope, SlidesService) {
  		$scope.sliderInterval = 3;
  		$scope.sliderStartIndex = 0;
  		$scope.slides = SlidesService.query();
	}
]);