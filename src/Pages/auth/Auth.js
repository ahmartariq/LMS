import { useState , createContext , useContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children}) => {
    const [user , setUser] = useState(null)

    const login = (user) => {
        setUser(user)
        console.log(user);
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