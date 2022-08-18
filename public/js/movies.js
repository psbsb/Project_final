function getData() {
    var request = new XMLHttpRequest();
    request.open('GET', movie_url, true);
    request.onload = function () { 
        movie_array = JSON.parse(request.responseText); 	
		console.log(movie_array);
        displayBoxes();
		
    };

    request.send();
}

function displayBoxes(){
	var table = document.getElementById("moviesTable");
	
	table.innerHTML = "";
	totalMovies = movie_array.length;
	
	for (var count = 0; count < totalMovies; count++) {
		var thumbnail = movie_array[count].thumb;
        var title = movie_array[count].title;
		var story = movie_array[count].story;

		var cell = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
							<div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showrestaurantComments(this)"></i>\
                            <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count 
							+ '" onClick="showrestaurantDetails(this)">' + title 
							 '</div>\
    </div>'

		//var cell = '<button class="accordion">' + title + '</button><div class="panel"><p><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap"></p><p>'+ story +'</p></div>'
		
		table.insertAdjacentHTML('beforeend', cell);
	}
	
    document.getElementById("parent").textContent = "";
	
	setupAccordion();
	console.log(movie_array)
}
function showrestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    console.log(item);
    /*
    document.getElementById("rating").textContent = restaurant_array[item].rating;
    document.getElementById("cuisine").textContent = restaurant_array[item].cuisine;
    document.getElementById("price").textContent = restaurant_array[item].price;
    document.getElementById("location").textContent = restaurant_array[item].location;*/
	document.getElementById("movietitle").textContent = movie_array[item].title;
	document.getElementById("thumbnail").src = movie_array[item].thumb;
    document.getElementById("story").textContent = movie_array[item].story;

}

function setupAccordion(){
	// setup accordion
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
	}
}