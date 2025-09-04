// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDjjCGbim5t6_G8i2HPkGCZNIl_xTesNjs",
  authDomain: "softech-blog.firebaseapp.com",
  projectId: "softech-blog",
  storageBucket: "softech-blog.appspot.com",
  messagingSenderId: "927428038867",
  appId: "1:927428038867:web:21af4135b38012d8330426",
  measurementId: "G-W5VTNSFSDN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);