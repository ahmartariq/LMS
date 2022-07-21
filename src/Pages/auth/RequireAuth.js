import { Navigate , useLocation} from "react-router-dom";
import { useAuth } from "./Auth";

export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const isUser = sessionStorage.getItem("User")

    if(!isUser ){
        console.log(isUser);
        return <Navigate to='/login'  />
    }

    return children
}