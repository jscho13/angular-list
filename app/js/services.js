var services = angular.module('services', ['ngResource'])
  .factory('Project', ['$resource',
    function($resource) {
      return $resource('data/:id.json', {}, {
        query: {method:'GET', params:{id:'projects'}, isArray:true}
      });
    }])

  .factory('Deadline', ['$resource',
    function($resource) {
      return $resource('data/:id.json', {}, {
        query: {method:'GET', params:{id:'deadlines'}, isArray:true}
      });
    }])

  .factory('Department', ['$resource',
    function($resource) {
      return $resource('data/:id.json', {}, {
        query: {method:'GET', params:{id:'departments'}, isArray:true}
      });
    }]);
