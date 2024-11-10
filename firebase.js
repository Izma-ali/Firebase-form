  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCWUT_D5xjGUx0q5AU6D3mXuUMoP4qmnls",
    authDomain: "izma-firebase.firebaseapp.com",
    projectId: "izma-firebase",
    storageBucket: "izma-firebase.firebasestorage.app",
    messagingSenderId: "589834097986",
    appId: "1:589834097986:web:5265af8bec2d45f6b9a4db"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword}