// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBQ6lJszMeOD-Fqt019bMIUtiJijstQndI",
  authDomain: "rps-game-c2176.firebaseapp.com",
  databaseURL: "https://rps-game-c2176.firebaseio.com",
  projectId: "rps-game-c2176",
  storageBucket: "",
  messagingSenderId: "333302173044",
  appId: "1:333302173044:web:b3fed229bf9f534e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();

// Global var
var currentUser;

$("#submit-login").on("click", function (event) {
  event.preventDefault();

  var displayName = $("#entry-displayname").val().trim();
  var email = $("#entry-email").val().trim();
  var password = $("#entry-password").val().trim();
  currentUser = displayName;

  // firebase.auth().createUserWithEmailAndPassword(email.value, password.vaule).then(function(user){
  //   user.updateProfile({displayName:displayName.value});
  // });

  database.ref().push({
    displayName: displayName,
    email: email,
    password: password
  });

  $("#entry-displayname").val("");
  $("#entry-email").val("");
  $("#entry-password").val("");

  window.location = "./gameboard.html";
});




$("#send-message").on("click", function (event) {
  event.preventDefault();
  alert(currentUser);
 
  comment = $("#comment-input").val().trim();
   comment = currentUser + " " + comment;
  
  database.ref().push({
    
    comment: comment,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

  $("#comment-input").val("");
});

database.ref().on("child_added", function (childSnapshot) {
  
  $("#chat-box").append("<div class='well'><span class='member-comment'> " + childSnapshot.val().comment + " </span></div>");

}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});




/*
login page
main screen--
create game
join game
play game
chat
*/








// //  *****ORIGINAL RPS GAME VS COMPUTER*****
// // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
//  var computerChoices = ["r", "p", "s"];

//  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
//  var wins = 0;
//  var losses = 0;
//  var ties = 0;

//  // Create variables that hold references to the places in the HTML where we want to display things.
//  var directionsText = document.getElementById("directions-text");
//  var userChoiceText = document.getElementById("userchoice-text");
//  var computerChoiceText = document.getElementById("computerchoice-text");
//  var winsText = document.getElementById("wins-text");
//  var lossesText = document.getElementById("losses-text");
//  var tiesText = document.getElementById("ties-text");

//  // This function is run whenever the user presses a key.
//  document.onkeyup = function(event) {

//    // Determines which key was pressed.
//    var userGuess = event.key;

//    // Randomly chooses a choice from the options array. This is the Computer's guess.
//    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//    // Reworked our code from last step to use "else if" instead of lots of if statements.

//    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

//      if ((userGuess === "r" && computerGuess === "s") ||
//        (userGuess === "s" && computerGuess === "p") || 
//        (userGuess === "p" && computerGuess === "r")) {
//        wins++;
//      } else if (userGuess === computerGuess) {
//        ties++;
//      } else {
//        losses++;
//      }

//      // Hide the directions
//      directionsText.textContent = "";

//      // Display the user and computer guesses, and wins/losses/ties.
//      userChoiceText.textContent = "You chose: " + userGuess;
//      computerChoiceText.textContent = "The computer chose: " + computerGuess;
//      winsText.textContent = "wins: " + wins;
//      lossesText.textContent = "losses: " + losses;
//      tiesText.textContent = "ties: " + ties;
//    }
//  };