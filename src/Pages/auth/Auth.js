// import {useState ,  createContext , useContext} from "react"
// import { useNavigate } from "react-router-dom"


// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null)
//     const [password, setPassword] = useState(null)
//     const navigate = useNavigate();

//     const login = () => {
//         setUser(user)
//         setPassword(password)

//         if (user === "admin@gmail.com" && password === "admin") {
//             navigate("/");
//         }
//         else{
//             // navigate('/course-details')
//             // alert("Wrong email or password")
//         }
//     }

//     const logout = () => {
//         setUser(null)
//         setPassword(null)
//     }


//     return <AuthContext.Provider value={{user, password ,login , logout}}>
//         {children}
//     </AuthContext.Provider>
// }



// export const useAuth = () => {
//     return useContext(AuthContext)
// }