
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
  var database = firebase.database();
  var employeeName;
  var role;
  var startDate;
  var monthWorked;
  var monthRate;
  var totalBill;

  //upon clicking the submit button
  $('#submit').on('click', function(event){
    event.preventDefault();

    //assign input values to variables
    var employeeName = $('#employee-name-input').val().trim();
    var role = $('#role-input').val().trim();
    var startDate = $('#start-date-input').val().trim();
    var monthWorked = $('#month-word-input').val().trim();
    var monthRate = $('#month-rate-input').val().trim();
    var totalBill = $('#total-bill-input').val().trim();

    console.log(employeeName);

    //pushing input to database
    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthWorked: monthWorked,
        monthRate: monthRate,
        totalBill: totalBill,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

    //putting the database into the html
    database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.employeeName);
        console.log(sv.role);
        console.log(sv.startDate);
        console.log(sv.monthWorked);

    //put the input values onto the html
    $('#employee-name').text(sv.employeeName)
    $('#role').text(sv.role);
    $("#start-date").text(sv.startDate);
    $('#month-worked').text(sv.monthWorked);
    $('#month-rate').text(sv.monthRate);
    $('#total-bill').text(sv.totalBill);
    })})
