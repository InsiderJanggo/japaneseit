import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        axios.get('http://localhost:5000/api/user')
        .then((res) => {
            setUsers(res.data)
        })
        .catch(err => {
            console.error(err)
        }) 
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    return(
        <>
            {users.map((person, index) => (
                <div key={index}>
                    {person.username}
                </div>
            ))}
        </>
    )
}