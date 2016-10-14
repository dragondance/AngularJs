(function () {

	angular
		.module("caralibro")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state", "UserService"];
	function LoginController ($state, UserService)
	{
		var ctrl = this;

		/**
		 * User object for login.
		 * @type {{username: string, password: string}}
		 */
		ctrl.loginUser = {};
		ctrl.doLogin = doLogin;


		//////////


		function doLogin ()
		{
			UserService
				.login(ctrl.loginUser)
				.then(doLoginComplete, doLoginFailed);
				// FIX: No funciona catch porque nos devuelve una promesa de Parse y no de AngularJS...

			function doLoginComplete (user)
			{
				console.log("doLoginComplete", user);
				$state.go("private.me");
			}

			function doLoginFailed (error)
			{
				console.error("doLoginFailed", error);
				// TODO Show on UI
			}
		}
	}

})();
