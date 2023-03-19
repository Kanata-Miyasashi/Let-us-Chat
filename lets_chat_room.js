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
  

    var name = localStorage.getItem("user_name");

    var email = localStorage.getItem("email");

    var password = localStorage.getItem("password");

    var nextScreen = "login.html";

    localStorage.setItem("nextScreen", nextScreen);

    function addRoom()
    {
    
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    
          localStorage.setItem("room_name", room_name);
    
          window.location = "lets_chat_page.html";
    }    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function displayName() {

      document.getElementById("welcomeMessage").innerHTML = "Welcome, " + name;
}

function logout() {
window.location = "index.html";
}

function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";

}

