(function () {

	angular
		.module("caralibro")
		.controller("RegisterController", RegisterController);

	RegisterController.$inject = ["$state", "UserService"];
	function RegisterController ($state, UserService)
	{
		var ctrl = this;

		/**
		 * Objeto para crear un nuevo usuario
		 * @type {{username:string, surnames:string, name:string, password:string, password2:string}}
		 */
		ctrl.newUser = { };
		ctrl.doRegister = doRegister;


		///////////


		function doRegister ()
		{
			// TODO Check form data

			UserService
				.register(ctrl.newUser)
				.then(doRegisterComplete, doRegisterFailed);

			function doRegisterComplete (user)
			{
				console.log("doRegisterComplete", user);
				$state.go("private.me");
			}

			function doRegisterFailed (error)
			{
				console.error("doRegisterFailed", error);
				// TODO Show on UI
			}
		}
	}

})();
