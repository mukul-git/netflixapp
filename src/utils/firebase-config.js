import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKhW6CGVAFEu8inJtb7G-J8Y3UdB5MoQ4",
  authDomain: "netflixreact-a56d9.firebaseapp.com",
  projectId: "netflixreact-a56d9",
  storageBucket: "netflixreact-a56d9.appspot.com",
  messagingSenderId: "119523514042",
  appId: "1:119523514042:web:3bc835c620ec0dd5891483",
  measurementId: "G-E7S0JQKCGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
