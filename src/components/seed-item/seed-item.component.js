(function () {
  'use strict';

  angular
    .module('component.seed')
    .component('seedItem', {
      templateUrl: 'components/seed-item/seed-item.component.html',
      controller: SeedItemController,
      replace: true,
      bindings: {
        ngModel: '<'
      },
    });

  SeedItemController.$inject = ['$log'];
  function SeedItemController(log) {
    var $ctrl = this;

    $ctrl.select = function () {
      $ctrl.ngModel.$selected = !$ctrl.ngModel.$selected;
    };

    $ctrl.$onInit = function () { };
    $ctrl.$onChanges = function (bindings) { };
    $ctrl.$onDestory = function () { };
  }
})();