(function () {
    'use strict';

    angular
        .module('app', [
            'component.seed',
            'ui.bootstrap'
        ])
        .controller('AppController', AppController)
        .filter('titlecase', TitlecaseFilter)
        .value('config', Config());

    function Config() {
        return {
            title: 'Angular Component Seed Demo',
            version: 'v0.0.2',
            tabs: [
                { title: 'Home', template: 'demo/home.html' },
                { title: 'Docs', template: 'demo/docs.html' }
            ]
        };
    }

    AppController.$inject = ['$location', 'config'];
    function AppController($location, config) {
        var vm = this;
        angular.extend(vm, config);
        vm.active = 0;

        vm.$onInit = function () {
            var path = $location.path().replace('/', '').replace(/-/g, ' ');
            var tab = vm.tabs.forEach(function (item, idx) {
                if (item.title == path) vm.active = idx;
            });
        };
    }

    TitlecaseFilter.$inject = [];
    function TitlecaseFilter() {
        return function (value) {
            return value.replace(/\s/g, '-');
        };
    }


})();
