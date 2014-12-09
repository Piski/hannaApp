$(document).ready(function() {
	// http://blogs.transparent.com/russian/100-must-know-russian-words-and-how-to-learn-them/
	
	// Letters
	
	/*
	var cyrillicArray = ["A", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "O",
						"П", "Р", "C", "T", "Y", "Ф", "X", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"];
	var nonCyrillicArray = ["A", "B", "V", "G", "D", "YE", "YO", "ZH", "Z", "I", "J", "K", "L", "M", "N", "O",
							"P", "R", "S", "T", "U", "F", "H", "TS", "CH", "SH", "SHCH", "IH", "E", "YU", "YA"];
	*/
	
	// Nouns
	/*
	var cyrilicArray = ["год", "человек", "время", "дело", "жизнь", "день", "рука", "раз", "работа", "слово", "место", "лицо", "друг", "глаз", "вопрос", "дом",
						"сторона", "страна", "мир", "случай", "голова", "ребенок", "сила", "конец", "вид"];
	var nonCyrilicArray = ["year", "person", "time", "affair", "life", "day", "arm", "once", "work", "word", "place", "face", "friend", "eye", "question", "house",
							"side", "country", "world", "instance", "head", "child", "force", "end", "view"];
	*/

	// Verbs
	
	var cyrillicArray = ["быть", "бить", "мочь", "сказать", "говорить", "знать", "стать", "хотеть", "идти", "иметь", "видеть", "думать", "сделать", "жить", "делать", "смотреть",
						"работать", "понять", "пойти", "спросить", "дать", "понимать", "получить", "сидеть", "оказаться", "взять"];
	var nonCyrillicArray = ["to be", "to hit", "to be able", "to say", "to speak", "to know", "to become", "to want", "to go", "to have", "to see", "to think", "to make", "to live", "to do", "to watch",
							"to work", "to understand", "to go", "to ask", "to give", "to understand", "to receive", "to sit", "to happen", "to take"];
	

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
	var correct;
	var sec = 10;
	window.rCyrillic;
	window.points = 0;
	window.record = 0;

	// Tulosta pisteet
	setPoints(points);

	// Asetetaan ajastin + printtaa kirjaimet + katsoo missä kohdassa oikea vastaus
	var timer = setInterval(function() {
		if (sec == 10) {
			$("#time").text("00:" + sec);
			print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
			correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
		}
		else {
			$("#time").text("00:0" + sec);
		}
		if (sec == 0) {
				sec = 11;
		}
		sec--;
			console.log(sec);
	}, 1000);

	// Mitä painetaan?
	$("#left_top").mouseup(function() {
		if (rCyrillic == rNonCyrillic[0]) {
			clearInterval(timer);
			correctAnswer("#left_top");
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);

			}, 1000 ); }, 1000);
		} else {
			clearInterval(timer);
			wrongAnswer("#left_top", correct);
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);
			}, 1000 ); }, 2000);
		}
	});
	$("#right_top").mouseup(function() {
		if (rCyrillic == rNonCyrillic[1]) {
			clearInterval(timer);
			correctAnswer("#right_top");
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);

			}, 1000 ); }, 1000);
		} else {
			clearInterval(timer);
			wrongAnswer("#right_top", correct);
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);
			}, 1000 ); }, 2000);
		}
	});
	$("#left_bot").mouseup(function() {
		if (rCyrillic == rNonCyrillic[2]) {
			clearInterval(timer);
			correctAnswer("#left_bot");
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);

			}, 1000 ); }, 1000);
		} else {
			clearInterval(timer);
			wrongAnswer("#left_bot", correct);
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);
			}, 1000 ); }, 2000);
		}
	});
	$("#right_bot").mouseup(function() {
		if (rCyrillic == rNonCyrillic[3]) {
			clearInterval(timer);
			correctAnswer("#right_bot");
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);

			}, 1000 ); }, 1000);
		} else {
			clearInterval(timer);
			wrongAnswer("#right_bot", correct);
			sec = 10;
			setTimeout(function() { timer = setInterval(function() {
				if (sec == 10) {
					$("#time").text("00:" + sec);
					print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
					correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
				}
				else {
					$("#time").text("00:0" + sec);
				}
				if (sec == 0) {
					sec = 11;
				}
				sec--;
				console.log(sec);
			}, 1000 ); }, 2000);
		}
	});

});

// tarkistaa onko uusi ennätys. Jos uusi ennätys niin, asettaa nykyisen pistemäärän ennätykseksi.
function isRecord() {
	getRecord();
	if (points > record) {
		setRecord(points);
	};
};

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

// lue ennätys
function getRecord() {
	$.ajax({
		url: "src/getRecord.php",
		type: "GET",
		dataType: "text",
		success: function() { console.log("getting the record was succesful"); }
	}).done(function(data) {;
		record = parseInt(data);
	});
};

// aseta uus ennätys
function setRecord() {
	$.ajax({
		url: "src/setRecord.php?record=" + points,
		type: "POST",
		dataType: "text",
		success: function() { console.log("new record set"); }
	}).done(function(data) {
		// eipä oikein tarvi tehdä mitään.
	});
};

// kirjoita pistemäärä sivulle. Yksinkertaistamiseksi laitoin isRecord() myös tänne. Tällä tavalla, joka kerta kun pistemäärä kasvaa se myös tarkistaa, onko ennätys
function setPoints() {
	$("#pointsDiv").text("Points: " + points);
	isRecord();
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

function wrongAnswer(location, loc_correct) {
	$(location).css("background-color", "#E74C3C");
	$(location).animate({"background-color": "#4B77BE"}, 2000);

	setTimeout(function() {
	$(loc_correct).css("background-color", "#7AB55C");
	$(loc_correct).animate({"background-color": "#4B77BE"}, 1000);
	}, 1000);

	points = 0;
	setPoints();
};

function correctAnswerCheck(rCyrillic, rNonCyrillic) {

	if (rCyrillic == rNonCyrillic[0]) {
		return "#left_top";
	}
	else if (rCyrillic == rNonCyrillic[1]) {
		return "#right_top";
	}
	else if (rCyrillic == rNonCyrillic[2]) {
		return "#left_bot";
	}
	else {
		return "#right_bot";
	}
};

function q() {
		if (sec == 10) {
			$("#time").text("00:" + sec);
			print(arrayLength, rNonCyrillic, cyrillicArray, nonCyrillicArray);
			correct = correctAnswerCheck(rCyrillic, rNonCyrillic);
		}
		else {
			$("#time").text("00:0" + sec);
		}
		if (sec == 0) {
				sec = 11;
				points = 0;
		}
		sec--;
			console.log(sec);
}