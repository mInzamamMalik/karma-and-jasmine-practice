//angular.module("myApp",['ngMock'])
//
//    .controller('appController', ['$scope', function($scope) {
//        $scope.customer = {
//            name: 'Naomi',
//            address: '1600 Amphitheatre'
//        };
//    }])
//
//
//    .directive('myDirective', function() {
//        return {
//            template: 'Name: {{customer.name}} Address: {{customer.address}}'
//        };
//    });


angular.module('myApp')
    .directive('welcome', function () {
        return {
            restrict: 'E',
            scope: {
                person: '='
            },
            template: '<span>{{person.greet()}} Welcome to the app!</span>'
        };
    });