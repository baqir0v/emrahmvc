import { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async ()=>{
      const res = await fetch("http://localhost:5500/api/user")
      const jsonData = await res.json()
      setData(jsonData)
    }
    fetchData()
  }, [])
  return (
    <>
      {data && data.map((item)=>(
        <ul key={item._id}>
          <li>{item.username} sa</li>
          <li>{item.email}</li>
          <li>{item.password}</li>
          <li>{item.role}</li>
        </ul>
      ))}
    </>
  )
}

export default Home
