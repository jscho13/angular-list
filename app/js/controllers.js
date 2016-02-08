'use strict';

/* Controllers */
var listControllers = angular.module('listControllers', []);

listControllers.controller('ProjectCtrl', ['$scope',
  function($scope) {
    $scope.data = [
      {"projects": "Show Three Lists",
       "deadlines": "January 01, 2016 12:00:00",
        "departments": "App Engineering",
         "resources": ["Kirk Middleton","Spenser Estrada","Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina","Shelbie Cervantes"]},
      {"projects": "Make Stepped List",
       "deadlines": "January 01, 2016 12:00:00",
        "departments": "Marketing",
         "resources": ["Shelbie Cervantes"]},
      {"projects": "Add UI-Router Rules",
       "deadlines": "March 15, 2016 12:00:00",
        "departments": "Embedded",
         "resources": ["Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina"]},
      {"projects": "Create Filters",
       "deadlines": "April 01, 2016 12:00:00",
        "departments": "SysOps",
         "resources": ["Spenser Estrada","Breana Medina"]},
      {"projects": "Sum Up Subtotals",
       "deadlines": "April 01, 2016 12:00:00",
        "departments": "Embedded",
         "resources": ["Kirk Middleton"]},
    ];
  }]);
