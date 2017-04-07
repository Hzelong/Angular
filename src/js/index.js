var myApp = angular.module('myApp', [],["$provide",function(aa){
	aa.factory("customFactory",function(){
		return [1,2,3,4]
	})
}]);
myApp.controller("myCtrl", ["$scope","customFactory", function($scope,customFactory) {
    $scope.time = new Date();
    console.log(customFactory)
    setInterval(function(){
    	$scope.$apply(function(){
    		$scope.time = new Date()
    	})
    })
}]);