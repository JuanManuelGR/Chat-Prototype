import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp_NfpLNun90TFjcVKZPNOIBMMImmvmLA",
  authDomain: "chat-prototype-86036.firebaseapp.com",
  projectId: "chat-prototype-86036",
  storageBucket: "chat-prototype-86036.appspot.com",
  messagingSenderId: "685482580317",
  appId: "1:685482580317:web:a27c5b5a85d0c84ea3b0b4",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
