  import app from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  export const firebaseConfig = {
    apiKey: "AIzaSyDp3lwHcKaD5AeUFHrlsAZdi4MvD90WN2w",
    authDomain: "burger-queen-13.firebaseapp.com",
    databaseURL: "https://burger-queen-13.firebaseio.com",
    projectId: "burger-queen-13",
    storageBucket: "burger-queen-13.appspot.com",
    messagingSenderId: "933352617724",
    appId: "1:933352617724:web:d9cd7e2a269edc10a70979",
    measurementId: "G-YYZNWTRTT4"
  };
  
  app.initializeApp(firebaseConfig);
  
  const db = app.firestore();
  const auth = app.auth();
 export {auth, db} 