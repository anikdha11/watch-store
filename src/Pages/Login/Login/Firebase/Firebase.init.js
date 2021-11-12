import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const intilizationFirebase = () =>{
    initializeApp(firebaseConfig)
}
export default intilizationFirebase;