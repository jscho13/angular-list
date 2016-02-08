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
        controller: 'ProjectCtrl'
    })
      .state('projects.resources', {
          url: "/resources",
          templateUrl: "views/projects.resources.html",
          controller: 'ProjectCtrl'
      })

    .state('departments', {
        url: "/departments",
        templateUrl: "views/departments.html"
    })
      .state('departments.resources', {
          url: "/resources",
          templateUrl: "views/departments.resources.html",
          controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
      })

    .state('deadlines', {
        url: "/deadlines",
        templateUrl: "views/deadlines.html"
    })
      .state('deadlines.resources', {
          url: "/resources",
          templateUrl: "views/deadlines.resources.html",
          controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
      })

    .state('resources', {
        url: "/resources",
        templateUrl: "views/resources.html"
    })
})
