(function () {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    //Controller for 'to buy' section
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buyList = this;        
        buyList.toBuyItems = ShoppingListCheckOffService.getItemsToBuy();

        buyList.moveItem = function (itemIndex,itemName,itemQuantity) {
        
            ShoppingListCheckOffService.moveItem(itemIndex,itemName,itemQuantity);
            if (buyList.toBuyItems.length == 0)
            {
                buyList.errorMessage = "Everything is bought!";        
            }           
        };
    } 

    //Controller for 'already bought' section
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList =this;
        boughtList.boughtItems = ShoppingListCheckOffService.getboughtItems();
        boughtList.warningMsg = ShoppingListCheckOffService.getwarning();               
    }    
    

    function ShoppingListCheckOffService() {
        var service = this;
      
        // List of shopping items
        var toBuyItems = [
            {
            name: "Milk",
            quantity: "2"
          },
          {
            name: "Donuts",
            quantity: "10 count"
          },
          {
            name: "Cookies",
            quantity: "20"
          },
          {
            name: "Toys",
            quantity: "5"
          },
          {
            name: "Chocolates",
            quantity: "50"
          }];

        var boughtItems = [];
        var warningMsg = "";

        service.moveItem = function (itemIndex,itemName, itemQuantity) {
            toBuyItems.splice(itemIndex, 1);
            var item = {
                name: itemName,
                quantity: itemQuantity
              };
            boughtItems.push(item);           
          };
          
          service.getItemsToBuy = function () {
            return toBuyItems;
          };
          service.getboughtItems = function () {
            return boughtItems;
          };
          service.getwarning = function(){
            warningMsg = "Nothing bought yet.";           
            return warningMsg;
          }

    }
})();