
function fixBar(){
var sidebar = document.getElementById("sidebar");
let myElement = document.querySelector("#grid-container");

if(screen.width < "700px"){
   sidebar.className= 'w3-sidebar w3-bar-block w3-black w3-large'; // += ' blueClass'; to keep existing classes
   sidebar.style.width= "30px"; 
   myElement.style.gridTemplateColumns = "30px 1fr";

}
else if (screen.width < "900px") {
   sidebar.className= 'w3-sidebar w3-bar-block w3-black w3-xlarge'; // += ' blueClass'; to keep existing classes
   sidebar.style.width="50px"; 
   myElement.style.gridTemplateColumns = "50px 1fr";
}
}

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
