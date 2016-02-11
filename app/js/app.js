'use strict';

/* App Module */

var listApp = angular.module('listApp', [
  'ui.router',
  'listControllers',
  'ngResource'
]);

listApp.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /projects
  $urlRouterProvider.otherwise("/departments")

  $stateProvider
    .state('projects', {
        url: "/projects",
        templateUrl: "views/projects.html",
        controller: 'ProjectCtrl'
    })
      .state('projects.id', {
          url: "/:id",
          templateUrl: "views/projects.id.html",
          controller: 'ProjectViewCtrl'
      })
      .state('projects.resources', {
          url: "/resources",
          templateUrl: "views/projects.resources.html",
          controller: 'ProjectCtrl'
      })

    .state('departments', {
        url: "/departments",
        templateUrl: "views/departments.html",
        controller: 'ProjectCtrl'
    })
      .state('departments.resources', {
          url: "/resources",
          templateUrl: "views/departments.resources.html",
          controller: 'ProjectCtrl'
      })

    .state('deadlines', {
        url: "/deadlines",
        templateUrl: "views/deadlines.html",
        controller: 'ProjectCtrl'
    })
      .state('deadlines.resources', {
          url: "/resources",
          templateUrl: "views/deadlines.resources.html",
          controller: 'ProjectCtrl'
      })

    .state('resources', {
        url: "/resources",
        templateUrl: "views/resources.html"
    })
})
