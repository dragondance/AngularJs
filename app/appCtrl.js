(function(){
	angular
		.module("miApp")
		.controller("AppController", AppController);

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
})();