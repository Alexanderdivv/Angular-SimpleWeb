(function () {
	'use strict';

	angular.module("LaunchChecker", [])
	.controller("LaunchCheckerController", LaunchCheckerController);

	LaunchCheckerController.$inject = ['$scope'];
	function LaunchCheckerController($scope){

		$scope.checker=function(){
			let items = $scope.items || ""
			let item = items.split(",");

			let i=0;
			let sum=0;
			while(i<item.length){
				if(item[i]!=""){
					sum++;
				}
				i++;
			}
			if (item=="") {
				$scope.Message = "Please enter data first";
			}else if(i<=3){
				$scope.Message = "Enjoy!";
			}else {
				$scope.Message = "Too much";
			}
		};
	}
})();