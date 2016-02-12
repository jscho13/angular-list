'use strict';

/* App Module */

var listApp = angular.module('listApp', [
  'ui.router',
  'controllers',
  'services'
]);

listApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/departments")

  $stateProvider
    .state('projects', {
        url: "/projects",
        templateUrl: "views/projects.html",
        controller: 'ProjectController'
    })
      .state('projects.id', {
          url: "/projects/:id",
          templateUrl: "views/projects.html",
          controller: 'ProjectController'
      })
      .state('projects.resources', {
          url: "projects/resources",
          templateUrl: "views/projects.resources.html",
          controller: 'ProjectResourceController'
      })
    //
    // .state('departments', {
    //     url: "/departments",
    //     templateUrl: "views/departments.html",
    //     controller: 'ProjectController'
    // })
    //   .state('departments.resources', {
    //       url: "/resources",
    //       templateUrl: "views/departments.resources.html",
    //       controller: 'ProjectController'
    //   })
    //
    // .state('deadlines', {
    //     url: "/deadlines",
    //     templateUrl: "views/deadlines.html",
    //     controller: 'ProjectController'
    // })
    //   .state('deadlines.resources', {
    //       url: "/resources",
    //       templateUrl: "views/deadlines.resources.html",
    //       controller: 'ProjectController'
    //   })
    //
    // .state('resources', {
    //     url: "/resources",
    //     templateUrl: "views/resources.html"
    // })
})
