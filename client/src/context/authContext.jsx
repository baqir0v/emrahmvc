import { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({children}) {
    // const [token,setToken] = 
    const [decodedToken,setDecodedToken] = useState([])
}