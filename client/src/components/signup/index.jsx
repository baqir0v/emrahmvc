import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setEmail] = useState("")
  const handleRegister = async()=>{
   const resp = await axios.post('http://localhost:5500/api/user/register',
    {
      "username":username,
      "email":email,
      "password":password,
      "role":"user"
    }
  )
  }
  return (
    <>
    <input type="text" value={username} name='username' onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
    <br />
    <input type="password" name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Password'  />
    <br />
    <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='email'  />
    <br />
    <button onClick={()=>{
      handleRegister()
    }}>Sign Up</button>
    </>
  )
}

export default SignUp