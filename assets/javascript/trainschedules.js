// Initialize Firebase
var config = {
    apiKey: "AIzaSyABtimqilpzWVqmN0fVpUAigtDbZ-NdpBM",
    authDomain: "train-schedules-be8b8.firebaseapp.com",
    databaseURL: "https://train-schedules-be8b8.firebaseio.com",
    projectId: "train-schedules-be8b8",
    storageBucket: "",
    messagingSenderId: "1048961202405"
};

firebase.initializeApp(config);
var trainData = firebase.database();

// On-Click, add a new Train Schedule
$("#add-train-btn").on("click", function() {
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  trainData.ref().push(newTrain);
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

// Print Schedule
trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var trainFirstTrain = childSnapshot.val().firstTrain;

  console.log(trainName);

// Clear form
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

            
$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td></td>");
      });
