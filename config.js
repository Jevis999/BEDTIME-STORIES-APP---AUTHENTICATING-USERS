import *as firebase from "firebase"
require('@firebase/firestore')
  
  var firebaseConfig = {
    apiKey: "AIzaSyDvoFCWi44DmPl1dv3TTSxOExRVTszzvKM",
    authDomain: "story-hub-f2fc0.firebaseapp.com",
    databaseURL: "https://story-hub-f2fc0.firebaseio.com",
    projectId: "story-hub-f2fc0",
    storageBucket: "story-hub-f2fc0.appspot.com",
    messagingSenderId: "876369744834",
    appId: "1:876369744834:web:a885a932b01a09d4d7fc5b"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();