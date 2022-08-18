function translatetext(){
	var translation = new XMLHttpRequest();

    translation.open("POST",translate_url, true);
    translation.setRequestHeader("Content-type", "application/json");
    var trans = document.getElementById("txtName").value;
	var payload={"text": trans};
	translation.send(JSON.stringify(payload));
    console.log(payload)
    translation.onload = function () {
        translatedtext = JSON.parse(translation.responseText);
        console.log(translatedtext);
        alert(translatedtext)
    };    
} 

