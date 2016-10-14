(function () {

	angular
		.module("caralibro")
		.controller("AllPostsController", AllPostsController);

	AllPostsController.$inject = [];
	function AllPostsController ()
	{
		var ctrl = this;

		ctrl.postList = [];
		ctrl.hasMorePosts = false;
		ctrl.doLoadMore = doLoadMore;

		init();


		///////////


		function init ()
		{
			// TODO Load from server

			// DEBUG data
			ctrl.postList = [
				// Susana Oria: "Hola mundo"
				{
					author: {
						id: 1,
						name: "Susana",
						surnames: "Oria"
					},
					message: "¡Hola mundo!",
					createdAt: new Date()
				},
				// Francisco Jones: ¡La última de Star Wars mola mucho!
				{
					author: {
						id: 2,
						name: "Francisco",
						surnames: "Jones"
					},
					message: "¡La última de Star Wars mola mucho!",
					createdAt: new Date()
				}
			];

			ctrl.hasMorePosts = true;
		}

		function doLoadMore ()
		{
			// TODO Load form server

			// DEBUG
			ctrl.postList.push({
				author: {
					id: 3,
					name: "Armando",
					surnames: "Ruido"
				},
				message: "¿Hay más posts?",
				createdAt: new Date()
			});

			// DEBUG
			ctrl.hasMorePosts = false;
		}
	};

})();
