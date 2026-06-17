
console.log("Running database")

function writeForm(){
    // Get the form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    firebase.database().ref('users/' + name).set({
      name: name,
      age: age,
    })


}
var GLOBAL_user; // Google's user object

// set up a listener for the login state of the user.
function fb_login() {
  firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
}


// run when the login state of the user changes
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; //save the user details object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}


// run the google login popup
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; // save the user details object to a global variable
    console.log("User has logged in")
  });
}
