var services = angular.module('services', ['ngResource'])
  .factory('Project', ['$resource',
    function($resource) {
      return $resource('projects/:id.json', {}, {
        query: {method:'GET', params:{id:'projects'}, isArray:true}
      });
    }]);
