//get data from the firestore database and render it to the frontend


// dbase.collection('users').get().then(snapshot =>{
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//     });
// })
//create element and render account details
const accountDetails = document.querySelector('#accountDetails');


function showUserInfo(doc){
    let div = document.createElement('div');
    let firstname = document.createElement('span');
    let lastname = document.createElement('span');
    

    div.setAttribute('data-id', doc.id);
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    

    div.appendChild(firstname);
    // div.appendChild(lastname);

    accountDetails.appendChild(div);
   
}


//check user active state
const activeStatus = auth.onAuthStateChanged(user =>{
    if(user){
        console.log(user.email, 'logged in');
    }else{
        console.log('user logged out');
    }
});

accountDetails.addEventListener('touchend', (e) =>{
    e.preventDefault();
    
    dbase.collection('users').get().then(snapshot =>{
         snapshot.docs.find(doc => {
           // console.log(doc.data());
            if(activeStatus){
                showUserInfo(doc);
            }
            
        });
       
    });
    
});






//logout alert
const logout = document.querySelector('#logout');
logout.addEventListener('touchend', (e)=>{
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log('user signed out');
        location.href ='login.html';
    });
});

//use data from the database and render it in the frontend
// const  renderUserInfo = (data) =>{
//    data.collection('users').get().then(snapshot =>{
//        snapshot.doc.data();
//    })
    
// }


