$(document).ready(function() {

	//Clears text in search bar when clicked
	function clearSearch() {
		if ($("#searchbar").val() == "  Search this site") {
			$("#searchbar").val("");
		}
	}

	//Call functions
	$("#searchbar").click(clearSearch);
});
