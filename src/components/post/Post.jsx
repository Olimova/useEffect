import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://jsonbek.uz/api/posts")
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div className='post'>
        <div className='container post-wrapper'>
            {error && <div style={{ color: "red" }}>{error?.message}</div>}
            {loading && <div>Loading...</div>}
            {
                data?.map((item) => (
                    <div key={item.id} className="card">
                        <h3>{item.author}</h3>
                        <p><b>Bio:</b>{item.title}</p>
                        <i class="fa-solid fa-heart"></i>
                        <span>{item.likes}</span>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default User