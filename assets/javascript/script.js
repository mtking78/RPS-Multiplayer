// Only two users can play at the same time.
// Both players pick either rock, paper or scissors. 
// After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
// The game will track each player's wins and losses.
// Throw some chat functionality in there!
document.onload(alert("hi!"));

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAjwK8EqfmaXa_pVTe3zq-f7IR1cFqhVtQ",
    authDomain: "rps-multiplayer-e9cbe.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-e9cbe.firebaseio.com",
    projectId: "rps-multiplayer-e9cbe",
    storageBucket: "",
    messagingSenderId: "57376759072"
  };
  firebase.initializeApp(config);
// Assign the reference to the database to a variable named 'database'
var database = firebase.database();
// Initial Values


// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
//database.ref().on("value", function(snapshot) {});