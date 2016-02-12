'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

  controllers.controller('ProjectController', ['$scope', '$state', 'Project',
  function($scope, $state, Project) {

    debugger;
    $scope.data = Project.query();

    $scope.addResource = function(selectedProject, resourceName) {
      var index = _.findIndex($scope.data, selectedProject);
      $scope.data[index].Resources.push(resourceName);
    };
  }]);
