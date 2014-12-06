$(document).ready(function() {
	// http://blogs.transparent.com/russian/100-must-know-russian-words-and-how-to-learn-them/
	
	// Letters
	
	var cyrillicArray = ["A", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "O",
						"П", "Р", "C", "T", "Y", "Ф", "X", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"];
	var nonCyrillicArray = ["A", "B", "V", "G", "D", "YE", "YO", "ZH", "Z", "I", "J", "K", "L", "M", "N", "O",
							"P", "R", "S", "T", "U", "F", "H", "TS", "CH", "SH", "SHCH", "IH", "E", "YU", "YA"];
	
	
	// Nouns
	/*
	var cyrilicArray = ["год", "человек", "время", "дело", "жизнь", "день", "рука", "раз", "работа", "слово", "место", "лицо", "друг", "глаз", "вопрос", "дом",
						"сторона", "страна", "мир", "случай", "голова", "ребенок", "сила", "конец", "вид"];
	var nonCyrilicArray = ["year", "person", "time", "affair", "life", "day", "arm", "once", "work", "word", "place", "face", "friend", "eye", "question", "house",
							"side", "country", "world", "instance", "head", "child", "force", "end", "view"];
	*/

	// Verbs
	/*
	var cyrillicArray = ["быть", "бить", "мочь", "сказать", "говорить", "знать", "стать", "хотеть", "идти", "иметь", "видеть", "думать", "сделать", "жить", "делать", "смотреть",
						"работать", "понять", "пойти", "спросить", "дать", "понимать", "получить", "сидеть", "оказаться", "взять"];
	var nonCyrillicArray = ["to be", "to hit", "to be able", "to say", "to speak", "to know", "to become", "to want", "to go", "to have", "to see", "to think", "to make", "to live", "to do", "to watch",
							"to work", "to understand", "to go", "to ask", "to give", "to understand", "to receive", "to sit", "to happen", "to take"];
	*/

	// Adjectives
	/*
	var cyrillicArray = ["новый", "большой", "должен", "последний", "российский", "общий", "высокий", "хороший", "главный", "лучший", "маленький", "молодой", "государственный", "полный", "советский", "настоящий",
						"старый", "разный", "нужный", "белый", "собственный", "чёрный", "основной", "далёкий"];
	var nonCyrillicArray = ["new", "large", "have to", "last", "Russian", "common", "tall", "good", "main", "the best", "small", "young", "public", "full", "Soviet", "real",
							"old", "different", "necessary", "white", "own", "black", "main", "distant"];
	*/

	// Adverbs
	/*
	var cyrillicArray = ["ещё", "уже", "очень", "можно", "надо", "нет", "тоже", "более", "конечно", "также", "вдруг", "почти", "сразу", "хорошо", "сегодня", "совсем",
						"вообще", "больше", "вместе", "например", "нужно", "опять", "нельзя", "особенно"];
	var nonCyrillicArray = ["more", "already", "very", "may", "need", "no", "also", "more", "of course", "as well", "suddenly", "almost", "immediately", "good", "today", "completely",
							"generally", "more", "together", "for example", "need", "again", "cannot", "especially"];
	*/

	// Must know words
	/*
	var cyrillicArray = ["я", "он", "это", "она", "они", "мы", "который", "то", "что", "свой", "весь", "так", "ты", "все", "всё",
						"вы", "такой", "его", "себя", "один", "как", "сам", "другой", "наш"];
	var nonCyrillicArray = ["I", "he", "this", "she", "they", "we", "which", "that", "what", "one’s own", "entire", "so", "you", "everyone", "all", "you",
							"such", "his", "oneself", "one", "how", "self", "another", "our"];
	*/

	// Tehdään pari muuttuja
	var arrayLength = cyrillicArray.length-1;
	var randomNumber;
	var rNonCyrillic = new Array(4);
	window.rCyrillic;
	window.points = 0;

	// Tulosta pisteet
	setPoints(points);

	print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);

	// Mitä painetaan?
	$("#left_top").mouseup(function() {
		if (rCyrillic == rNonCyrillic[0]) {
			correctAnswer("#left_top");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		} else {
			wrongAnswer("#left_top");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		}
	});
	$("#right_top").mouseup(function() {
		if (rCyrillic == rNonCyrillic[1]) {
			correctAnswer("#right_top");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		} else {
			wrongAnswer("#right_top");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		}
	});
	$("#left_bot").mouseup(function() {
		if (rCyrillic == rNonCyrillic[2]) {
			correctAnswer("#left_bot");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		} else {
			wrongAnswer("#left_bot");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		}
	});
	$("#right_bot").mouseup(function() {
		if (rCyrillic == rNonCyrillic[3]) {
			correctAnswer("#right_bot");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
		} else {
			wrongAnswer("#right_bot");
			setTimeout(function() { print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray); }, 1000);
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

function newRecord(points) {
	$.ajax({
		url: "src/connect?points=" + points,
		type: "POST",
		dataType: "text",
		success: function() { alert("success"); }
	}).done(function(data) {
		alert(data);
	});
};

function setPoints() {
	$("#pointsDiv").text("Points: " + points);
};

function print(arrayLength, rNonCyrillic, cyrilicArray, nonCyrillicArray) {
	rCyrillic = Math.floor(Math.random() * arrayLength);
	// Printtaa kyriilinen
	$("#cyrillicContent").text(cyrilicArray[rCyrillic]);

	// Asetetaan kolme satunnaista lukua taulukkoon rNonCyrillic
	for(var i = 0; i < 3; i++) {
		randomNumber = Math.floor(Math.random() * arrayLength);
		if (uniqueNumber(randomNumber, rNonCyrillic) && randomNumber != rCyrillic) {
			rNonCyrillic[i] = randomNumber;
		} else { i-- };
	}
	// Lisää oikea vastaus
	rNonCyrillic[3] = rCyrillic;
	// Sekoitetaan taulukko
	shuffle(rNonCyrillic)

	// printtaa arvaukset sivulle
	$("#left_top").text(nonCyrillicArray[rNonCyrillic[0]]);
	$("#right_top").text(nonCyrillicArray[rNonCyrillic[1]]);
	$("#left_bot").text(nonCyrillicArray[rNonCyrillic[2]]);
	$("#right_bot").text(nonCyrillicArray[rNonCyrillic[3]]);

};

function correctAnswer(location) {
	$(location).css("background-color", "#7AB55C");
	$(location).animate({"background-color": "#4B77BE"}, 1000);
	console.log(points);
	points++;
	setPoints();
};

function wrongAnswer(location) {
	$(location).css("background-color", "#E74C3C");
	$(location).animate({"background-color": "#4B77BE"}, 1000);
	points = 0;
	setPoints();
};