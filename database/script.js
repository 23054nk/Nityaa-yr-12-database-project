function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )
}

console.log("Running database")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}


//log in with google 

// login listener
function fb_login()
{
    //firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
    authencitaionListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

// login callback
function fb_handleLogin(_user)
{
    if (_user) {
        console.log("User is logged in")
        GLOBAL_user=_user; // save the user's details object to a local variable

} 
else
{
    console.log("User is NOT logged in - starting the popup process")
    fb_popupLogin();
}
}

// run the google login popup
function fb_popupLogin()
{
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then ((result) =>
  {
  GLOBAL_user = result.user; //save the user details object to a global variable 
  console.log("User has logged in")
  });
}

// getting the favorite fruit
//var favFruit = document.getElementById ('favoriteFruit').value
let userName
let favoriteFruit
console.log(userName + "likes" + favoriteFruit)

