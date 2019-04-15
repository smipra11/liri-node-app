require("dotenv").config();
var keys = require("./keys.js");

var axios = require("axios")
var fs = require("fs")
var moment = require('moment');
var inquirer = require("inquirer");
//function moviewinfo(){
var Spotify = require('node-spotify-api');

var command = process.argv[2]
var parameter = process.argv.slice(3).join(" ");

switch (command) {
  case "movie":
    movie(parameter);
    break;

  case "spotifythis":
    spotifythis(parameter);
    break;

  case "concert":
    concert(parameter);
    break;

  case "dowhat":
    dowhat();
    break;
}

function movie(parameter) {
  var search;
  if(parameter === undefined){
  search = "Mr.Nobody"
  }
  else{
    search = parameter
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

  

  axios.get(queryUrl).then(

    function (response) {
      console.log("=================================================================");
      console.log("Title" + " " + response.data.Title)
      console.log("Year " + " " + response.data.Year)
      console.log("IMDBRating " + " " + response.data.imdbRating)
      console.log("Country " + " " + response.data.Country)
      console.log("Language " + " " + response.data.Language)
      console.log("Plot " + " " + response.data.Plot)
      console.log("Actors " + " " + response.data.Actors)
      console.log("====================================================================")


    });
}



function concert(parameter){

  var queryUrl = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp"

  axios.get(queryUrl).then(

    function (response) {
      console.log("=================================================================");
      var details = response.data
      for (i = 0; i < details.length; i++) {
        console.log(details[i].venue);
        console.log(details[1].datetime)
      }


    });
}




function spotifythis(parameter) {
  var spotify = new Spotify(keys.spotify);
  var search;

  if(parameter === undefined){
    search = "Ace of Base The Sign";
    }
    else{
      search = parameter
    }
  
  spotify.search({ type: 'track', query: search }, function (err, response) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    for (i = 0; i < 5; i++) {
      var trackdetail = response.tracks.items[i]
      console.log("song: " + trackdetail.name)
      console.log("Artist name:  " + trackdetail.artists[0].name);
      console.log("Album Name: " + trackdetail.album.name)
      console.log("URL  clear" + trackdetail.external_urls.spotify)
    }
  });

}
function dowhat() {

  fs.readFile("random.txt", "utf8", function (error, data) {

    if (error) {
      return console.log(error);
    }

    // We will then print the contentscd.. of data
    var dataarr = data.split(",");
   //for(i=0;i<dataarr.length;i++){
      //var  songcheck = dataarr[1];
      var choice = dataarr[0]
      
    if (dataarr[0] === "spotify") {
      var songcheck = dataarr[1].trim().slice(1, -1);
      //command === spotifythis
    console.log(songcheck)
      spotifythis(songcheck)
      }
     // console.log(data);
    //}
    });
  
}
