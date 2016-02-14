'use strict';

/* Controllers */

var controllers = angular.module('controllers', ['services']);

  controllers.controller('ProjectController', ['$scope', 'Project',
    function($scope, Project) {
      $scope.data = Project.query(function(rawData) {
        _(rawData).forEach(function(project) {
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });

      $scope.addResource = function(selectedProject, resourceName) {
        var index = _.findIndex($scope.data, selectedProject);
        $scope.data[index].Resources.push(resourceName);
      };

      $scope.deleteProject = function(deleteProject){
        var index = _.findIndex($scope.data, deleteProject);
        $scope.data.splice(index, 1);
      }
    }]);

  controllers.controller('ProjectDetailController', ['$scope', '$stateParams', 'Project',
    function($scope, $stateParams, Project) {
      $scope.data = Project.get({id: $stateParams.id});
    }]);

  controllers.controller('DeadlineController', ['$scope', 'Deadline', 'Project',
    function($scope, Deadline, Project) {
      $scope.data = Deadline.query(function(rawData) {
        _(rawData).forEach(function(project) {
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });
    }]);

  controllers.controller('DepartmentController', ['$scope', 'Department', 'Project',
    function($scope, Department, Project) {
      $scope.data = Department.query(function(rawData) {
        _(rawData).forEach(function(project) {
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });
    }]);
