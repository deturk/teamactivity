//get data from firestore
import { auth, dbase } from './firebase.js';

const userAccount = document.querySelector('#accountDetails');


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
            // viewCustomers(doc.data());
            console.log(doc.data());
        });
    });
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
item.style.display == 'none';

// hide and show customer divs

function customerDivs() {
    let divs = document.createElement('ul');
    let addOption = document.createElement('div');
    let viewOption = document.createElement('div');

    addOption.textContent = 'Add Customer';
    viewOption.textContent = 'View Customers';

    divs.appendChild(addOption);
    divs.appendChild(viewOption);

    divs.classList.add('divOptions');


    customerInfo.appendChild(divs);
    console.log(divs);

}

// function to display customer options
let options = document.createElement('ul');
let addOption = document.createElement('div');
let viewOption = document.createElement('div');

function addCustomerOptions(doc) {

    addOption.textContent = 'Add';
    viewOption.textContent = 'View';

    options.classList.add('divOptions');
    addOption.classList.add('addCustomer');
    viewOption.classList.add('viewCustomer');

    options.setAttribute('data-id', doc.id);
    options.appendChild(addOption);
    options.appendChild(viewOption);

    customerInfo.appendChild(options);
}


addOption.textContent = 'Add';
viewOption.textContent = 'View';

options.classList.add('divOptions');
addOption.classList.add('addCustomer');
viewOption.classList.add('viewCustomer');

//options.setAttribute('data-id', doc.id);
options.appendChild(addOption);
options.appendChild(viewOption);

customerInfo.appendChild(options);
}
options.style.display == 'none';

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

let customerList = document.createElement('ul');
async function viewCustomers(doc) {

    let firstname = document.createElement('div');
    let lastname = document.createElement('div');
    let street = document.createElement('div');
    let city = document.createElement('div');
    let state = document.createElement('div');
    let phone = document.createElement('div');
    customerList.classList.add('customer-list');

    customerList.setAttribute('data-id', doc.id);
    firstname.textContent = `First Name : ${doc.data().firstname}`;
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


    
    customerInfo.appendChild(customerList);
}

//call function to get customer info on event
const customerInfo = document.querySelector('#customer');

customerInfo.addEventListener('click', (e) => {
    e.preventDefault();
    getCustomerData();
    addForm();
});

<<<<<<< HEAD
function addForm() {
    let addForm = document.querySelector('#add-form');
    addForm.addEventListener('click', (e) => {
=======
 function addForm(){
    let addForm = document.querySelector('.addCustomer');
    addForm.addEventListener('click', (e)=>{
>>>>>>> parent of 3eeb71b... Revert "everything is working now. the form is hidden behind the menu. someone should fix it"
        document.getElementById('add-form').style.display = "block";

    });


}

//save form values to database
<<<<<<< HEAD
function addCustomerForm() {
    const addNewCustomer = document.querySelector('#addNewCustomer');
    addNewCustomer.addEventListener('touchend', (e) => {
        e.preventDefault();
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const phone = document.getElementById('phone').value;
        // grab data from  the form and save to databse
        dbase.collection('customers').add({
            firstname: firstname,
            lastname: lastname,
            email: email,
            street: street,
            city: city,
            state: state,
            phone: phone
        });
=======
const addNewCustomer = document.querySelector('#addNewCustomer');
   addNewCustomer.addEventListener('click', (e) => {
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const phone = document.getElementById('phone').value;
    // grab data from  the form and save to databse
    dbase.collection('customers').add({
        firstname: firstname,
        lastname: lastname,
        email: email,
        street: street,
        city: city,
        state: state,
        phone: phone
>>>>>>> parent of 3eeb71b... Revert "everything is working now. the form is hidden behind the menu. someone should fix it"
    });
}


//get customer information
// const customerBtn = document.querySelector('.view');

// customerBtn.addEventListener('touchend', (e) => {
//     e.preventDefault();
//     viewCustomers();
// });


let customerList = document.createElement('ul');
//function to view customers
async function viewCustomers(doc) {

    let firstname = document.createElement('div');
    let lastname = document.createElement('div');
    let street = document.createElement('div');
    let city = document.createElement('div');
    let state = document.createElement('div');
    let phone = document.createElement('div');
    customerList.classList.add('customer-list');

    customerList.setAttribute('data-id', doc.id);
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    street.textContent = doc.data().street;
    city.textContent = doc.data().city;
    state.textContent = doc.data().state;
    phone.textContent = doc.data().phone;


    customerList.appendChild(firstname);
    customerList.appendChild(lastname);
    customerList.appendChild(street);
    customerList.appendChild(city);
    customerList.appendChild(state);
    customerList.appendChild(phone);

    buildCustomerView.appendChild(customerList);
}

const buildCustomerView = document.querySelector('#customersView');

buildCustomerView.innerHTML = viewCustomers();


//logout alert
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
        location.href = 'login.html';
    });
});