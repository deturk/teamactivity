//get data from firestore
import {auth,dbase} from './firebase.js';

//let docs = null ;

 dbase.collection('users').get().then((snapshot) => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        let docData = doc.data();
        //console.log(docData);
        if(docData.email == 'cat@gmail.com'){
            renderUserInfo(doc);
            //document.getElementById("li").style.display = "none";

        }
        
        //return docData;
        
    });
    
    
});
//console.log(doc);

//console.log(docs.email);

//const userInfo = document.querySelector('#userinfo');

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email, 'logged in');
    } else {
        console.log('user logged out');
    }
});

//get document from the database and render it in the frontend
function renderUserInfo(doc){
    let item = document.createElement('li');
    let firstname = document.createElement('div');
    let lastname = document.createElement('div');
    let email = document.createElement('div');
    item.classList.add('light');


    item.setAttribute('data-id', doc.id);
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    email.textContent = doc.data().email;

    item.appendChild(firstname);
    item.appendChild(lastname);
    item.appendChild(email);

    userAccount.appendChild(item);
    
 
}

//listen to click event on user details.
const userAccount = document.querySelector('#accountDetails');

userAccount.addEventListener('touchend', (e) =>{
    e.preventDefault();
    //renderUserInfo(doc);
    document.getElementById('accountDetails').style.display = "block";
    
    
    

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



