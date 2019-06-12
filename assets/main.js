
=======

//Mark's firebase
>>>>>>> master
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

  //initial variables
  var employeeName;
  var role;
  var startDate;
  var monthWorked;
  var monthRate;
  var totalBill;

  //upon clicking the submit button
  $('#submit').on('click', function(){

    //assign input values to variables
    var employeeName = $('#employee-name-input').val().trim();
    var role = $('#role-input').val().trim();
    var startDate = $('#start-date-input').val().trim();
    var monthWorked = $('#month-word-input').val().trim();
    var monthRate = $('#month-rate-input').val().trim();
    var totalBill = $('#total-bill-input').val().trim();

    //put the input values onto the html
    $('#employee-name').text(employeeName)
    $('#role').text(role);
    $("#start-date").text(startDate);
    $('#month-worked').text(monthWorked);
    $('#month-rate').text(monthRate);
    $('#total-bill').text(totalBill);
    })
