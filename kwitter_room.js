var firebaseConfig = {
      apiKey: "AIzaSyBucmnVJgiIlS8VKuNl0css9Jr2143-R60",
      authDomain: "test-d3e07.firebaseapp.com",
      databaseURL: "https://test-d3e07-default-rtdb.firebaseio.com",
      projectId: "test-d3e07",
      storageBucket: "test-d3e07.appspot.com",
      messagingSenderId: "149711598556",
      appId: "1:149711598556:web:1b2a3b6aae013fb835d519"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("Room name = " + Room_names );
   row =" <div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' > "+ Room_names + "</div><hr> "
   document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value; 

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

 function redirectToRoomName(name){
       console.log(name); 
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }

 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
           window.location = "index.html"; 
 }