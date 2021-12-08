var textInput = document.querySelector("#textinput");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(input){
    return serverURL + "?" + "text=" + input; 
};

function errorHandler(error){  
    console.log("error occured", error);
   alert("Something wrong with the server, try again after some time")
}

function clickHandler(){
   var inputText = textInput.value; //taking input 
//   calling server for processing
   fetch(getTranslation(inputText))
   .then(response => response.json()) 
   .then(json => {
       var translatedOutput = json.contents.translated;  //get the translated output
       outputDiv.innerText = translatedOutput; //show translated output in div
   })
   .catch(errorHandler) //if any error occurs
};



btnTranslate.addEventListener("click", clickHandler)

