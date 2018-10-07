var a, i;
var c=0;
for (i=0; i<question.length; i++) {
	a = +prompt(question[i] + "\n" + answer1[0] + "\n" + answer1[1] + "\n" + answer1[2] + "\n" + answer1[3] + "\n" + "(Правильный ответ "+ correctAnswer[i] + ")");
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