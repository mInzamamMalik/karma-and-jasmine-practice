//
//
//
///**
// * Created by 205 on 2/9/2016.
// */
//describe('Calculator ', function () {
//
//// necessary
//    it('should add two numbers correctly', function () {
//    });
//    it('should subtract two numbers correctly', function () {
//    });
//
//// helpful but not needed
//    it('should add negative numbers', function () {
//    });
//    it('should reject non numbers', function () {
//    });
//});

describe("Hello World example ", function() {

    beforeEach(module('myApp'));

    var HelloWorldController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        HelloWorldController = $controller('HelloWorldController', {
            $scope: scope
        });
    }));



    it('says hello world!', function () {
        expect(scope.greeting).toEqual("Hello World!");
    });

    it('Sum function!', function () {
        expect(scope.add(2,4)).toEqual(6);
        expect(scope.add(0,0)).toEqual(0);
        expect(scope.add("","")).toEqual("");
    });

    it("a request to server",function(){
        expect(scope.req()).toEqual({status : 404});
    });

});