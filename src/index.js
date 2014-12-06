$(document).ready(function() {
	$("#play_letters").mouseup(function() {
    $.ajax({
		url: "play_letters.html?param=eskimo",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
});