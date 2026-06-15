
console.log("Running database")

function writeForm(){
    // Get the form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    firebase.database().ref('users/' + name).set({
      name: name,
      age: age,
      email: email
    })


}


