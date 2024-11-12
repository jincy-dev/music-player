// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfCeeGsBe8yUL6WE4zaON-VcMePjO3gwc",
  authDomain: "music-player-jincy.firebaseapp.com",
  projectId: "music-player-jincy",
  storageBucket: "music-player-jincy.firebasestorage.app",
  messagingSenderId: "79093110942",
  appId: "1:79093110942:web:e543d2c65d102abd08038f",
  measurementId: "G-24TJ1ZJE8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);