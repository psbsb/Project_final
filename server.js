var express = require("express"); //using the express web framework
const port = 3000;

var movieController = require('./controllers/movieController'); // set movieController to the movieController class
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/movies').get(movieController.getAllMovies); // activate the getAllMovies method if the route is GET(method) /movies

app.route('/translate').get(movieController.getAllMovies);

//app.listen(port, () => console.log('Example app listening on port ${port}!'))
app.listen(8080,"127.0.0.1");
console.log("web server running @ http://127.0.0.1:8080"); // output to console 

