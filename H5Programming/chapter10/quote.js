/* quote.js */

var quotes = ["I hope life isn’t a joke, because I don’t get it.",
              "There is a light at the end of every tunnel...just pray it’s not a train!",
              "Do you believe in love at first sight or should I walk by again?"];

function postAQuote() {
	var index = Math.floor(Math.random() * quotes.length);
	postMessage(quotes[index]);
}
postAQuote();
// close();
setInterval(postAQuote, 1000);

onmessage = function (event) {
    if (event.data == "end"){
    //     alert("11");    // Uncaught ReferenceError: alert is not defined
        console.info("1111");
        close();
    }
}

