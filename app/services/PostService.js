(function () {

	angular
		.module("caralibro")
		.factory("PostService", PostService);

	PostService.$inject = ["PAGE_TAM"];
	function PostService (PAGE_TAM)
	{
		var service = {
			getAll: getAll,
			getPostsOfUser: getPostsOfUser,
			create: create
		};

		return service;


		//////////


		var Post = Parse.Object.extend("Post");

		/**
		 * Retrieves the currently logged in ParseUser with a valid session.
		 * @param {number} page - Page to retrieve, determined by PAGE_TAM.
		 * @returns {Parse.Promise} - A promise that is fulfilled with Posts when query is completed.
		 */
		function getAll (page)
		{
			page = Number(page) || 0;

			// Query for retrieve Post objects
			var query = new Parse.Query(Post);
			query.descending("createdAt");
			query.include("author");

			// Pagination
			query.skip(page * PAGE_TAM);
			query.limit(PAGE_TAM);

			// Execute query
			return query.find();
		}

		/**
		 * Retrieves the currently logged in ParseUser with a valid session.
		 * @param {number} userId - ID of the user.
		 * @param {number} page - Page to retrieve, determined by PAGE_TAM.
		 * @returns {Parse.Promise} - A promise that is fulfilled with Posts when query is completed.
		 */
		function getPostsOfUser (userId, page)
		{
			page = Number(page) || 0;

			// Query for retrieve Post objects
			var query = new Parse.Query(Post);
			query.descending("createdAt");
			query.include("author");

			// Get by author
			var author = new Parse.User;
			author.id = userId;
			query.equalTo("author", author);

			// Pagination
			query.skip(page * PAGE_TAM);
			query.limit(PAGE_TAM);

			// Execute query
			return query.find();
		}

		/**
		 * Creates a new Post object with current logged user as author.
		 * @param {string} message - Message to post.
		 * @returns {Parse.Promise} - A promise that is fulfilled with the new Post when creation is completed.
		 */
		function create (message)
		{
			// Create Post object
			var post = new Post();

			// Set author as current logged user
			post.set("author", Parse.User.current());

			// Set message
			post.set("message", message);

			// Save data
			return post.save();
		}
	}

})();
