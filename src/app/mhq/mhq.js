'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mhq', {
    templateUrl: 'mhq/mhq.html',
    controller: 'MhqCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);