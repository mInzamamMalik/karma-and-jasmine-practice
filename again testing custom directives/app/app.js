angular.module('myApp', [])

.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});














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


//angular.module('myApp',[])
//
//    .controller('appController', ['$scope', function($scope) {
//
//    }])
//
//    .directive('welcome', function () {
//        return {
//            restrict: 'E', // this restriction will only match with element name
//            scope: {
//                person: '='
//            },
//            template: '<span>{{person.greet()}} Welcome to the app!</span>'
//        };
//    });