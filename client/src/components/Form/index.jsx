import React, { useState } from 'react'

const Form = ({handleUpdate ,_id}) => {
    const [username, setusername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [isFormOpen, setIsFormOpen] = useState(false)
    console.log(_id,handleUpdate);
 
    function handleInput(e,setState) {
        setState(e.target.value)
    }
    const handleFormOpen = () => {
        setIsFormOpen(!isFormOpen)
        setEmail("")
        setpassword("")
        setusername("")
    }
    function handleFromClean() {
        handleFormOpen()
        setEmail("")
        setpassword("")
        setusername("")
    }
    return (
       <>
        <button onClick={handleFormOpen}>Update</button>
        {isFormOpen &&
             <form action="#" onSubmit={() => {
                handleUpdate(_id,username,password,email)
             }}>
             <input type="text" value={username} onChange={(e) => handleInput(e, setusername)} placeholder='Username' />
             <input type="text" value={email} onChange={(e) => handleInput(e, setEmail)} placeholder='Email' />
             <input type="text" value={password} onChange={(e) => handleInput(e, setpassword)} placeholder='Password' />
             <button>Add</button>
         </form>
        }
        </>
    )
}

export default Form