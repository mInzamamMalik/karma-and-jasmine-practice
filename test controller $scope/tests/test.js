describe("testing unit", function () {


    module(function ($provide) {
        $provide.factory('dataSourceSvc', function ($q) {

            var getAllItems = jasmine.createSpy('getAllItems')

                .andCallFake(function () {
                    var items = [];

                    if (passPromise) {
                        return $q.when(items);
                    } else {
                        return $q.reject('something went wrong');
                    }
                });


            return {
                getAllItems: getAllItems
            };
        });
    });


    it('should resolve promise', function () {
        passPromise = true;

        var items;

        dataSvcObj.getData().then(function (data) {
            items = data;
        });
        rootScope.$digest();

        expect(mockDataSourceSvc.getAllItems).toHaveBeenCalled();
        expect(items).toEqual([]);
    });


});