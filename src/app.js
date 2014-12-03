$(document).ready(function() {
	var cyrilicArray = ["A", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "O",
						"П", "Р", "C", "T", "Y", "Ф", "X", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"];
	var nonCyrilicArray = ["A", "B", "V", "G", "D", "YE", "YO", "ZH", "Z", "I", "J", "K", "L", "M", "N", "O",
							"P", "R", "S", "T", "U", "F", "H", "TS", "CH", "SH", "SHCH", "IH", "E", "YU", "YA"];


	// Tehdään pari muuttuja
	var arrayLength = cyrilicArray.length-1;
	var rCyrillic = Math.floor(Math.random() * arrayLength);
	var randomNumber;
	var rNonCyrillic = new Array(4);

	// Printtaa kyriilinen
	$("#cyrillicContent").text(cyrilicArray[rCyrillic]);

	// Asetetaan neljä satunnaista lukua taulukkoon rNonCyrillic
	for(var i = 0; i < 3; i++) {
		randomNumber = Math.floor(Math.random() * arrayLength);
		if (uniqueNumber(randomNumber, rNonCyrillic)) {
			rNonCyrillic[i] = randomNumber;
		} else { i-- };
	}

	// Lisää oikea vastaus
	 rNonCyrillic[3] = rCyrillic;
	// Sekoitetaan taulukko
	shuffle(rNonCyrillic)
	// printtaa arvaukset sivulle
	$("#left_top").text(nonCyrilicArray[rNonCyrillic[0]]);
	$("#right_top").text(nonCyrilicArray[rNonCyrillic[1]]);
	$("#left_bot").text(nonCyrilicArray[rNonCyrillic[2]]);
	$("#right_bot").text(nonCyrilicArray[rNonCyrillic[3]]);

	// Mitä painetaan?
	$("#left_top").mouseup(function() {
		if (rCyrillic == rNonCyrillic[0]) {
			$("#left_top").css("color", "#7AB55C");
		} else {
			$("#left_top").css("color", "#E74C3C");
		}
	});
	$("#right_top").mouseup(function() {
		if (rCyrillic == rNonCyrillic[1]) {
			$("#right_top").css("color", "#7AB55C");
		} else {
			$("#right_top").css("color", "#E74C3C");
		}
	});
	$("#left_bot").mouseup(function() {
		if (rCyrillic == rNonCyrillic[2]) {
			$("#left_bot").css("color", "#7AB55C");
		} else {
			$("#left_bot").css("color", "#E74C3C");
		}
	});
	$("#right_bot").mouseup(function() {
		if (rCyrillic == rNonCyrillic[3]) {
			$("#right_bot").css("color", "#7AB55C");
		} else {
			$("#right_bot").css("color", "#E74C3C");
		}
	});
	

});

function uniqueNumber(num, rNonCyrillic) {
	var unique = true;
	for (var i = 0; i < rNonCyrillic.length-1; i++) {
		if (num === rNonCyrillic[i]) 
			unique = false; 
	}
	return unique;
}

function shuffle(array) {
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
};