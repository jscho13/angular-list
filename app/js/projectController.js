'use strict';

/* Controllers */

var controllers = angular.module('projectController', ['services']);

  controllers.controller('ProjectController', ['$scope', 'Project',
    function($scope, Project) {
      $scope.data = Project.query(function(rawData) {
        _(rawData).forEach(function(project) {
          // this iterates through every project id and replaces it with json data
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });

      $scope.orderProp = 'ProjectName';

      $scope.addProject = function(projectName){
        $scope.data.push({"ProjectName":projectName, "Project":[{"populate":"data"}]});
      }

      $scope.deleteProject = function(project){
        var index = _.indexOf($scope.data, project);
        $scope.data.splice(index, 1);
      }

      $scope.addDeadline = function(project, deadline){
        var projectIndex = _.indexOf($scope.data, project);
        $scope.data[projectIndex].Project[0]["Deadline"] = deadline;
      }

      $scope.deleteDeadline = function(deleteDeadline){
        var index = _.indexOf($scope.data, deleteDeadline);
        delete $scope.data[index].Project[0]["Deadline"]
      }

      $scope.addDept = function(project, department){
        var projectIndex = _.indexOf($scope.data, project);
        $scope.data[projectIndex].Project[0]["Dept"] = department;
      }

      $scope.deleteDept = function(deleteDept){
        var index = _.indexOf($scope.data, deleteDept);
        delete $scope.data[index].Project[0]["Dept"]
      }

      $scope.addResource = function(project, resource) {
        var projectIndex = _.indexOf($scope.data, project);
        var projectList = $scope.data[projectIndex].Project;
        if (!("Resources" in projectList[0])) {
          projectList[0]["Resources"] = [resource];
        } else {
          projectList[0].Resources.push(resource);
        }
      }

      $scope.deleteResource = function(project, resource) {
        var projectIndex = _.indexOf($scope.data, project);
        var resourceList = $scope.data[projectIndex].Project[0].Resources
        var resourceIndex = _.indexOf(resourceList, resource)
        resourceList.splice(resourceIndex, 1);
      }

      $scope.dropResource = function(project) {
        var projectIndex = _.indexOf($scope.data, project);
        var resourceList = $scope.data[projectIndex].Project[0].Resources
        resourceList.pop();
      }
    }]);

  controllers.controller('ProjectDetailController', ['$scope', '$stateParams', 'Project',
    function($scope, $stateParams, Project) {
      $scope.data = Project.get({id: $stateParams.id});
    }]);
