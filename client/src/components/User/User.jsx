import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from 'react-router-dom'
import {
    Container
} from 'react-bootstrap'


export default function User() {
    let { username } = useParams();
    const [user, setUser] = useState({});

    const getUser = (username) => {
        axios.get(`http://localhost:5000/api/user/get/${username}`)
        .then((res) => {
            setUser(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    useEffect(() => {
        getUser(username);
        document.title = `${user.username} - 漢字辞書`;
    }, [user.username])

    return(
        <>
            <Container>
                <span>Username: {user.username}</span>
            </Container>
        </>
    )
}