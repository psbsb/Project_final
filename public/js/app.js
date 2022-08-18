var movie_url = "/movies";
var movie_array = []; // This creates an empty movie array
var movieCount = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "Now Showing";
var currentIndex=0;

var translate_url = new URL(" https://cors-anywhere.herokuapp.com/https://vdnq9zkxe4.execute-api.us-east-1.amazonaws.com/translate/translate")
var newText ="";