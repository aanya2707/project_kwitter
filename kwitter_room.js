const firebaseConfig = {
      apiKey: "AIzaSyAp9L3fRwTFUtxzTEac_E7PYVb8rmMO4L4",
      authDomain: "activity-35511.firebaseapp.com",
      databaseURL: "https://activity-35511-default-rtdb.firebaseio.com",
      projectId: "activity-35511",
      storageBucket: "activity-35511.appspot.com",
      messagingSenderId: "5605442125",
      appId: "1:5605442125:web:5092c9320d12528a8a9204"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!"; 

function addRoom(){
      room_name = document.getElementById("add_room").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
      row="<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name",name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
