//get data from firestore
import {auth,dbase} from './firebase.js';
let docs = null ;
dbase.collection('users').get().then(snapshot => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        let docData = doc.data();
        return docData;
    });
    docs = docData;
    
})

const userInfo = document.querySelector('#userinfo');
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email, 'logged in');
    } else {
        console.log('user logged out');
    }
});

//get document from the database and render it in the frontend
function renderUserInfo(docs){
    let docData = docs.data();
    return docData;
    const item = document.createElement('li');
    item.classList.add('light');


    item.setAttribute('data-id', docData.id);
    item.innerHTML = `<h2>${docData.name}</h2>
    
    <div>  
        <div>
            <h3>username</h3>
            <p>${docData.username}</p>
        </div>
    </div>
    `
}

const userAccount = document.querySelector('#accountDetails');
userAccount.addEventListener('touchend', (e) =>{
    e.preventDefault();
    console.log(docs);
    renderUserInfo(docs);

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

/* This is the JavaScript for the contact us page. */
// contact form javascript

