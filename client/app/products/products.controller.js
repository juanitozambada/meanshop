'use strict';
(function(){

class ProductsComponent {
  constructor($scope, Product) {
    $scope.products = Product;
  }
}

angular.module('meanshopApp')
  .component('products', {
    templateUrl: 'app/products/products.html',
    controller: ProductsComponent
  });

})();
