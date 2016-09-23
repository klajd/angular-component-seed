(function () {
    'use strict';

    angular
        .module('app', GLOBALS.modules)
        .controller('AppController', AppController)
        .filter('titlecase', TitlecaseFilter)
        .directive('fitToWindowsHeight', FitToWindowsHeightDirective);

    AppController.$inject = ['$location', '$window', '$filter'];
    function AppController($location, $window, $filter) {
        var vm = this;
        angular.extend(vm, GLOBALS);
        vm.active = -1;

        vm.$onInit = function () {
            var path = $location.path().replace('/', '').replace(/-/g, ' ');
            var tab = vm.tabs.forEach(function (item, idx) {
                if (item.title == path) vm.active = idx;
            });

            if (vm.active === -1) {
                path = $filter('titlecase')(vm.tabs[0].title);
                $location.path(path);
                vm.active = 0;
            }
        };

    }

    TitlecaseFilter.$inject = [];
    function TitlecaseFilter() {
        return function (value) {
            return value.replace(/\s/g, '-');
        };
    }

    FitToWindowsHeightDirective.$inject = ['$window'];
    function FitToWindowsHeightDirective($window) {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {

            $window.onresize = onWindowResize;

            onWindowResize();

            function onWindowResize() {
                var heights = window.innerHeight;
                element[0].style.minHeight = heights - 112 + "px";
            }
        }
    }

})();
