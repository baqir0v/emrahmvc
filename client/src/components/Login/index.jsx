import axios from 'axios'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const {setUser} = useContext(UserContext)
    
    const handleRegister = async () => {
        const resp = await axios.post('http://localhost:5500/api/user/login',
            {
                "username": username,
                "password": password,
            }
        )
        console.log(resp.data);
        setUser(resp.data)
        if (resp.data) {
            localStorage.setItem('token',resp.data)
        }
    }
    const logout = ()=>{
        localStorage.removeItem("token")
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
        </>
    )
}

export default Login