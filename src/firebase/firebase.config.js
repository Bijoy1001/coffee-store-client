import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCabm39aHXjPsY2mTcTXcsbLO9279Cyc8M",
  authDomain: "coffee-store-b45d9.firebaseapp.com",
  projectId: "coffee-store-b45d9",
  storageBucket: "coffee-store-b45d9.appspot.com",
  messagingSenderId: "562293709300",
  appId: "1:562293709300:web:8a3af99fc90e84a5cf41a1"
};

const app = initializeApp(firebaseConfig);
export default app;