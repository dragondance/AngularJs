(function () {

	angular
		.module("caralibro")
		.run(AppRun);

	AppRun.$inject = [];
	function AppRun ()
	{
		Parse.initialize("qAZCpZxwVXxVsekzMCo2uE7ejJH5G6cBuF6g7uPU", "oi2RLKKiGwH8LTApU0jkZmauW6IGf3XBjlEgfXvV");
	}

})();
