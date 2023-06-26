import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth' 
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB3WIvEQUtTiQa2hVh7S1F88294Km8smx4",
    authDomain: "netflix-clone-356a7.firebaseapp.com",
    projectId: "netflix-clone-356a7",
    storageBucket: "netflix-clone-356a7.appspot.com",
    messagingSenderId: "156636238011",
    appId: "1:156636238011:web:877495577f2425222ed99e"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;