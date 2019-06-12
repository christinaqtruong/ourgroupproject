// html format
//  #employee-name
//  #role
//  #start-date
//  #month-worked
//  #month-rate
//  #total-bill

// if inputs
//  #employee-name-input
//  #role-input
//  #start-date-input
//  #month-worked-input
//  #month-rate-input
//  #total-bill-input


//.push({})
// firebase.database.ServerValue.TIMESTAMP

// databse.ref().on("child_added")

var firebaseConfig = {
    apiKey: "AIzaSyD0S5YDafFPM9tQ0b3BlTMtF7L8FJFlm7Q",
    authDomain: "markb-project1.firebaseapp.com",
    databaseURL: "https://markb-project1.firebaseio.com",
    projectId: "markb-project1",
    storageBucket: "markb-project1.appspot.com",
    messagingSenderId: "164213705544",
    appId: "1:164213705544:web:eb78c43664f1ccb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  var database = firebase.database();

  var employeeName;
  var role;
  var startDate;
  var monthsWorked;
  var monthlyRate;
  var totalBilled;


  $('<tr>').append({
      $('<td>').text(employeeName),
      $('<td>').text(role),
      $('<td>').text(startDate),
      $('<td>').text(monthsWorked),
      $('<td>').text(employeeName)
  })
