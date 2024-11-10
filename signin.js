import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

let lEmail = document.getElementById("loginEmail")
let lPass = document.getElementById("loginPass")
let loginBtn = document.getElementById("login")

loginBtn.addEventListener("click", () => {
    if (lEmail.value && lPass.value) {
        signInWithEmailAndPassword(auth, lEmail.value, lPass.value)
            .then((userCredential) => {
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
                    // window.location.href = "signin.html"
                }, 2000

                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                switch (errorMessage) {
                    case "Firebase: Error (auth/invalid-value-(email),-starting-an-object-on-a-scalar-field-invalid-value-(password),-starting-an-object-on-a-scalar-field).":
                        Swal.fire({
                            icon: "error",
                            title: "Invalid Credential",
                            text: "Please enter a valid email and password."
                        });
                        break;
                }

            });

    }
    else if (lEmail.value == "" || lPass.value == "") {
        Swal.fire({
            icon: "warning",
            title: "Empty field found...",
            text: "Please fill in all fields!",
        });
    }

})



// signInWithEmailAndPassword(auth, lEmail, lPass)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });























// // var login = document.getElementById("loginPage")
// // login && login.addEventListener("click", function () {
// //     window.location.href = "signin.html"
// // })


// // var loginBtn = document.getElementById("login")
// // loginBtn && loginBtn.addEventListener("click", function () {
// //     var lEmail = document.getElementById("loginEmail")
// //     var lPass = document.getElementById("loginPass")
// //     console.log(loginBtn);

// //     // console.log(lEmail.value,lPass.value);
// //     var users = JSON.parse(localStorage.getItem("users"))

// //     for (var user of users) {
// //         if (user.email == lEmail.value) {
// //             if (user.password == lPass.value) {
// //                 Swal.fire({
// //                     title: "Login successfully!",
// //                     icon: "success",
// //                     timer: 3000,
// //                     timerProgressBar: true,
// //                     didOpen: (toast) => {
// //                         toast.onmouseenter = Swal.stopTimer;
// //                         toast.onmouseleave = Swal.resumeTimer;
// //                     }
// //                 });
// //                 lEmail.value = ""
// //                 lPass.value = ""
// //             }
// //             else {
// //                 // alert("wrong password")
// //                 Swal.fire({
// //                     icon: "error",
// //                     title: "Wrong Password...",
// //                     text: "Please enter a correct password!",
// //                 });
// //             }
// //         }
// //         else {
// //             // alert("wrong email")
// //             Swal.fire({
// //                 icon: "error",
// //                 title: "Wrong Email...",
// //                 text: "Please enter a correct Email!",
// //             });
// //         }
// //     }

// // })


// // var signup = document.getElementById("signup")
// // signup && signup.addEventListener("click", function () {
// //     window.location.href = "index.html"
// // })

