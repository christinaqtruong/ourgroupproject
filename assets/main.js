

//Mark's firebase
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

  var database = firebase.database();

  //upon clicking the submit button
  $('#submit').on('click', function(event){
    event.preventDefault();

    //assign input values to variables
    var employeeName =  $('#employee-name-input').val();
    var role =          $('#role-input').val();
    var startDate =     $('#start-date-input').val();
    // var monthWorked = $('#month-word-input').val();
    var monthRate =     $('#month-rate-input').val();
    // var totalBill = $('#total-bill-input').val();

    console.log(employeeName);

    //pushing input to database
    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthRate: monthRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

    //putting the database into the html
  })
    database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.employeeName);
        console.log(sv.role);
        console.log(sv.startDate);
        // console.log(sv.monthWorked);
        var tr = $('#table-heading');
        var newID = 0;

        tr.append(
            '<tr>' + 
            '<td id="' + newID + '">' + sv.employeeName + '</td>' + 
            '<td>' + sv.role + '</td>' + 
            '<td>' + sv.startDate + '</td>' + 
            '<td>' + sv.monthRate + '</td>' +
            '<tr>'
        )
        newID++;
    })