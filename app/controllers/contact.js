
ePortfolioControllers.controller('ContactController', ['$scope',
  	function($scope) {
  		$scope.name = 'contact';

  		$scope.send = function(message){
  			if($scope.form.$invalid){
  				console.log("Did not accept contact message of", message)
  				return;
  			}
  			console.log(message)
  		}
	}
]);