/*
describe('calculator test', function () {

    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));


    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('appControler', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            //expect($scope.z).toBe(3);
            expect(3).toBe(3);
        });
    });
});*/


describe('controller test', function() {
    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.sum function', function() {

        it('test number 1', function() {
            var $scope = {};
            var controller = $controller('appController', { $scope: $scope });

            $scope.x = 2;
            $scope.y = 3;
            expect($scope.sum( $scope.x + $scope.y )).toEqual(5);
        });

    });
});






















