//sign up
const signup = document.querySelector('#sign-up-btn');
    signup.addEventListener('touchend', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('sign-up-pass').value;
    const rptpassword = document.getElementById('repeat-pass').value;

    console.log(firstname, lastname, email, password, rptpassword);
    auth.createUserWithEmailAndPassword(email, password).then( credentials =>{
        console.log(credentials);
    });
});

const signin = document.querySelector('#sign-in-btn');

    signin.addEventListener('touchend', (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    //console.log(username,password);
    auth.createUserWithEmailAndPassword(username, password).then( credentials =>{
        console.log(credentials);
        document.getElementById('login-form').hidden = true;
        document.getElementById('login-form').hidden = false;

    });
    
    
})


//document.getElementsByName('user')[0].placeholder='here i am';