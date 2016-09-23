(function(){
	angular
		.app.module("miApp")
		.controller("AppController", AppController);

	AppController.$inject = ["$scope", "$http"];

	function AppController($scope, $http){
		var vm = this;

		//publico
		//Definicion de variables
		vm.contador = 0;
		vm.incrementar = incrementar;
		vm.nombre = "Pepe";

		activate();

		//Privado
		//Definicion de funciones
		function activate(){ //Como el constructor;
			goSpeakers();
		}

		function incrementar(){
			vm.contador ++;
		};
	}
})();