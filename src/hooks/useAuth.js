import { useContext } from "react";
import { Authcontext } from "../contexts/AuthProvider";


const useAuth = () =>{
 const auth = useContext(Authcontext)
 return auth
}

export default useAuth;