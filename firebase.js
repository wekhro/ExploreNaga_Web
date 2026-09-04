import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyCqfS2r1ZU4nJWV95ItblPLOWiTCDS0VFI",
    authDomain: "explorenaga-cab3b.firebaseapp.com",
    projectId: "explorenaga-cab3b",
    storageBucket: "explorenaga-cab3b.firebasestorage.app",
    messagingSenderId: "519022816569",
    appId: "1:519022816569:web:84e7865a6f345b7ebacce8",
    measurementId: "G-JP1GDZ7CF6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { auth };
