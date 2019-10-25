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
    
});

const signin = document.querySelector('#sign-in-btn');

    signin.addEventListener('touchend', (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    console.log(username,password);
})


//document.getElementsByName('user')[0].placeholder='here i am';