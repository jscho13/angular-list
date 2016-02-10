'use strict';

/* Controllers */
var listControllers = angular.module('listControllers', ['dataModule']);

listControllers.controller('ProjectCtrl', ['$scope', 'projectViewer',
  function($scope, projectViewer) {

    // Define scope
    $scope.data = projectViewer.projectView();

    // Add a Item to the list
   $scope.addResource = function(selectedProject, resourceName) {
     var index = _.findIndex($scope.data, selectedProject);
     $scope.data[index].Resources.push(resourceName);
   };
}]);
