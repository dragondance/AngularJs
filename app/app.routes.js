(function () {

	angular
		.module("caralibro")
		.config(ConfigureRoutes);

	ConfigureRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function ConfigureRoutes ($stateProvider, $urlRouterProvider)
	{
		$stateProvider

		// ===
		// == Public
			.state({
				name: "public",
				abstract: true,
				templateUrl: "app/views/public/public.html",
				controller: "PublicController",
				controllerAs: "publicCtrl"
			})
			.state({
				name: "public.register",
				url: "/register",
				templateUrl: "app/views/public/register.html",
				controller: "RegisterController",
				controllerAs: "registerCtrl"
			})

			// ===
			// == Private
			.state({
				name: "private",
				abstract: true,
				templateUrl: "app/views/private/private.html",
				controller: "PrivateController",
				controllerAs: "privateCtrl"
			})

			// Self profile
			.state({
				name: "private.me",
				url: "/me",
				templateUrl: "app/views/private/profile.html",
				controller: "ProfileController",
				controllerAs: "profileCtrl"
			})

			// Profiles
			.state({
				name: "private.profile",
				url: "/profile/{userId}",
				templateUrl: "app/views/private/profile.html",
				controller: "ProfileController",
				controllerAs: "profileCtrl"
			})
			.state({
				name: "private.search",
				url: "/search?query",
				templateUrl: "app/views/private/search.html",
				controller: "SearchController",
				controllerAs: "searchCtrl"
			})

			// Posts
			.state({
				name: "private.all",
				url: "/all",
				templateUrl: "app/views/private/all.html",
				controller: "AllPostsController",
				controllerAs: "allCtrl"
			});


		$urlRouterProvider.otherwise(function ($injector)
		{
			var $state = $injector.get("$state");

			var originalUrl = $state.href("public.register");
			var urlToGo = originalUrl.slice(1);

			console.log("URLS:", originalUrl, urlToGo);

			return urlToGo;
		});
	}

})();
