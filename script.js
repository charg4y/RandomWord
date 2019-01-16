// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
//Substitute your api key here
request.open('GET', 'https://random-word-api.herokuapp.com/word?key=APIKEY&number=1', true);

request.onload = function () {
  //get data from api
  let data = JSON.parse(this.response);
  //log data in console
  console.log(data);
  // set text to data
  document.getElementById("word").innerHTML = data[0];

 }


// Send request
request.send();
