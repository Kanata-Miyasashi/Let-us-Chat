var firebaseConfig = {
  apiKey: "AIzaSyCq8LkvdabOTRLYFUkESU_sJrFtrDygGHk",
  authDomain: "kwitter-6c5a5.firebaseapp.com",
  databaseURL: "https://kwitter-6c5a5-default-rtdb.firebaseio.com",
  projectId: "kwitter-6c5a5",
  storageBucket: "kwitter-6c5a5.appspot.com",
  messagingSenderId: "959856072563",
  appId: "1:959856072563:web:fc5b128abbeeb1ec479706",
  measurementId: "G-LFGT5KQXPT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() 
{

  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });

  document.getElementById("msg").value = "";
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == 13){
		send();
	}
}

function send() 
{

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
  window.location = "index.html";
  }