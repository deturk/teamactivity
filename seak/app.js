//get data from firestore
dbase.collection('users').get().then(snapshot =>{
    console.log(snapshot.docs);
})

const userInfo = document.querySelector('#userinfo');
auth.onAuthStateChanged(user =>{
    if(user){
        console.log(user.email, 'logged in');
    }else{
        console.log('user logged out');
    }
});

//get document from the database and render it in the frontend
// function renderUserInfo(doc){
//     let li = document.createElement('li');
//     let name = document.createElement('span');
    
//     li.setAttribute('data-id', doc.id);
//     name.textContent = doc.data().firstname;

//     li.appendChild(name);

//     userInfo.appendChild(li);
// }

// dbase.collection('users').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc => {
//         renderUserInfo(doc);
//     });
// })


// get data from the front end and save it to the database

const logout = document.querySelector('#logout');
logout.addEventListener('touchend', (e)=>{
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log('user signed out');
        location.href ='login.html';
    });
});

// 


