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