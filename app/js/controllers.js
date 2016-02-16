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

      $scope.addProject = function(projectName){
        $scope.data.push({"ProjectName":projectName});
      }

      $scope.deleteProject = function(deleteProject){
        var index = _.indexOf($scope.data, deleteProject);
        $scope.data.splice(index, 1);
      }

      $scope.addDeadline = function(selectedProject, deadlineName){
        var index = _.indexOf($scope.data, selectedProject);
        var deadlineList = $scope.data[index].Project[0].Deadline;
        deadlineList = deadlineName;
      }

      $scope.deleteDeadline = function(deleteDeadline){
        var index = _.indexOf($scope.data, deleteDeadline);
        delete $scope.data[index].Project[0]["Deadline"]
      }

      $scope.addDept = function(selectedProject, deptName){
        var index = _.indexOf($scope.data, selectedProject);
        var deadlineList = $scope.data[index].Project[0].Dept;
        deadline = deptName;
      }

      $scope.deleteDept = function(deleteDept){
        var index = _.indexOf($scope.data, deleteDept);
        delete $scope.data[index].Project[0]["Dept"]
      }

      $scope.addResource = function(selectedProject, resourceName) {
        var index = _.indexOf($scope.data, selectedProject);
        var resourceList = $scope.data[index].Project[0].Resources
        resourceList.push(resourceName);
      }

      $scope.deleteResource = function(selectedProject, resourceName) {
        var index = _.indexOf($scope.data, selectedProject);
        var resourceList = $scope.data[index].Project[0].Resources
        var resourceIndex = _.indexOf(resourceList, resourceName)
        resourceList.splice(resourceIndex, 1);
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
          // this iterates through every project id and replaces it with json data
          _(project.Project).forEach(function(projectId, index){
            project.Project[index] = Project.get({id: projectId});
          });
        });
      });

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
