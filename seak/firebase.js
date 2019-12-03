
  // Your web app's Firebase configuration
  import {apiKey, appId} from './keys.js';

  var firebaseConfig = {
    apiKey: apiKey,
    authDomain: "seak-crm-6c8ce.firebaseapp.com",
    databaseURL: "https://seak-crm-6c8ce.firebaseio.com",
    projectId: "seak-crm-6c8ce",
    storageBucket: "seak-crm-6c8ce.appspot.com",
    messagingSenderId: "706111528068",
    appId: appId,
    measurementId: "G-9C8NBPPSKR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

   //make auth and firebase references
export 	const auth = firebase.auth();
export 	const dbase = firebase.firestore();

