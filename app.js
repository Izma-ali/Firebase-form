import{getAuth ,createUserWithEmailAndPassword} from "./firebase.js"


const auth = getAuth();


let signupBtn = document.getElementById("signupBtn")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")


signupBtn.addEventListener("click",()=>{
    if(signupEmail.value.trim() && signupPassword.value.trim()){
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

    }
    else{
        console.log("insert data");
        
    }
    location.href = "signin.html"
})

