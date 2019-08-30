var app=angular.module("oudh",[]);

app.controller("oudhControl", function($scope){
$scope.IsHide = true;
$scope.pordaSorao = function(){
	$scope.IsHide = false;
}
});


/*need to know ng-show ng-hide ng-click ng-route
for ng-route need to provide the dependency in app*/

