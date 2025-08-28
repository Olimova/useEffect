import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://jsonbek.uz/api/products")
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div className='container product-wrapper'>
            {error && <div style={{ color: "red" }}>{error?.message}</div>}
            {loading && <div>Loading...</div>}
            {
                data?.map((item) => (
                    <div key={item.id} className="card">
                        <img
                            src={item.image}
                            alt={item.name} width={150}
                            className="card-img"
                        />
                        <p>Name:{item.title}</p>
                        <span>{item.price} UZS</span>
                    </div>
                ))
            }
        </div>
    )
}

export default User