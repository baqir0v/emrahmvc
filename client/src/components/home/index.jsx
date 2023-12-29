import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from '../Form'

function Home() {
    const [data, setData] = useState([])


    const fetchData = async () => {
        const res = await fetch("http://localhost:5500/api/user")
        const jsonData = await res.json()
        setData(jsonData)
    }



    const handleUpdate = async (_id,username,password,email) => {
        if (!username || !password) {
            console.log("Afrikada veziyyet zor deyil");
        }
        try {
            const resp = await axios.put(`http://localhost:5500/api/user/${_id}`,
                {
                    username: username,
                    password: password,
                    email:email
                }
            )
                
            fetchData()
        } catch (error) {
            console.log(error.message );
        }   
    }

    const handleDelete = async (_id) => {
        try {
            const resp = await axios.delete(`http://localhost:5500/api/user/${_id}`)
            fetchData()
        } catch (error) {
            console.log("Salam Nigga");
        }
    }   
    useEffect(() => {
        fetchData()
    }, [])

    const formProp = {
        handleUpdate
    }
    return (
        <>
            {data && data.map((item) => (
                <ul key={item._id} item={item}>
                    <li>{item.username}</li>
                    <li>{item.email}</li>
                    <li>{item.password}</li>
                    <li>{item.role}</li>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    
                    <Form  handleUpdate ={handleUpdate} _id={item._id}/>
         
                </ul>
            ))}
        </>
    )
}

export default Home
