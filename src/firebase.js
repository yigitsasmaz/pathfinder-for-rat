import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Google Analytics
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcUgE9isAH0wz80h5wuBRPOzCoJIOuVC8",
    authDomain: "pathfinderforrat-tushar.firebaseapp.com",
    projectId: "pathfinderforrat-tushar",
    storageBucket: "pathfinderforrat-tushar.appspot.com",
    messagingSenderId: "326700976604",
    appId: "1:326700976604:web:c7c263b7fa5d958290a719",
    measurementId: "G-DBNKREWEHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export default app;
