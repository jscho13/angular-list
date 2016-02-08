'use strict';

/* Controllers */
var listControllers = angular.module('listControllers', []);

listControllers.controller('DataCtrl', ['$scope',
  function($scope) {
    $scope.data = [
      {"Project": "Show Three Lists",
       "Due": "January 01, 2016 12:00:00",
        "Dept": "App Engineering",
         "Resources": ["Kirk Middleton","Spenser Estrada","Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina","Shelbie Cervantes"]},
      {"Project": "Make Stepped List",
       "Due": "January 01, 2016 12:00:00",
        "Dept": "Marketing",
         "Resources": ["Shelbie Cervantes"]},
      {"Project": "Add UI-Router Rules",
       "Due": "March 15, 2016 12:00:00",
        "Dept": "Embedded",
         "Resources": ["Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina"]},
      {"Project": "Create Filters",
       "Due": "April 01, 2016 12:00:00",
        "Dept": "SysOps",
         "Resources": ["Spenser Estrada","Breana Medina"]},
      {"Project": "Sum Up Subtotals",
       "Due": "April 01, 2016 12:00:00",
        "Dept": "Embedded",
         "Resources": ["Kirk Middleton"]},
    ];
  }]);