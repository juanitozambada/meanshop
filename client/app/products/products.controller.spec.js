'use strict';

describe('Component: ProductsComponent', function () {

  // load the controller's module
  beforeEach(module('meanshopApp'));

  var ProductsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProductsComponent = $componentController('ProductsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
