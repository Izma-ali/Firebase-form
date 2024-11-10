import{getAuth ,createUserWithEmailAndPassword} from "./firebase.js"


const auth = getAuth();


// let signupBtn = document.getElementById("signupBtn")
// let signupEmail = document.getElementById("signupEmail")
// let signupPassword = document.getElementById("signupPassword")

let registerBtn = document.getElementById("register")
let rName = document.getElementById("registerName")
let rEmail = document.getElementById("registerEmail")
let rPass = document.getElementById("registerPassword")
// let rPassRpt = document.getElementById("registerPassRepeat")

registerBtn.addEventListener("click",()=>{
  if(rName.value && rPass.value && rEmail.value){
    createUserWithEmailAndPassword(auth, rEmail.value, rPass.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      Swal.fire({
        title: "Signup successfully!",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    setTimeout(function () {
        window.location.href = "signin.html"
    }, 2000

    )
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode);
      // alert(errorMessage,errorCode)
      console.log(errorMessage);
      switch(errorMessage){
        case "Firebase: Error (auth/invalid-email).":
          Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address."
        });
        break;

        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
          Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Please enter a strong password."
        });
        break;

        case "Firebase: Error (auth/email-already-in-use).":
          Swal.fire({
            icon: "error",
            title: "Email already in use",
            text: "Please enter a new email address."
        });
        break;
      }
    });
  }
  else if(rName.value == "" || rPass.value == "" || rEmail.value == ""){
    Swal.fire({
      icon: "warning",
      title: "Empty field found...",
      text: "Please fill in all fields!",
  });
  }
  
})

let googleBtn = document.getElementById("googleBtn")
googleBtn.addEventListener("click",()=>{
  
})









// registerBtn.addEventListener("click",()=>{
//     if(signupEmail.value.trim() && signupPassword.value.trim()){
//         createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user);
//     Swal.fire({
//       title: "Signup successfully!",
//       icon: "success",
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//       }
//   });
//   setTimeout(function () {
//       window.location.href = "signin.html"
//   }, 2000

//   )
//     location.href = "signin.html"
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//   });

//     }
//     else{
//         console.log("insert data");
        
//     }
// })


// var userData = []

// registerBtn && registerBtn.addEventListener("click", function () {
//     // console.log(registerBtn);

//     if (rName.value && rPass.value && rEmail.value && rPassRpt.value == "") {
//         Swal.fire({
//             icon: "warning",
//             title: "Empty field found...",
//             text: "Please fill in all fields!",
//         });
//     }
//     else {
//         var userObj = {
//             name: rName.value,
//             email: rEmail.value,
//             password: rPass.value,
//             repeatPass: rPassRpt.value
//         }
//         userData.push(userObj)
//         Swal.fire({
//             title: "Signup successfully!",
//             icon: "success",
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.onmouseenter = Swal.stopTimer;
//                 toast.onmouseleave = Swal.resumeTimer;
//             }
//         });
//         setTimeout(function () {
//             window.location.href = "signin.html"
//         }, 2000

//         )
//         rName.value = ""
//         rEmail.value = ""
//         rPass.value = ""
//         rPassRpt.value = ""
//     }


    // localStorage.setItem("users", JSON.stringify(userData))
    // var dataFetch = JSON.parse(localStorage.getItem("users"))
    // dataFetch.push(userObj)




// })
