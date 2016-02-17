angular.module("myApp",['ngMock'])

    .controller('appController', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])


    .directive('myDirective', function() {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });