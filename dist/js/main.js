require.config({
	paths:{
		app:'app',
		jquery:'/bower_components/jquery/dist/jquery',
		angular:'/bower_components/angular/angular',
		angularUiRouter: '/bower_components/angular-ui-router/release/angular-ui-router',
		angularSanitize: '/bower_components/angular-sanitize/angular-sanitize',
		angularMarked: '/bower_components/angular-marked/dist/angular-marked',
		oclazyload: '/bower_components/oclazyload/dist/ocLazyLoad.min',
		marked:'/bower_components/marked/lib/marked',
		highlight:'../highlight/highlight.pack'
	},
	shim:{
		angular:{deps: ['jquery'], exports: 'angular'},
		angularUiRouter: {deps: ['angular'], exports: 'angularUiRouter'},
		angularSanitize: {deps: ['angular'], exports: 'angularSanitize'},
		angularMarked: {deps: ['angular','marked'], exports: 'angularMarked'},
		oclazyload: {deps: ['angular'], exports: 'oclazyload'}

	}
});
require(['angular','app'],function (angular,app) {
	var html = angular.element (document.getElementsByTagName ('html')[0]);
	angular.bootstrap(html, ['app'])
})