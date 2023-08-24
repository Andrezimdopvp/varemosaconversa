
const firebaseConfig = {
        apiKey: "AIzaSyAttZQEQIxBtNblvseBjIMDpakXxl4WUtU",
        authDomain: "vamosconversar-8c7fe.firebaseapp.com",
        databaseURL: "https://vamosconversar-8c7fe-default-rtdb.firebaseio.com",
        projectId: "vamosconversar-8c7fe",
        storageBucket: "vamosconversar-8c7fe.appspot.com",
        messagingSenderId: "415358156359",
        appId: "1:415358156359:web:06f5f06a58b781eef6fb62"
      };
        
            firebase.initializeApp(firebaseConfig);

        function sair(){
                localStorage.removeItem("Usuário");
                window.location = "index.html";
        }
var nome = localStorage.getItem("Usuário");
document.getElementById("user").innerHTML = "Bem Vindo(a) " + nome;

function addRoom(){
        var nomsala = document.getElementById("sala").value;
        localStorage.setItem("room", nomsala);
        firebase.database().ref("/").child(nomsala).update({
                purpose:"Criamos Uma Pasta!"
        });

        window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("nomesDasSalas").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("nomesDasSalas").innerHTML += row;
     });
   });
 
 }
 
 getData();

 function redirectToRoomName(name)
 {
        console.log(name);
        localStorage.setItem("room", name);
         window.location = "kwitterPage.html";
 }