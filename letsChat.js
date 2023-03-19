
function addUser() {

user_name = document.getElementById("user_name").value;

email = document.getElementById("email").value;

password = document.getElementById("password").value;



localStorage.setItem("user_name", user_name);

localStorage.setItem("email", email);

localStorage.setItem("password", password);

 var nextScreen = "lets_chat_room.html";

 localStorage.setItem("nextScreen", nextScreen);

 window.location = "lets_chat_room.html";
}

