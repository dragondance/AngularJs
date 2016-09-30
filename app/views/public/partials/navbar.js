(function(){
	angular
		.module("caralibro")
		.controller("LoginController", LoginController);

		LoginController.$inject = [];

		function LoginController(){
			console.log("holaaaaaaa");
			var ctrl = this;

			ctrl.loginUser = { }; //username, password
			ctrl.doLogin = doLogin;

			function doLogin(){
				//TODO Atacar server
				console.log("Login con:", ctrl.loginUser);

				//TODO onSucess....

			}
		}
})();