/**
 * Created by 205 on 2/10/2016.
 */

angular.module("myApp",['ngMock'])
    .controller("appController", function appController($scope) {

        $scope.sum = function (a, b) {
            return a + b;
        };

        $scope.subtract = function (a, b) {
            return a - b;
        };


    });