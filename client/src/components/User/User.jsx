import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from 'react-router-dom'
import {
    Container
} from 'react-bootstrap'
import Header from '../Header'


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
        <Header />
            <Container>
                <div id="user-profile">
                    <img src={"/src/components/User/img/" + user.avatar} alt={user.id + "-avatar"} width={200} height={200} />
                    <span>{user.username}</span>
                </div>
            </Container>
        </>
    )
}