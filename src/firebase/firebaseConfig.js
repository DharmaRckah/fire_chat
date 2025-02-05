
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7C75E888J1jGCGbr5TDSDGq9FlLz9sYA",
  authDomain: "dm-chat-37348.firebaseapp.com",
  projectId: "dm-chat-37348",
  storageBucket: "dm-chat-37348.firebasestorage.app",
  messagingSenderId: "933748009558",
  appId: "1:933748009558:web:13dd93d1cbfe989f4f29f7",
  measurementId: "G-8PKEXJ5XMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const auth = getAuth(app)

export {app,analytics,auth};

