(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope){
        $scope.lunchItems ="";
        $scope.isNullOrEmptyOrUndefined = function (value) {
            return !value;
        }
        $scope.checkItems= function(){            
            //if textbox is empty
            if ($scope.isNullOrEmptyOrUndefined($scope.lunchItems))
            {
                $scope.returnMsg="Please enter data first !";
            }
            else
            {
                //spliting the entered values 
                var items=$scope.lunchItems.split(","); 

                //remove any empty item
                angular.forEach(items, function(value, key){
                    if(value == "")
                        items.splice(key,1);
                });

                //check the number of items and message back                
                if ($scope.isNullOrEmptyOrUndefined(items[0]))
                {
                    $scope.returnMsg="Please enter data first !";
                }
                else if (items.length<=3){
                    $scope.returnMsg="Enjoy!";
                }
                else if (items.length>3){
                    $scope.returnMsg="Too much!";
                }
            }            
        }
    }
})();    