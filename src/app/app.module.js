(function() {
	'use strict';

	angular
		.module('app', [
		// Angular Modules.
		'ngRoute',

		// Third Party Modules.
		'firebase',

		// Custome Modules
		'app.landing',
		'app.faq',
	]);

})();