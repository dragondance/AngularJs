(function(){
	angular
		.module("caralibro")
		.factory("UserService", UserService);

	UserService.$inject = [];

	function UserService(){
		console.log("UserService");

		var service = {
			register: register
		};

		return service;

		//////////////

		function register(newUser){
			/*$http({
				method: "POST",
				url: ".../login",
				data: newUser
			})*/
			var parseUser = new Parse.User();
			parseUser.set("username", newUser.username);
			parseUser.set("password", newUser.password);
			parseUser.set("name", newUser.name);
			parseUser.set("name", newUser.name);
			parseUser.set("surname", newUser.surname);

			return parseUser.signUp();
		}
	}
})();