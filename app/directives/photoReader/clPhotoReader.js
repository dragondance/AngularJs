(function(){
	angular
		.module("caralibro")
		.directive("clPhotoReader", clPhotoReader);

	function clPhotoReader(){
		var clPhotoReaderDirective = {
			restrict: "EA",
			templateUrl: "app/directives/photoReader/clPhotoReader.html",
			transclude: true,
			link: clPhotoReaderLink
		};

		return clPhotoReaderDirective;

		////

		function clPhotoReaderLink(scope, element, attrs){
			var transcluded = element.find("ng-transclude").first();
			var input = element.find("input").first();

			transcluded.on("click", function(){
				console.log("asdfasdfasdf");
				input.click();
			});

		}
	}
})();