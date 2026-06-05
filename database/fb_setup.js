// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe2jB6ftKFu7Vd3nk_YWguoME73ckwZks",
  authDomain: "nityaa-yr12-database-project.firebaseapp.com",
  databaseURL: "https://nityaa-yr12-database-project-default-rtdb.firebaseio.com",
  projectId: "nityaa-yr12-database-project",
  storageBucket: "nityaa-yr12-database-project.firebasestorage.app",
  messagingSenderId: "720725804300",
  appId: "1:720725804300:web:d2803469b2f43e1117b529",
  measurementId: "G-R5HL76W79W"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
