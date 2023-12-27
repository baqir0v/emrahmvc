import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user,setUser] = useState(localStorage.getItem("username"))

    const data = {user,setUser}

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}