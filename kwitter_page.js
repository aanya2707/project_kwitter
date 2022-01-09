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
room_name = localStorage.getItem("room_name");

function Send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like: 0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
      message_tag = "<h4 class='message_h4'>"+ message +"</h4>";
      button_tag = "<button class='btn btn-warning' id="+ firebase_message_id +" value ="+ like +" onclick='updateLike(this.id)'>";
      span_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: "+ like +"</span></button><hr>";

      row = name_tag + message_tag + button_tag + span_tag ;
      document.getElementById("output").innerHTML += row ;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes); 

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}