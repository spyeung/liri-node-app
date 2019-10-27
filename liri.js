require("dotenv").config();

const axios = require('axios');
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var searchTerm = process.argv.splice(3).join(" ");

// RunCommand(command, searchTerm);

// RunCommand("spotify-this-song", "My heart will go on");
// RunCommand("movie-this", "Land Before Time");
RunCommand("concert-this", "");
// RunCommand("do-what-it-says");

function RunCommand(command, searchTerm) {
    if (command === "spotify-this-song") {
        spotify_this_song(searchTerm)
    }
    else if (command === "concert-this") {
        concert_this(searchTerm)
    }
    else if (command === "movie-this") {
        movie_this(searchTerm)
    }
    else if (command === "do-what-it-says") {
        do_what_it_says()
    } else {
        console.log("Please enter a valid command")
    }
}

function concert_this(artist) {
    if(!artist){
        artist = "Maroon 5"
    }
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response){

            for(var i = 0; i < response.data.length; i++){

                console.log(response.data[i].datetime)
                console.log(response.data[i].lineup.join(", "))
                console.log(response.data[i].venue.name)

                console.log("\n")
            }
        })
}

function spotify_this_song(song) {
    console.log("Searching for", song)
}

function movie_this(movie) {
    console.log("Searching for", movie)

}

function do_what_it_says() {
    console.log("Do what it says")
}