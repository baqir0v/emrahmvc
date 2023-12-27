import axios from 'axios'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import { jwtDecode } from "jwt-decode";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const {setUser,user} = useContext(UserContext)
    
    const handleRegister = async () => {
        try {
            const resp = await axios.post('http://localhost:5500/api/user/login',
            {
                "username": username,
                "password": password,
            }
        )
        console.log(resp.data);
        const decoded = jwtDecode(resp.data);
        setUser(decoded.username)
        console.log(decoded);
        if (resp.data) {
            localStorage.setItem('token',resp.data)
            localStorage.setItem("username",username)
        }
        } catch (error) {
            console.log("Alinin Ali");
        }
    }
    const logout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setUser(null)
    }
    return (
        <>
            <input type="text" value={username} name='username' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <br />
            <input type="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
            <br />
            <button onClick={() => {
                handleRegister()
            }}>LogIn</button>
            {user ? <button onClick={logout}>Log Out</button> : <p>Gel gir</p>}
        </>
    )
}

export default Login