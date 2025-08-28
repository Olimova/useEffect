import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData] = useState(null)
    const [loading,setLoading]=useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios
            .get("https://jsonbek.uz/api/users")
            .then(res=>setData(res.data))
            .catch(err=>setError(err))
            .finally(()=>setLoading(false))

    },[])
  return (
    <div className='container wrapper'>
        {error && <div style={{color:"red"}}>{error?.message}</div>}
        {loading && <div>Loading...</div>}
        {
            data?.map((item)=>(
                <div key={item.id} className="card">
                    <h3>{item.name}</h3>
                    <p><b>Email:</b>{item.email}</p>
                    <span><b>Bio:</b>{item.bio}</span>
                </div>
            ))
        }
    </div>
  )
}

export default User