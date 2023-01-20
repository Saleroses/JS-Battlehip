let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1+1;
let location3 = location2+1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
	guess = prompt ("Ready? Go! (введи цифру 0-6):");
	if (guess < 0 || guess > 6 || guess == null) {
		alert("Введи правильную цифру!");
	} else {
		guesses = guesses+1;
		if (guess== location1||guess== location2||guess== location3) {
			alert("Есть пробитие!");
			hits = hits+1;
			if (guess == location1) {
				location1 = null;
			}
			if (guess == location2) {
				location2 = null;
			}
			if (guess == location3) {
				location3 = null;
			}
				if (hits == 3) {
					isSunk = true;
					alert ("Ты потопил(а) мой корабль!");
				}
		} else {
			alert("Мимо)!");
		}
	}
}
let stats = "Ты сделал(а) " + guesses + " попыток, " + "точность составила " + (3/guesses*100) + "%";
alert(stats);