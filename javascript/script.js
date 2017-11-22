
var i = 1;
var j = 1;
function ajoutQuestion() {

	$('#addQuest').append("<div id='val"+i+"'><input type='text' placeholder='la question' id='question"+i+"'><br>"
	 + "<button class='btn btn-outline-primary' onclick=\"ajoutRadio('#val"+i+"');\">ajouter une option</button>"
	 + "<button class='btn btn-outline-danger' onclick='suppQuestion(val"+i+");'>supprimer cette question</button><br></div><br>");
	
	i++;
	j++;
}

function ajoutRadio(elem){
		$(elem)
		.append('<input type="radio" class="onTouchePas" name="rad'+j+'[]"><input type="text" placeholder="choix de reponse"><br>');
		
	}

function suppQuestion(elem1){
	$(elem1).remove();
}