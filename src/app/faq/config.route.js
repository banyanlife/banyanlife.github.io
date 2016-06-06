(function() {
	'use strict';

	angular
		.module('app.faq')
		.config(configFunction)

	configFunction.$inject = ['$routeProvider'];

	function configFunction($routeProvider) {
		$routeProvider.when('/faq', {
			templateUrl: 'app/faq/faq.html'
		});
	}

})();