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



//const viewCustomer = document.querySelector('.view');


function getCustomerData() {
    dbase.collection('customers').get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                addCustomerOptions(doc);
            });

        });
}



//listen to click event on user details.
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
    };
    if (e.target.innerHTML == 'Add') {
        addForm();
    } else {
        console.log('expecting view customers');
    }
});

function addForm() {
    document.body.innerHTML = `
    <nav role="navigation">
            <div id="menuToggle">
                <!--
                            A fake / hidden checkbox is used as click reciever,
                            so you can use the :checked selector on it.
                            -->
                <input type="checkbox" />

                <!--
                            Some spans to act as a hamburger.
                            
                            They are acting like a real hamburger,
                            not that McDonalds stuff.
                            -->
                <span></span>
                <span></span>
                <span></span>

                <!--
                            Too bad the menu has to be inside of the button
                            -->
                            <ul id="menu">
                            <a href="main.html">
                                <li>Home</li>
                            </a>
                            <a href="#">
                                <li>Account Details</li>
                            </a>
                            <a href="contactus.html">
                                <li>Contact Us</li>
                            </a>
                            <a href="">
                                <li>Customer</li>
                            </a>
                            <a href="#">
                                <li id="logout">Log Out</li>
                            </a>
                        </ul>
            </div>
        </nav>
    <h2>Customer Form</h2>

    <form>
      <input type="text" id="firstname" name="firstname" placeholder="First Name">
      <br><br>
      <input type="text"  id="lastname" name="lastname" placeholder="Last Name">
      <br><br>
      <input type="text"  id="email" name="email" placeholder="Email">
      <br><br>
      <input type="text"  id="street" name="street" placeholder="Street Address">
      <br><br>
      <input type="text"  id="city" name="city" placeholder="City">
      <br><br>
      <input type="text"  id="state" name="state" placeholder="State">
      <br><br>
       <input type="text" id="phone" name="phone" placeholder="(222)-222-2222">
      <br><br>
      <input type="submit" class="button" id="addNewCustomer" value="Add Customer">
      <br><br>
    </form>
    `;

}

//save form values to database
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
});



// const  addCustomer = document.querySelector('.addCustomer');
// addCustomer.addEventListener('touchend', addForm())


//logout alert
const logout = document.querySelector('#logout');
logout.addEventListener('touchend', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
        location.href = 'login.html';
    });
});