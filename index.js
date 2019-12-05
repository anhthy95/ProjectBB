
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;


  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}


function logout(){
  firebase.auth().signOut();
}

var phase2 = false;

function openModal() {
  var newEmail = document.getElementById("nEmail");
  var newPassword = document.getElementById("psw");
  var confirmNewPassword = document.getElementById("cpsw");
  var invalid = document.getElementById("invalid-email");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");    
  var match = document.getElementById("match");
  var newUsername = document.getElementById("nUsername");

  document.getElementById("invalid-email").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("letter").style.display = "none";
  document.getElementById("capital").style.display = "none";
  document.getElementById("number").style.display = "none";
  document.getElementById("length").style.display = "none";
  document.getElementById("match").style.display = "none";
  document.getElementById("empty").style.dispaly = "none";
// When the user starts to type something inside the password field
  newUsername.onfocusout = function(){
    if(newUsername.value != ""){
      document.getElementById("empty").style.display = "none";
      empty.classList.remove("invalid");
      empty.classList.add("valid");
    }
    else{
      document.getElementById("empty").style.display = "block";
      empty.classList.remove("valid");
      empty.classList.add("invalid");
    }
  }
  newEmail.onfocusout = function(){
    var atSymbol = /[@]/g;
    var com = /\b.com\b/g;
    if(newEmail.value.match(atSymbol) && newEmail.value.match(com)){
      document.getElementById("invalid-email").style.display = "none";
      invalid.classList.remove("invalid");
      invalid.classList.add("valid");
    }
    else{
      document.getElementById("invalid-email").style.display = "block";
      invalid.classList.remove("valid");
      invalid.classList.add("invalid");
    }
  }

  newPassword.onkeyup = function() {
      var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /\d/g;
      var minLength = 8; 
      if(newPassword.value.match(lowerCaseLetters)) {
        document.getElementById("letter").style.display = "none";     
          letter.classList.remove("invalid"); 
          letter.classList.add("valid"); 
      } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("letter").style.display = "block";
          letter.classList.remove("valid"); 
          letter.classList.add("invalid"); 
      }

      // Validate capital letters        
      if(newPassword.value.match(upperCaseLetters)) { 
        document.getElementById("capital").style.display = "none";
          capital.classList.remove("invalid"); 
          capital.classList.add("valid");
      } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("capital").style.display = "block";
          capital.classList.remove("valid");
          capital.classList.add("invalid");
      }

      // Validate numbers        
      if(newPassword.value.match(numbers)) { 
        document.getElementById("number").style.display = "none";
          number.classList.remove("invalid"); 
          number.classList.add("valid"); 
      } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("number").style.display = "block";
          number.classList.remove("valid"); 
          number.classList.add("invalid");
      }

      // Validate length
      if(newPassword.value.length >= minLength) {
        document.getElementById("length").style.display = "none";
          length.classList.remove("invalid");
          length.classList.add("valid");
      } else {
        document.getElementById("message").style.display = "block";
        document.getElementById("length").style.display = "block";
          length.classList.remove("valid");
          length.classList.add("invalid");
      }
      if(phase2 == true){
        var passEqualsConfPass = (newPassword.value == confirmNewPassword.value);
              if(passEqualsConfPass) { 
                document.getElementById("message").style.display = "none";
                document.getElementById("match").style.display = "none";
                  match.classList.remove("invalid"); 
                  match.classList.add("valid"); 
              } else {
                document.getElementById("message").style.display = "block";
                document.getElementById("match").style.display = "block";
                  match.classList.remove("valid"); 
                  match.classList.add("invalid"); 
              }        
              enableButton(letter, capital, number, length, match, invalid);
      }
  }
  confirmNewPassword.onkeyup = function() {
              // Validate password and confirmPassword
              phase2 = true;
              var passEqualsConfPass = (newPassword.value == confirmNewPassword.value);
              if(passEqualsConfPass) { 
                document.getElementById("message").style.display = "none";
                document.getElementById("match").style.display = "none";
                  match.classList.remove("invalid"); 
                  match.classList.add("valid"); 
              } else {
                document.getElementById("message").style.display = "block";
                document.getElementById("match").style.display = "block";
                  match.classList.remove("valid"); 
                  match.classList.add("invalid"); 
              }        
              enableButton(letter, capital, number, length, match, invalid);
  }
}


function enableButton(letter, capital, number, length, match, invalid) {
  var button = document.getElementById('submit_sign_up_button');
  var condition = (letter.classList.contains('valid') &&
                   capital.classList.contains('valid') &&
                   number.classList.contains('valid') &&
                   length.classList.contains('valid') &&
                   match.classList.contains('valid') &&
                   invalid.classList.contains('valid'));
  if(condition) {       
          button.disabled = false;
      }
  else{
      button.disabled = true;
  }        
  }    

function submitInfo(){
  //sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
    e.preventDefault();

//get user info

const email = signupForm['nEmail'].value;
const password = signupForm['psw'].value;

//sign up the user in the database

auth.createUserWithEmailAndPassword(email, password).then(cred =>{

    
    signupForm.reset(); 
    

});

})
}