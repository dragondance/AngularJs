(function () {

	angular
		.module("caralibro")
		.controller("ProfileController", ProfileController);

	ProfileController.$inject = ["$state"];
	function ProfileController ($state)
	{
		var ctrl = this;

		ctrl.user = {};

		ctrl.doCreatePost = doCreatePost;
		ctrl.newPostMessage = null;

		ctrl.isMyProfile = false;

		ctrl.doEditAbout = doEditAbout;
		ctrl.isEditingAbout = false;
		ctrl.newAbout = null;

		init();


		///////////


		function init ()
		{
			ctrl.isMyProfile = $state.is("private.me");

			// TODO Load from server

			// DEBUG
			ctrl.user = {
				id: 1,
				name: "Susana",
				surnames: "Oria",
				about: "Me encanta Juego de Tronos."
			};
		}

		function doCreatePost ()
		{
			// TODO Create on server
			// TODO Add to current postList

			ctrl.newPostMessage = "";
		}

		function doEditAbout ()
		{
			// Editing -> save
			if (ctrl.isEditingAbout)
			{
				// TODO Update to server
				ctrl.user.about = ctrl.newAbout;
			}
			// Not editing -> dump on newAbout
			else
			{
				ctrl.newAbout = ctrl.user.about;
			}

			// Toggle state
			ctrl.isEditingAbout = !ctrl.isEditingAbout;
		}
	}

})();
