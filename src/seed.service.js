(function () {
    'use strict';

    angular
        .module('component.seed')
        .service('SeedService', SeedService);

    SeedService.$inject = [];
    function SeedService() {
        var srv = this;
        srv.getData = getData;

        getData();
        
        function getData() {
            console.log('data is gathering');
            return $timeout(function () {
                return [
                    { name: 'seed', type: 'plant' }
                ];
            }, 500);
        }
    }

})();