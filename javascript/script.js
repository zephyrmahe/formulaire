
var i = 1;
var j = 1;
function ajoutQuestion() {

	$('#addQuest').append("<div id='val"+i+"'><input type='text' placeholder='la question' id='question"+i+"'><br>"
	 + "<button onclick=\"ajoutRadio('#val"+i+"');\">ajouter une option</button><br></div>");
	

	i++;
}

function ajoutRadio(elem){
		$(elem).append('<input type="radio" name="rad'+j+'[]"><br>');
		j++;
	}

