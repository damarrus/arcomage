function Card(card_id){

	function f() {
		var response = $.ajax({
			type: "POST",
			url: "test.php",
			data: 'action=card',
			async: false,
			dataType:"json"
		}).responseText;
		var values = $.parseJSON(response);
		return values;
	}

	return f();
}

function getcard(card_id){
	var response = $.ajax({
		type: "POST",
		url: "test.php",
		data: 'action=cardbyid&card_id='+card_id,
		async: false,
		dataType:"json"
	}).responseText;
	var values = $.parseJSON(response);
	return values;
}

function getNewCard(){
	var response = $.ajax({
		type: "POST",
		url: "test.php",
		data: 'action=card',
		async: false,
		dataType:"json"
	}).responseText;
	var values = $.parseJSON(response);
	return values;
}