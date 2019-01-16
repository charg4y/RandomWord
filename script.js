// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://random-word-api.herokuapp.com/word?key=ZY5D1BPH&number=1', true);

request.onload = function () {
  let data = JSON.parse(this.response);
  console.log(data);

  document.getElementById("word").innerHTML = data[0];

 }


// Send request
request.send();
