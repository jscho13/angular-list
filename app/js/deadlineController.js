'use strict';

/* Controllers */

var controllers = angular.module('deadlineController', ['services']);

  controllers.controller('DeadlineController', ['$scope', 'Deadline', 'Project',
    function($scope, Deadline, Project) {
      $scope.data = Deadline.query(function(rawData) {
        _(rawData).forEach(function(project) {
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });

      $scope.orderProp = 'Deadline';
      $scope.orderPropSec = 'Resources.length';

      $scope.sortDates = function(stringDate) {
        var date = new Date(stringDate);
        return date;
      };

      $scope.addDeadline = function(deadlineName){
        $scope.data.push({"Deadline":deadlineName});
      }

      $scope.deleteDeadline = function(deleteDeadline){
        var index = _.indexOf($scope.data, deleteDeadline);
        $scope.data.splice(index, 1);
      }

      $scope.addProject = function(selectedDeadline, projectName) {
        var deadlineIndex = _.indexOf($scope.data, selectedDeadline);
        if (!("Project" in $scope.data[deadlineIndex])) {
          $scope.data[deadlineIndex].Project = [{"Project":projectName}];
        } else {
          $scope.data[deadlineIndex].Project.push({"Project":projectName});
        }
      }

      $scope.deleteProject = function(deadline, project){
        var deadlineIndex = _.indexOf($scope.data, deadline);
        var projectList = $scope.data[deadlineIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        projectList.splice(projectIndex, 1);
      }

      $scope.addDept = function(selectedDeadline, selectedProject, deptName){
        var deadlineIndex = _.indexOf($scope.data, selectedDeadline);
        var projectList = $scope.data[deadlineIndex].Project
        var projectIndex = _.indexOf(projectList, selectedProject);
        projectList[projectIndex]["Dept"] = deptName;
      }

      $scope.deleteDept = function(deadline, project){
        var deadlineIndex = _.indexOf($scope.data, deadline);
        var projectList = $scope.data[deadlineIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        delete projectList[projectIndex]["Dept"];
      }

      $scope.addResource = function(deadline, project, resourceName) {
        var deadlineIndex = _.indexOf($scope.data, deadline);
        var projectList = $scope.data[deadlineIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        if (!("Resources" in projectList[projectIndex])) {
          projectList[projectIndex]["Resources"] = [resourceName];
        } else {
          projectList[projectIndex].Resources.push(resourceName);
        }
      }

      $scope.deleteResource = function(deadline, project, resourceName) {
        var deadlineIndex = _.indexOf($scope.data, deadline);
        var projectList = $scope.data[deadlineIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        var resourceList = projectList[projectIndex].Resources
        var resourceIndex = _.indexOf(resourceList, resourceName);
        resourceList.splice(resourceIndex, 1);
      }

      $scope.dropResource = function(deadline, project) {
        var deadlineIndex = _.indexOf($scope.data, deadline);
        var projectList = $scope.data[deadlineIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        var resourceList = projectList[projectIndex].Resources
        resourceList.pop();
      }
    }]);
