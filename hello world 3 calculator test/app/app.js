


var myApp = angular.module('myApp', []);

myApp.controller('HelloWorldController', ['$scope', function ($scope) {


    $scope.greeting = 'Hello World!';


    $scope.add = function(x,y){
        return x+y;
    };


    $scope.req = function(){
        return {status : 404 , name : "sg"}
    }
}]);