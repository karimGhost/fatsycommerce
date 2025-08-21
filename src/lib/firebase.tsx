"use client"
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // ✅ Add this
import { getFirestore } from "firebase/firestore";
import { Anonymous_Pro } from "next/font/google";
import { useEffect } from "react";
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported } from "firebase/messaging";
const firebasefatsyCommerce = {
   apiKey: "AIzaSyBQAjyfhs3ANDEeMY_fqKMa6MLfmLSXIDU",
  authDomain: "fatsycommerceauth.firebaseapp.com",
  databaseURL: "https://fatsycommerceauth-default-rtdb.firebaseio.com",
  projectId: "fatsycommerceauth",
  storageBucket: "fatsycommerceauth.firebasestorage.app",
  messagingSenderId: "388108774178",
  appId: "1:388108774178:web:59b1f783e2e782e88e537b",
  measurementId: "G-VG96WQM2PE"

};

const app = initializeApp(firebasefatsyCommerce);


const auth = getAuth(app); // <-- Auth  here
 const db = getFirestore(app); //


export const getFirebaseMessaging = async () => {
  const supported = await isSupported();
  if (supported) {
    return getMessaging(app);
  }
  return null;
};


// ✅ Export both
export {db, auth };
