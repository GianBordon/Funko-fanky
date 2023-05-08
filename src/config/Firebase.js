// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: processingInstruction.env.REACT_APP_apikey,
authDomain: processingInstruction.env.REACT_APP_authDomain,
projectId: processingInstruction.env.REACT_APP_projectId,
storageBucket: processingInstruction.env.REACT_APP_storageBucket,
messagingSenderId: processingInstruction.env.REACT_APP_messagingSenderId,
appId: processingInstruction.env.REACT_APP_appId,
};

// Initialize Firebase
console.log("0)Estoy configurando mi firebaase con el objeto:", firebaseConfig )

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;