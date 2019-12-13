//get data from firestore
import { auth, dbase } from './firebase.js';

const userAccount = document.querySelector('#accountDetails');

const form = document.querySelector('#addCustomerForm');
const buildCustomerView = document.querySelector('#customersView');


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



dbase.collection('customers')
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            viewCustomers(doc);
            console.log(doc.data());
        });
    });


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
item.style.display == 'none';

//listen to click event on user details.
userAccount.addEventListener('touchend', (e) => {
    e.preventDefault();

    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
    renderUserInfo();
});


// function getCustomerData() {
//     dbase.collection('customers').get()
//         .then((snapshot) => {
//             snapshot.docs.forEach(doc => {
//                 addCustomerOptions(doc);
//             });

//         });
// }

//call function to get customer info on event
const customerInfo = document.querySelector('.addCustomer');
const mainPage = document.querySelector('.jumbotron');
const hideHeader = document.querySelector('.hideAdd');

customerInfo.addEventListener('touchend', (e) => {
    e.preventDefault();
    // getCustomerData();
    showCustomerForm();
});

function showCustomerForm() {
    const customerForm = document.querySelector('.customerForm');
    customerForm.style.display = 'block';
    hideHeader.style.display = 'none';
    mainPage.style.display = 'none';
}


//save form values to database
// function addCustomerForm() {
//     const addNewCustomer = document.querySelector('#addNewCustomer');
//     addNewCustomer.addEventListener('touchend', (e) => {
//         e.preventDefault();
//         const firstname = document.getElementById('firstname').value;
//         const lastname = document.getElementById('lastname').value;
//         const email = document.getElementById('email').value;
//         const street = document.getElementById('street').value;
//         const city = document.getElementById('city').value;
//         const state = document.getElementById('state').value;
//         const phone = document.getElementById('phone').value;
//         // grab data from  the form and save to databse
//         dbase.collection('customers').add({
//             firstname: firstname,
//             lastname: lastname,
//             email: email,
//             street: street,
//             city: city,
//             state: state,
//             phone: phone
//         });
//     });
// }


//get customer information

//function to view customers
function viewCustomers(doc) {

    let customerList = document.createElement('ul');
    let firstname = document.createElement('div');
    let lastname = document.createElement('div');
    let street = document.createElement('div');
    let city = document.createElement('div');
    let state = document.createElement('div');
    let phone = document.createElement('div');
    customerList.classList.add('customer-list');


    customerList.setAttribute('data-id', doc.id);
    firstname.textContent = `First Name: ${doc.data().firstname}`;
    lastname.textContent = `Last Name: ${doc.data().lastname}`;
    street.textContent = `Street Address: ${doc.data().streetaddress}`;
    city.textContent = `City: ${doc.data().city}`;
    state.textContent = `State: ${doc.data().state}`;
    phone.textContent = `Phone: ${doc.data().phone}`;


    customerList.appendChild(firstname);
    customerList.appendChild(lastname);
    customerList.appendChild(street);
    customerList.appendChild(city);
    customerList.appendChild(state);
    customerList.appendChild(phone);

    buildCustomerView.appendChild(customerList);
}

// buildCustomerView.innerHTML = viewCustomers();


//Add Customer Form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    dbase.collection('customers').add({
        city: form.city.value,
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        street: form.streetaddress.value,
        state: form.state.value,
        phone: form.phone.value
    });
    console.log('Here I am');
});

//logout alert
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
        location.href = 'login.html';
    });
});