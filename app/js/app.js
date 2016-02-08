'use strict';

/* App Module */

var listApp = angular.module('listApp', [
  'ui.router',
  'listControllers'
]);

listApp.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /projects
  $urlRouterProvider.otherwise("/departments")

  $stateProvider
    .state('projects', {
        url: "/projects",
        templateUrl: "views/projects.html",
        controller: 'DataCtrl'
    })
      .state('projects.resources', {
          url: "/resources",
          templateUrl: "views/projects.resources.html",
          controller: 'DataCtrl'
      })

    .state('departments', {
        url: "/departments",
        templateUrl: "views/departments.html",
        controller: 'DataCtrl'
    })
      .state('departments.resources', {
          url: "/resources",
          templateUrl: "views/departments.resources.html",
          controller: 'DataCtrl'
      })

    .state('deadlines', {
        url: "/deadlines",
        templateUrl: "views/deadlines.html",
        controller: 'DataCtrl'
    })
      .state('deadlines.resources', {
          url: "/resources",
          templateUrl: "views/deadlines.resources.html",
          controller: 'DataCtrl'
      })

    .state('resources', {
        url: "/resources",
        templateUrl: "views/resources.html"
    })
})
