$(document).ready(function() {
	// vaihda väriä et näkee paremmin mitä painetaan.
	/*
	* KESKEN. Ei muuta takas. Tutki toggleClass
	*/

	$("#play_letters").mousedown("click", function(){
	  $(this).css("background-color", "#7AB55C");
	});

	$("#play_nouns").mousedown("click", function(){
	  $(this).css("background-color", "#7AB55C");
	});

	$("#play_verbs").mousedown("click", function(){
	  $(this).css("background-color", "#7AB55C");
	});

	$("#play_adjectives").mousedown("click", function(){
	  $(this).css("background-color", "#7AB55C");
	});

	$("#play_adverbs").mousedown("click", function(){
	  $(this).css("background-color", "#7AB55C");
	});

	$("#play_mustKnowns").mousedown("click", function(){
	  $(this).css("background-color", "#7AB55C");
	});


	// letters
	$("#play_letters").mouseup(function() {
    $.ajax({
		url: "html/play_letters.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
	// nouns
	$("#play_nouns").mouseup(function() {
    $.ajax({
		url: "html/play_nouns.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
	//verbs
	$("#play_verbs").mouseup(function() {
    $.ajax({
		url: "html/play_verbs.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
	// adjectives
	$("#play_adjectives").mouseup(function() {
    $.ajax({
		url: "html/play_adjectives.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
	//adverbs
	$("#play_adverbs").mouseup(function() {
    $.ajax({
		url: "html/play_adverbs.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
	// must knowns
	$("#play_mustKnowns").mouseup(function() {
    $.ajax({
		url: "html/play_mustKnowns.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data).slideDown(1000);
	});
	});
});