import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    // Initialize Firebase
        initializeApp(firebaseConfig);
}
export default initializeAuthentication;