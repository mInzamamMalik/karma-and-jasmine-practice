/**
 * Created by 205 on 2/10/2016.
 */
angular.module("myApp",[])
    .controller("appController",function appControler($scope){
        $scope.sum = function(){
            $scope.answer = $scope.x + $scope.y;
        }
    });




