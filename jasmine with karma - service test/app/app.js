










angular.module('myApp', [])


    .service('dataService', ['$window', 'modalSvc', function($window, modalSvc){

        this.showDialog = function(message,title){
            if(title){

                modalSvc.showModalDialog({
                    title: title,
                    message: message
                });


            }
            if(message) {

                $window.alert(message);

            }
        };




    }]);









