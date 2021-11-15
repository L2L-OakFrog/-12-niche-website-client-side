import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfigs";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;