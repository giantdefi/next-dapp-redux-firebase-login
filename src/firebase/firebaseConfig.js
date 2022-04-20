import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// create .env on the root folder and fill with your firebase credential
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// sample of .env file :

// NEXT_PUBLIC_FIREBASE_API_KEY = "AIzaS----------"
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "---------.firebaseapp.com"
// NEXT_PUBLIC_FIREBASE_PROJECT_ID = "------------3e510"
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "----------------.appspot.com"
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "916-----------"
// NEXT_PUBLIC_FIREBASE_APP_ID = "1:916----------------------1b35c10b580"
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = "G--------------------" 
