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
                // modified array to store only valid items
                var itemsMod = [];
                //remove any empty item 
                angular.forEach(items, function(value, key){                      
                    if (!(( items[key].trim() == [""])|| $scope.isNullOrEmptyOrUndefined(items[key])) )
                     {
                        itemsMod.push(items[key].trim());
                     }
                });

                //check the number of items and message back                
                if ($scope.isNullOrEmptyOrUndefined(itemsMod[0]))
                {
                    $scope.returnMsg="Please enter data first !";
                }
                else if (itemsMod.length<=3){
                    $scope.returnMsg="Enjoy!";
                }
                else if (itemsMod.length>3){
                    $scope.returnMsg="Too much!";
                }
            }                                        
        }
    }
})();    