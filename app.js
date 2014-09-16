$(document).ready( function() {
	console.log("document read");

var TOKEN = "xoxp-2442078175-2442078177-2658860851-3a8f06";

(function getTags(){
	url = "https://slack.com/api/search.all";
	query = "http";
	var urlWithParams = url + "?token=" + TOKEN + "&query=" + query + "&count=100"; 

	$.ajax({
		url: urlWithParams,
		type: "GET",
	}).done(function(data) {
		data.messages.matches.forEach(function(message) {
			console.log(message.text);
		})
	});
})();

});


// hello
