describe('Filters', function () { //describe your object type


    beforeEach(module('MyApp')); //load module



    describe('reverse', function () { //describe your app name

        var reverse;
        beforeEach(inject(function ($filter) { //initialize your filter
            reverse = $filter('reverse', {});
        }));

        it('Should reverse a string', function () {  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
            expect(reverse('don')).toBe('nod'); //pass
        });

    });

    describe('reverse', function () { //describe your app name

        var reverse;
        beforeEach(inject(function ($filter) { //initialize your filter
            reverse = $filter('reverse', {});
        }));

        it('Should reverse a string', function () {  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
            expect(reverse('don')).toBe('nod'); //pass
            expect(reverse('')).toBe(''); //pass
            //expect(reverse('0111')).toBe('1110');
        });

    });

});