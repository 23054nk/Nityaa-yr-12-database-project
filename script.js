
console.log("Running database")

async function writeForm(){
    // Get the form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    // getting email from when they sign into google 
    const email = GLOBAL_user.email;

    // alert if the user has not filled out the form
    if (!GLOBAL_user) {
        alert("Please login with google first");
        return;
    }

    // if the user does not fill out any of the fields 
    if (name === "" || age === "" || email === "") {
        alert("Please fill in all fields");
        return;
    }

    // if user is under the age of 1 and over the age of 100 the age is not valid 
     if (age <= 0 || age > 100) {
        alert("Please enter a valid age!");
        return;
    }

    // save user's display name (name they chose)
    localStorage.setItem("gameName", name);

    await firebase.database().ref('userDetails/' + name).set({
      name: name,
      age: age,
      email: email

    })
    
console.log("hello your uid is" + GLOBAL_user.uid)

console.log("hello your email is" + GLOBAL_user.email)

console.log("hello your name is" + GLOBAL_user.displayName)
alert("userdetails are saved");

window.location.href = "chooseGame.html";

}
var GLOBAL_user; // Google's user object

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
/*************************************************************************************************************/
/*
// SAVING USER SCORES TO FIREBASE

function highScores(){
    // Get the user score
    const userScore = document.getElementById("userScore").textContent;
    

    firebase.database().ref('JurassicChase/'+GLOBAL_user.displayName).set({
      Score: userScore

    })
    
console.log("saved score for " +GLOBAL_user.displayName + ":" + userScore);
}
*/

/*************************************************************************************************************/

