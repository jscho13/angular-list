'use strict';

/* Controllers */

var controllers = angular.module('departmentController', ['services']);

  controllers.controller('DepartmentController', ['$scope', 'Department', 'Project',
    function($scope, Department, Project) {
      $scope.data = Department.query(function(rawData) {
        _(rawData).forEach(function(project) {
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });

      $scope.orderProp = 'Department';
      $scope.orderPropSec = 'Resources.length';

      $scope.addDepartment = function(departmentName){
        $scope.data.push({"Department":departmentName});
      }

      $scope.deleteDepartment = function(deleteDepartment){
        var index = _.indexOf($scope.data, deleteDepartment);
        $scope.data.splice(index, 1);
      }

      $scope.addProject = function(department, projectName) {
        var departmentIndex = _.indexOf($scope.data, department);
        if (!("Project" in $scope.data[departmentIndex])) {
          $scope.data[departmentIndex].Project = [{"Project":projectName}];
        } else {
          $scope.data[departmentIndex].Project.push({"Project":projectName});
        }
      }

      $scope.deleteProject = function(department, project){
        var departmentIndex = _.indexOf($scope.data, department);
        var projectList = $scope.data[departmentIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        projectList.splice(projectIndex, 1);
      }

      $scope.addDeadline = function(department, project, deadlineName){
        var departmentIndex = _.indexOf($scope.data, department);
        var projectList = $scope.data[departmentIndex].Project
        var projectIndex = _.indexOf(projectList, project);
        projectList[projectIndex]["Deadline"] = deadlineName;
      }

      $scope.deleteDeadline = function(department, project){
        var departmentIndex = _.indexOf($scope.data, department);
        var projectList = $scope.data[departmentIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        delete projectList[projectIndex]["Deadline"];
      }

      $scope.addResource = function(department, project, resourceName) {
        var departmentIndex = _.indexOf($scope.data, department);
        var projectList = $scope.data[departmentIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        if (!("Resources" in projectList[projectIndex])) {
          projectList[projectIndex]["Resources"] = [resourceName];
        } else {
          projectList[projectIndex].Resources.push(resourceName);
        }
      }

      $scope.deleteResource = function(department, project, resourceName) {
        var departmentIndex = _.indexOf($scope.data, department);
        var projectList = $scope.data[departmentIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        var resourceList = projectList[projectIndex].Resources
        var resourceIndex = _.indexOf(resourceList, resourceName);
        resourceList.splice(resourceIndex, 1);
      }

      $scope.dropResource = function(department, project) {
        var departmentIndex = _.indexOf($scope.data, department);
        var projectList = $scope.data[departmentIndex].Project;
        var projectIndex = _.indexOf(projectList, project);
        var resourceList = projectList[projectIndex].Resources
        resourceList.pop();
      }
    }]);
