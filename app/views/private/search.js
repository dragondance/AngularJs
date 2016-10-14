(function () {

	angular
		.module("caralibro")
		.controller("SearchController", SearchController);

	SearchController.$inject = ["$stateParams"];
	function SearchController ($stateParams)
	{
		var ctrl = this;

		ctrl.query = null;
		ctrl.userList = [];

		init();


		///////////


		function init ()
		{
			ctrl.query = $stateParams.query;

			// TODO Search from server
			ctrl.userList = [
				{
					id: 1,
					name: "Leandro",
					surnames: "Gao"
				},
				{
					id: 2,
					name: "Susana",
					surnames: "Oria"
				}
			];
		}
	}

})();
