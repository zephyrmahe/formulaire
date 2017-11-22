
var i = 1;
var j = 1;
var k = 1;
function ajoutQuestion() {

	$('#addQuest').append("<div id='val"+i+"'><input type='text' placeholder='Votre question' id='question"+i+"'><br>"
	 + "<button class='btn btn-outline-primary' onclick=\"ajoutRadio('#val"+i+"');\">ajouter une option</button>"
	 + "<button class='btn btn-outline-danger' onclick='suppQuestion(val"+i+");'>supprimer cette question</button><br></div><br>");
	
	i++;
	j++;
}

function ajoutRadio(elem){
		$(elem)
		.append(
			'<span id="option'+k+'"><input type="radio" class="onTouchePas" name="rad'+j+'"><input type="text" placeholder="choix de reponse"><button class="btn btn-danger" onclick="suppOption(option'+k+');">x</button><br></span>'
			);
		k++;
	}

function suppQuestion(elem1){
	$(elem1).remove();
}
function suppOption(elem2){
	$(elem2).remove();
}