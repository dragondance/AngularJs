(function () {

	angular
		.module("caralibro")
		.controller("PrivateController", PrivateController);

	PrivateController.$inject = ["$state", "UserService"];
	function PrivateController ($state, UserService)
	{
		var ctrl = this;

		ctrl.currentName = "";
		ctrl.searchQuery = "";
		ctrl.doSearch = doSearch;
		ctrl.doLogout = doLogout;
		ctrl.doRefresh = doRefresh;

		init();


		///////////


		function init ()
		{
			ctrl.currentName = UserService.getCurrent().get("name");
		}

		function doSearch ()
		{
			$state.go("private.search", { query: ctrl.searchQuery });
		}

		function doLogout ()
		{
			UserService.logout();
			$state.go("public.register");
		}

		function doRefresh ()
		{
			$state.reload();
		}
	}

})();
