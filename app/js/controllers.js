'use strict';

/* Controllers */

var controllers = angular.module('controllers', ['services']);

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
