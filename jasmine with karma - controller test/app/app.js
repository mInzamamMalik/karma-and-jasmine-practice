/**
 * Created by 205 on 2/10/2016.
 */






angular.module("myApp",['ngMock'])
    .controller("appController",function appController($scope){

        $scope.x = 0;
        $scope.y = 0 ;

        $scope.sum = function(){
            return $scope.x + $scope.y;
        }
    });