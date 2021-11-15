import { useContext } from "react"
import { AuthContext } from "./UseAuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;