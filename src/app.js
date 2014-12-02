$(document).ready(function() {
	var cyrilicArray = ["A", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "O",
						"П", "Р", "C", "T", "Y", "Ф", "X", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"];
	var nonCyrilicArray = ["A", "B", "V", "G", "D", "YE", "YO", "ZH", "Z", "I", "J", "K", "L", "M", "N", "O",
							"P", "R", "S", "T", "U", "F", "H", "TS", "CH", "SH", "SHCH", "IH", "E", "YU", "YA"];


	var random = Math.floor(Math.random() * cyrilicArray.length);
	$("#cyrillicContent").text(cyrilicArray[random]);

	// Jos painetaan Enter
	$("#nonCyrillicContent").keypress(function(e) {
		if (e.which == 13) {
			// Ota vastaus talteen ja tarkista onko vastaus oikein

			// Lopuksi tyhjennä kenttä
			$("#nonCyrillicContent").val("");
		}
	});
	
	/* Älä välitä tästä. Tein alunperin PC:lle tavan kirjoittaa ilman tuota input field. Puhelimille tämä oli mahdotonta soveltaa
	$(document).keypress(function(e) {
        if(e.which == 97) {
			$("#nonCyrillicContent").append("A")
		} else if (e.which == 98) {
			$("#nonCyrillicContent").append("B")
		} else if (e.which == 99) {
			$("#nonCyrillicContent").append("C")
		} else if (e.which == 100) {
			$("#nonCyrillicContent").append("D")
		} else if (e.which == 101) {
			$("#nonCyrillicContent").append("E")
		} else if (e.which == 102) {
			$("#nonCyrillicContent").append("F")
		} else if (e.which == 103) {
			$("#nonCyrillicContent").append("G")
		} else if (e.which == 104) {
			$("#nonCyrillicContent").append("H")
		} else if (e.which == 105) {
			$("#nonCyrillicContent").append("I")
		} else if (e.which == 106) {
			$("#nonCyrillicContent").append("J")
		} else if (e.which == 107) {
			$("#nonCyrillicContent").append("K")
		} else if (e.which == 108) {
			$("#nonCyrillicContent").append("L")
		} else if (e.which == 109) {
			$("#nonCyrillicContent").append("M")
		} else if (e.which == 110) {
			$("#nonCyrillicContent").append("N")
		} else if (e.which == 111) {
			$("#nonCyrillicContent").append("O")
		} else if (e.which == 112) {
			$("#nonCyrillicContent").append("P")
		} else if (e.which == 113) {
			$("#nonCyrillicContent").append("Q")
		} else if (e.which == 114) {
			$("#nonCyrillicContent").append("R")
		} else if (e.which == 115) {
			$("#nonCyrillicContent").append("S")
		} else if (e.which == 116) {
			$("#nonCyrillicContent").append("T")
		} else if (e.which == 117) {
			$("#nonCyrillicContent").append("U")
		} else if (e.which == 118) {
			$("#nonCyrillicContent").append("V")
		} else if (e.which == 119) {
			$("#nonCyrillicContent").append("W")
		} else if (e.which == 120) {
			$("#nonCyrillicContent").append("X")
		} else if (e.which == 121) {
			$("#nonCyrillicContent").append("Y")
		} else if (e.which == 122) {
			$("#nonCyrillicContent").append("Z")
		} else if (e.which == 13) {
			$("#nonCyrillicContent").html("");
		}
	});*/
	
});