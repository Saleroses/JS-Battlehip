let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
	guess = prompt ("Ready? Go! (введи цифру 1-6):");
	if (guess < 1 || guess > 6) {
		alert("Введи правильную цифру!");
	} else {
		guesses = guesses+1;
		if (guess== location1||guess== location2||guess== location3) {
			alert("Есть пробитие!");
			hits = hits+1;
			if (hits == 3) {
				isSunk = true;
				alert ("Ты потопил(а) мой корабль!");
			}
		} else {
			alert("Мимо)!");
		}
	}
}
let stats = "Ты сделал(а) " + guesses + " попыток, " + "точность составила " + (3/guesses);
alert(stats);