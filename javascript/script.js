
var i = 1;

function ajoutQuestion() {

	$('#addQuest').append("<div><input type='text' placeholder='la question' id='question"+i+"'><br>"
	 + "<input type='radio'>oui <br> <input type='radio'>non</div>");

	i++;
}