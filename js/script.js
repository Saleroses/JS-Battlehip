


let marryMe = (500000 > 60000);
if (marryMe) {
    console.log('yes')
} else {
    console.log('no')
}


// Цикл №1
firstfor: for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
		break firstfor;
		}
		console.log(size);
    }
}

function showMe () {
    console.log('Показать')
}

showMe ()
showMe ()