'use strict';

/* App Module */

var listApp = angular.module('listApp', [
  'ui.router',
  'deadlineController',
  'departmentController',
  'projectController'
]);

listApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/departments")

  $stateProvider
    .state('projects', {
        url: "/projects",
        templateUrl: "views/projects.html",
        controller: 'ProjectController'
    })
      .state('projectsResources', {
          url: "/projects/resources",
          templateUrl: "views/projects.resources.html",
          controller: 'ProjectController'
      })
      .state('projectID', {
          url: "/projects/resources/:id",
          templateUrl: "views/project.id.html",
          controller: 'ProjectDetailController'
      })
    .state('deadlines', {
        url: "/deadlines",
        templateUrl: "views/deadlines.html",
        controller: 'DeadlineController'
    })
      .state('deadlinesResources', {
          url: "/deadlines/resources",
          templateUrl: "views/deadlines.resources.html",
          controller: 'DeadlineController'
      })
      .state('deadlineID', {
          url: "/deadlines/resources/:id",
          templateUrl: "views/deadline.id.html",
          controller: 'DeadlineDetailController'
      })
    .state('departments', {
        url: "/departments",
        templateUrl: "views/departments.html",
        controller: 'DepartmentController'
    })
      .state('departmentsResources', {
          url: "/departments/resources",
          templateUrl: "views/departments.resources.html",
          controller: 'DepartmentController'
      })
      .state('departmentID', {
          url: "/departments/resources/:id",
          templateUrl: "views/department.id.html",
          controller: 'DepartmentDetailController'
      })
})
