
var valeur = 1;
var valRad = 1;
function ajoutQuestion() {

	$('#addQuest')
	.append(
		"<div id='val"+valeur+"'><br><input type='text' placeholder='Votre question' id='question"+valeur+"'><br>"
	 	+ "<input type='button' class='btn btn-outline-primary reduit' onclick=\"ajoutRadio('#val"+valeur+"', "+valeur+" );\" value='ajouter une option'>"
	 	+ "<input type='button' class='btn btn-outline-secondary reduit' onclick=\"ajoutCheck('#val"+valeur+"', "+valeur+");\" value='ajouter un choix multiple'>"
	 	+ "<input type='button' class='btn btn-outline-danger reduit' title='supprimer cette question' onclick='suppQuestion(val"+valeur+");'"
	 	+"value='supprimer cette question'><br></div>"
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