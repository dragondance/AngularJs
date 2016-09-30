(function(){
	angular
		.module("miApp")
		.controller("AppController", AppController)
		.config(ConfigureRoutes);

	AppController.$inject = ["$scope", "$http"];

	function AppController($scope, $http){
		var vm = this;

		//publico
		//Definicion de variables
		vm.contador = 0;
		vm.incrementar = incrementar;
		vm.nombre = "Pepe";

		//Privado
		//Definicion de funciones

		function incrementar(){
			vm.contador ++;
		};
	}

	function ConfigureRoutes ($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state({
			name: "public",

			url: "/public",

			templateUrl: "public.html"
		})

		.state({
			name: "private",

			url: "/private",

			templateUrl: "private.html"
		});

		$urlRouterProvider.otherwise("/public");
	};
})();