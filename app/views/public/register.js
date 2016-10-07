(function(){
	angular
		.module("caralibro")
		.controller("RegisterController", RegisterController);

		RegisterController.$inject = ["UserService"];

		function RegisterController(UserService){
			var ctrl = this;

			ctrl.newUser = {}; //username, email, password, password2
			ctrl.doRegister = doRegister;

			///////////

			function doRegister(){
				console.log(ctrl.newUser);
				//TODO Registrar usuario
				//TODO Si success, navegar a private.me
				UserService.register(ctrl.newUser).then(doRegisterComplete, doRegisterFailed);

				function doRegisterComplete(response){
					console.log("doRegisterComplete", response);

				}

				function doRegisterFailed(reason){
					console.log("doRegisterFailed", reason);

				}
			}
		}
})();