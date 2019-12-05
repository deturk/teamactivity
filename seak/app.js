//get data from firestore
import { auth, dbase } from './firebase.js';


//create a function to get user info
let userData = null;

function getUserInfo(userId) {
    dbase.collection('users').where("email", "==", userId)
        .get().then((snapshot) => {
            console.log(snapshot.docs[0].id);
            //console.log(snapshot);

            userData = snapshot.docs[0].data();

        });
}



//console.log(docs.email);

//const userInfo = document.querySelector('#userinfo');

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email, 'logged in');
        getUserInfo(user.email);


    } else {
        console.log('user logged out');
    }
});

//get document from the database and render it in the frontend
function renderUserInfo() {
    let item = document.createElement('li');
    let firstname = document.createElement('div');
    let lastname = document.createElement('div');
    let email = document.createElement('div');
    item.classList.add('light');

    //console.log(userData);
    item.setAttribute('data-id', userData.id);
    firstname.textContent = userData.firstname;
    lastname.textContent = userData.lastname;
    email.textContent = userData.email;


    item.appendChild(firstname) 
    item.appendChild(lastname);
    item.appendChild(email);
    userAccount.appendChild(item);


}

//get customer information
let customerList = null;
function getCustomerData(){
    dbase.collection('customers').get().then((snapshot) =>{
        snapshot.docs.forEach(doc => {
            
            customerList = doc.data();
            console.log(customerList );
        });
    })
}


//display customer on the frontend
function showCustomers(){
    document.body.innerHTML = `
        <div id="customerList">
            <form>${customerList.firstname}</form>
        </div>
    `
}



//listen to click event on user details.
const userAccount = document.querySelector('#accountDetails');

userAccount.addEventListener('touchend', (e) => {
    e.preventDefault();

    if(item.style.display === "none"){
        item.style.display = "block";
    }else {item.style.display = "none";
    }
    //renderUserInfo();
});


const customerInfo = document.querySelector('#customer');
customerInfo.addEventListener('touchend', (e) =>{
    getCustomerData();
});


//logout alert
const logout = document.querySelector('#logout');
logout.addEventListener('touchend', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
        location.href = 'login.html';
    });
});


//append buttons to customer item
const customerInfo = document.querySelector('#customer');

customerOptions.addEventListener('touchend', (e) => {
    e.preventDefault();
    addCustomerOptions();
});

let options = createElement('ul');

function addCustomerOptions() {
    let addOption = document.createElement('div');
    let viewOption = document.createElement('div');

    options.appendChild(addOption);
    options.appendChild(viewOption);

    customerInfo.appendChild(options);
}
