angular.module('services', [])
  .factory('Project', ['$resource', function($resource) {

    var projectView = function(data) {
      return data;
    }

    return {
      projectView: projectView,
    };
  }]);
