var a, i;
var c=0;
for (i=0; i<question.length; i++) {
	answerI(i);
	a = +prompt(question[i] + "\n" + answer[0] + "\n" + answer[1] + "\n" + answer[2] + "\n" + answer[3] + "\n" + "(Правильный ответ "+ correctAnswer[i] + ")");
	if (a != correctAnswer[i]) {
		alert ("Вы проиграли!!!");
		break;
	}
	else {
		alert ("Правильно!");
		c++;
	}
}
alert("Вы ответили правильно на " + c + " из " + question.length);

function answerI() {
	switch(i) {
		case 0: 
			answer = answer1;
			break;
		case 1:
			answer = answer2;
			break;
		case 2:
			answer = answer3;
			break;
		case 3:
			answer = answer4;
			break;
		case 4:
			answer = answer5;
			break;
	}
}