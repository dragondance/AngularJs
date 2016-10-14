(function () {

	angular
		.module("caralibro")
		.filter("dateToWords", dateToWords);
	
	function dateToWords ()
	{
		return dateToWordsFilter;
		
		///////////
		
		function dateToWordsFilter (date)
		{
			if (!date || !(date instanceof Date)) return "Fecha desconocida";


			// Result to return
			var words = "";
			// Seconds passed
			var diff = (Date.now() - date.valueOf()) / 1000;

			// Menos de un minuto
			if (diff <= 60) words = "Hace menos de un minuto";
			// Menos de una hora (60*60)
			else if (diff <= 3600)
			{
				var minutes = Math.round(diff/60);
				words = "Hace " + minutes + " minuto" + (minutes > 1 ? 's':'');
			}
			// Menos de 24 horas (60*60*24)
			else if (diff <= 86400)
			{
				var hours = Math.round(diff/3600);
				words = "Hace " + hours + " hora" + (hours > 1 ? 's':'');
			}
			// Menos de 7 días (60*60*24*7)
			else if (diff <= 604800)
			{
				var days = Math.round(diff/86400);
				words = "Hace " + days + " día" + (days > 1 ? 's':'');
			}
			// Fecha exacta
			else words = "El " + date.toLocaleDateString() + " a las " + date.toLocaleTimeString();

			return words;
		}
	}

})();
