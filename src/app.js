$(document).ready(function() {
	var cyrilicArray = ["A", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "O",
						"П", "Р", "C", "T", "Y", "Ф", "X", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"];
	var nonCyrilicArray = ["A", "B", "V", "G", "D", "YE", "YO", "ZH", "Z", "I", "J", "K", "L", "M", "N", "O",
							"P", "R", "C", "T", "U", "F", "KH", "TS", "CH", "SH", "SHCH", "IH", "E", "YU", "YA"];


	var random = Math.floor(Math.random() * cyrilicArray.length);
	$("#cyrillicContent").text(cyrilicArray[random])
	$("#nonCyrillicContent").text(nonCyrilicArray[random])
});