import{dbase,auth} from './firebase.js';

//listen for auth status
auth.onAuthStateChanged(user =>{
    if(user){
        console.log(user.email, 'logged in');
    }else{
        console.log('user logged out');
    }
})

//sign up form
const signup = document.querySelector('#sign-up-btn');
    signup.addEventListener('click', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('sign-up-pass').value;
    const rptpassword = document.getElementById('repeat-pass').value;

    // grab data from  the form and save to databse
    dbase.collection('users').add({
        firstname : firstname,
        lastname: lastname,
        email: email

    });
    //console.log(firstname, lastname, email, password, rptpassword);

    //create user with email and password --automatically log in users
    auth.createUserWithEmailAndPassword(email, password).then( credentials =>{
        console.log(credentials);
        
        location.href = 'main.html';
        setTimeout(welcomeUser(), 3000);
        signup.reset();
    });
});

//welcome the user once authenticated
function welcomeUser(credentials){
    console.log('welcome ' + credentials.user.email);
}


//sign in form
 const signin = document.querySelector('#sign-in-btn');

    signin.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    
    //sign a user into the application
    auth.signInWithEmailAndPassword(username, password).then( credentials =>{
        //console.log(username,password);
        console.log(credentials.user);
        
        //hide the login form and reset it
        document.getElementById('login-form').hidden = true;
        document.getElementById('login-form').hidden = false;
    
   //setTimeout(welcomeUser(), 10000);
   welcomeUser(credentials);
    location.href = 'main.html';
    
    //welcomeUser();
    signin.reset();

    });
    
    
})

//get data from the firestore database and render it to the frontend
// dbase.collection('users').get().then((snapshot) =>{
//     console.log(snapshot.docs);
// });



