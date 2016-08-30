(function () {
    'use strict';

    angular
        .module('component.seed')
        .component('seed', {
            templateUrl: 'seed.component.html',
            controller: SeedController,
            bindings: {
                ngModel: '<',
            },
        });

    SeedController.$inject = [];
    function SeedController() {
        var $ctrl = this;

        ////////////////

        $ctrl.$onInit = function () { };
        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestory = function () { };
    }
})();