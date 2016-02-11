'use strict';

/* Controllers */
var listControllers = angular.module('listControllers', ['dataModule']);

listControllers.controller('ProjectCtrl', ['$scope', 'dataViewer',
  function($scope, dataViewer) {

    $scope.data = dataViewer.projectView(data);

    $scope.addResource = function(selectedProject, resourceName) {
      var index = _.findIndex($scope.data, selectedProject);
      $scope.data[index].Resources.push(resourceName);
    };
}]);
