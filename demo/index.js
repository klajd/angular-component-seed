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
            copyright: 'Copyright © 2016 Klajd Diko.',
            tabs: [
                { title: 'Home', template: 'demo/home.html' },
                { title: 'Docs', template: 'demo/docs.html' }
            ]
        };
    }

    AppController.$inject = ['$location', '$window', '$filter', 'config'];
    function AppController($location, $window, $filter, config) {
        var vm = this;
        angular.extend(vm, config);
        vm.active = -1;

        vm.$onInit = function () {
            console.log("Controller activated...");
            var path = $location.path().replace('/', '').replace(/-/g, ' ');
            var tab = vm.tabs.forEach(function (item, idx) {
                if (item.title == path) vm.active = idx;
            });

            if (vm.active === -1) {
                path = $filter('titlecase')(vm.tabs[0].title);
                $location.path(path);
                vm.active = 0;
            }

            $window.onresize = fitContainerToWindowsHeight;

            fitContainerToWindowsHeight();
        };

        function fitContainerToWindowsHeight() {
            var heights = window.innerHeight;
            document.getElementsByClassName("container-demo")[0].style.minHeight = heights - 100 + "px";
        }
    }

    TitlecaseFilter.$inject = [];
    function TitlecaseFilter() {
        return function (value) {
            return value.replace(/\s/g, '-');
        };
    }


})();
