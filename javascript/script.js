
var valeur = 1;
var valRad = 1;
function ajoutQuestion() {

	$('#addQuest')
	.append(
		"<div id='val"+valeur+"'><br><input type='text' placeholder='Votre question' id='question"+valeur+"'><br>"
	 	+ "<button class='btn btn-outline-primary' onclick=\"ajoutRadio('#val"+valeur+"', "+valeur+");\">ajouter une option</button>"
	 	+ "<button class='btn btn-outline-secondary' onclick=\"ajoutCheck('#val"+valeur+"', "+valeur+");\">ajouter un choix multiple</button>"
	 	+ "<button class='btn btn-outline-danger' title='supprimer cette question' onclick='suppQuestion(val"+valeur+");'>"
	 	+"supprimer cette question</button><br></div>"
	 );
	
	valeur++;

}

function ajoutRadio(elem, radId){
		$(elem)
		.append(
			'<div id="option'+valRad+'"><input type="radio" class="onTouchePas" name="rad'+radId+'">'
			+ '<input type="text" placeholder="choix de reponse">'
			+ '<button class="btn-danger" title="supprimer cette option" onclick="suppOption(option'+valRad+');">'
			+'supprimer l\'option</button><br></div>'
			);

		valRad++;
}

function ajoutCheck(elem, radId){
		$(elem)
		.append(
			'<div id="option'+valRad+'"><input type="checkbox" class="onTouchePas" name="rad'+radId+'">'
			+ '<input type="text" placeholder="choix de reponse">'
			+ '<button class="btn-danger" title="supprimer cette option" onclick="suppOption(option'+valRad+');">'
			+'supprimer l\'option</button><br></div>'
			);

		valRad++;
}

function suppQuestion(elem1){
	$(elem1).remove();
}

function suppOption(elem2){
	$(elem2).remove();
}