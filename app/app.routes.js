(function(){
	angular
		.module("caralibro")
		.config(ConfigureRoutes);

		ConfigureRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

		function ConfigureRoutes($stateProvider, $urlRouterProvider){
			$stateProvider
				.state({
					name: "public"
					, abstract: true
					, templateUrl: "app/views/public/public.html" 
				})

				.state({
					name: "public.register"
					, url: "/register"
					, templateUrl: "app/views/public/register.html"
					, controller: "RegisterController"
					, controllerAs: "registerCtrl"
				})

			//segun el papa poner la funcion a parte
			$urlRouterProvider.otherwise(function($injector){
				//devuelve la # delante en el return 
				//hay que poner el slice(1) para evitar esto
				var $state = $injector.get("$state"); 
				var urlOri = $state.href("public.register");

				console.log(urlOri);

				return $state.href("public.register").slice(1);
			});
		}
})();