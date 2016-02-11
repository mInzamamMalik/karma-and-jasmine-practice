/**
 * Created by 205 on 2/10/2016.
 */
describe("TESTING TITLE",function(){

    beforeEach(module("myApp"));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe("CONTROLLER TESTING",function(){

        it("LOADING $SCOPE FROM CONTROLLER",function(){
            var $scope = {};
            var controller = $controller('appController',{ $scope : $scope});

            $scope.x = 2;
            $scope.y = 4;

            expect( $scope.sum($scope.x,$scope.y) ).toBe(6);

        });

    });







});