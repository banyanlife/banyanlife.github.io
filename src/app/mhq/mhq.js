'use strict';

angular.module('myApp.mhq', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mhq', {
    templateUrl: 'mhq/mhq.html',
    controller: 'MhqCtrl'
  });
}])

.controller('MhqCtrl', [function() {

}]);