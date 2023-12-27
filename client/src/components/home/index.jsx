import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([])
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const fetchData = async () => {
        const res = await fetch("http://localhost:5500/api/user")
        const jsonData = await res.json()
        setData(jsonData)
    }

    const handleUpdate = async (_id) => {
        try {
            const resp = await axios.put(`http://localhost:5500/api/user/${_id}`,
            {
                "username":username,
                "password":password
            }
            )
            fetchData()
        } catch (error) {
            console.log("Sagol Nigga");
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
    return (
        <>
            {data && data.map((item) => (
                <ul key={item._id}>
                    <li>{item.username}</li>
                    <li>{item.email}</li>
                    <li>{item.password}</li>
                    <li>{item.role}</li>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                </ul>
            ))}
        </>
    )
}

export default Home
