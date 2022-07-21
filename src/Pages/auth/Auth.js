import { useState , createContext , useContext , useEffect} from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children}) => {
    const [user , setUser] = useState(null)
      
    const login = (user) => {
        console.log(user);
        sessionStorage.setItem("User", user);
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        console.log(user);
    }

    return (<AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}