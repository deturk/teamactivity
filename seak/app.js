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
            renderUserInfo();

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
let item = document.createElement('ul');

function renderUserInfo() {

    let firstname = document.createElement('div');
    let lastname = document.createElement('div');
    let email = document.createElement('div');
    item.classList.add('light');

    //console.log(userData);
    item.setAttribute('data-id', userData.id);
    firstname.textContent = userData.firstname;
    lastname.textContent = userData.lastname;
    email.textContent = userData.email;


    item.appendChild(firstname);
    item.appendChild(lastname);
    item.appendChild(email);
    userAccount.appendChild(item);


}

//hide and show customer divs
// function customerDivs(){
//     let divs = document.createElement('ul');
//     let addOption = document.createElement('div');
//     let viewOption = document.createElement('div');

//     addOption.textContent = 'Add Customer';
//     viewOption.textContent = 'View Customers';

//     divs.appendChild(addOption);
//     divs.appendChild(viewOption);

//     divs.classList.add('divOptions');


//     customerInfo.appendChild(divs);
//     console.log(divs);

// }
//get customer information
//let customerList = null;

//function to display customer options
let options = document.createElement('ul');
let addOption = document.createElement('div');
let viewOption = document.createElement('div');

function addCustomerOptions(doc) {

    // options.classList.add('light');

    addOption.textContent = 'Add';
    viewOption.textContent = 'View';

    options.appendChild(addOption);
    options.appendChild(viewOption);

    customerInfo.appendChild(options);
}



function getCustomerData() {
    dbase.collection('customers').get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                addCustomerOptions(doc);
            });

        });
}


//display customer information on the frontend
// function showCustomers(){
//     document.body.innerHTML = `
//         <div id="customerList">
//             <form>${customerList.firstname}</form>
//         </div>
//     `
// }



//listen to click event on user details.
const userAccount = document.querySelector('#accountDetails');

userAccount.addEventListener('touchend', (e) => {
    e.preventDefault();

    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
    //renderUserInfo();
});



//call function to get customer info on event
const customerInfo = document.querySelector('#customer');

customerInfo.addEventListener('touchend', (e) => {
    e.preventDefault();
    getCustomerData();
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
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