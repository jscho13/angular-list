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

      $scope.addProject = function(selectedProject){
        var project = {}
        var name = "ProjectName"
        project[name] = selectedProject
        $scope.data.push(project);
      }

      $scope.deleteProject = function(deleteProject){
        var index = _.indexOf($scope.data, deleteProject);
        $scope.data.splice(index, 1);
      }

      $scope.addDue = function(selectedProject, dueName){
        var index = _.indexOf($scope.data, selectedProject);
        $scope.data[index].Project[0].Due = dueName;
      }

      $scope.deleteDue = function(deleteDue){
        var index = _.indexOf($scope.data, deleteDue);
        delete $scope.data[index].Project[0]["Due"]
      }

      $scope.addDept = function(selectedProject, deptName){
        var index = _.indexOf($scope.data, selectedProject);
        $scope.data[index].Project[0].Dept = deptName;
      }

      $scope.deleteDept = function(deleteDept){
        var index = _.indexOf($scope.data, deleteDept);
        delete $scope.data[index].Project[0]["Dept"]
      }

      $scope.addResource = function(selectedProject, resourceName) {
        var index = _.indexOf($scope.data, selectedProject);
        $scope.data[index].Project[0].Resources.push(resourceName);
      }

      $scope.deleteResource = function(selectedProject, resourceName) {
        var index = _.indexOf($scope.data, selectedProject);
        var resourceList = $scope.data[index].Project[0].Resources
        var resourceIndex = _.indexOf(resourceList, resourceName)
        $scope.data[index].Project[0].Resources.splice(resourceIndex, 1);
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

      $scope.deleteDeadline = function(deleteDeadline){
        var index = _.indexOf($scope.data, deleteDeadline);
        $scope.data.splice(index, 1);
      }

      $scope.deleteProject = function(deleteProject){
        _($scope.data).forEach(function(project) {
          var index = _.indexOf(project.Project, deleteProject);
          if (index > -1) {
            project.Project.splice(index, 1);
          }
        });
      }

      $scope.addResource = function(selectedProject, resourceName) {
        _($scope.data).forEach(function(project) {
          var index = _.indexOf(project.Project, selectedProject);
          if (index > -1) {
            project.Project[index].Resources.push(resourceName);
          }
        });
      }

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

      $scope.addResource = function(selectedProject, resourceName) {
        var index = _.indexOf($scope.data, selectedProject);
        $scope.data[index].Project[0].Resources.push(resourceName);
      }

      $scope.deleteDepartment = function(deleteDepartment){
        var index = _.indexOf($scope.data, deleteDepartment);
        $scope.data.splice(index, 1);
      }

    }]);
