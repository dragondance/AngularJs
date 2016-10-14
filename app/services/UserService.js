(function () {

	angular
		.module("caralibro")
		.factory("UserService", UserService);

	UserService.$inject = [];
	function UserService ()
	{
		var service = {
			register: register,
			login: login,
			logout: logout,
			getCurrent: getCurrent
		};

		return service;


		//////////


		/**
		 * Signs up a new user.
		 * @param {Object} user - User to register.
		 * @param {string} user.username - Username.
		 * @param {string} user.password - Password.
		 * @param {string} user.name - Name.
		 * @param {string} user.surnames - Surnames.
		 * @returns {Parse.Promise} - A promise that is fulfilled with the user when the signup completes.
		 */
		function register (user)
		{
			var newUser = new Parse.User();
			newUser.set("username", user.username);
			newUser.set("password", user.password);
			newUser.set("name", user.name);
			newUser.set("surnames", user.surnames);

			return newUser.signUp();
		}

		/**
		 * Logs in an user.
		 * @param {Object} user - User to login.
		 * @param {string} user.username - Username.
		 * @param {string} user.password - Password.
		 * @returns {Parse.Promise} - A promise that is fulfilled with the user when the login is complete.
		 */
		function login (user)
		{
			return Parse.User.logIn(user.username, user.password);
		}

		/**
		 * Logs out the currently logged in user session.
		 * @returns {Parse.Promise} - A promise resolved when session is destroyed on the server.
		 */
		function logout ()
		{
			return Parse.User.logOut();
		}

		/**
		 * Retrieves the currently logged in ParseUser with a valid session.
		 * @returns {Parse.User} - The currently logged in Parse.User.
		 */
		function getCurrent ()
		{
			return Parse.User.current();
		}
	}

})();
