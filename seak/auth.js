

//listen for auth status
auth.onAuthStateChanged(user =>{
    if(user){
        console.log(user.email, 'logged in');
    }else{
        console.log('user logged out');
    }
})

//sign up
const signup = document.querySelector('#sign-up-btn');
    signup.addEventListener('touchend', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('sign-up-pass').value;
    const rptpassword = document.getElementById('repeat-pass').value;

    // create users using the auth function
    console.log(firstname, lastname, email, password, rptpassword);
    auth.createUserWithEmailAndPassword(email, password).then( credentials =>{
        console.log(credentials);
        
        location.href = 'main.html';
        setTimeout(welcomeUser(), 3000);
        signup.reset();
    });
});
function welcomeUser(credentials){
    console.log('welcome ' + credentials.user.email);
}


 const signin = document.querySelector('#sign-in-btn');

    signin.addEventListener('touchend', (e) => {
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

// get data from the front end and save it to the database
/*grab the form and add event listerner
prevent default behavior
refrence the database collection name and use the add method to add 
values as objects */


//document.getElementsByName('user')[0].placeholder='here i am';

//logout method
// const logout = document.querySelector('#logout');
// logout.addEventListener('touchend', (e)=>{
//     e.preventDefault();
//     auth.signOut().then(() =>{
//         console.log('user signed out');
//     })
// })
