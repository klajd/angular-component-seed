(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;
        vm.logs = [];

        vm.$onInit = function () {
            vm.seeds = [];
            for (var i = 1; i <= 9; i++) {
                vm.seeds.push({
                    color: ['#', i, i, i].join(''),
                    value: 'Seed ' + i
                });
            }
        };

        vm.log = function () {
            vm.logs.push(Date.now().toString() + ' This is a log.');
        };
    }

})();
