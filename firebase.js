import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0DxXyvfumVVMVz9LqmY8kW21sBjTS_rU",
  authDomain: "learnhub-lms-9ab43.firebaseapp.com",
  projectId: "learnhub-lms-9ab43",
  storageBucket: "learnhub-lms-9ab43.firebasestorage.app",
  messagingSenderId: "456369703123",
  appId: "1:456369703123:web:1d9302e211497b2a14ec26"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);