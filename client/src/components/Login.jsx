/* eslint-disable  */
import React, {useState, useEffect} from 'react'
import {Form, Button, Container, Alert} from 'react-bootstrap'
import axios from 'axios'
import Header from './Header';

export default function Login() {
    const [loginStatus, setLoginStatus] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    var [usernameError, setUsernameError] = useState()
    var [passwordError, setPasswordError] = useState()
    const [status, setStatus] = useState('')
   

    axios.defaults.withCredentials = true;

    const validate = () => {
        if(!username) {
            setUsernameError('Username cant be empty')
            return false
        } else if(!password) {
            setPasswordError('Password Cant Be Empty')
            return false
        }
        return true
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if(isValid) {
            axios.post('http://localhost:5000/auth/login', {
                username: username,
                password: password
            })
            .then((res) => {
                if (res.data.message) {
                    setLoginStatus(res.data.message);
                } else {
                    setLoginStatus(res.data[0]);
                    var users = {
                        id: res.data[0].id,
                        username: res.data[0].username,
                        email: res.data[0].email,
                        avatar: res.data[0].avatar
                    }
                    localStorage.setItem('user', JSON.stringify(users));
                    setStatus('Login Successfully')
                }
            })
            .catch((err) => {
                console.error(err)
                setStatus('Login Failed')
            })
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/auth')
        .then((res) => {
            setLoginStatus(res.data[0]);
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    if(loginStatus) {
        setTimeout(function () { 
            location.href = 'http://localhost:3000/'
        }, 10 * 100); //10 SECOND
    }

    return(
       <>
       <Header />
           <Container>    
                {status ?  
                    <Alert variant="success">    
                        {status}
                    </Alert>
                :
                    ""
                }  
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                    <div style={{ fontSize: '12px', color: 'red' }}>
                        {usernameError}
                    </div>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div style={{ fontSize: '12px', color: 'red' }}>
                            {passwordError}
                        </div>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div style={{ fontSize: '12px' }}>
                            Dont Have An Account? <a href="/register">Register Now</a>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
           </Container>
       </>
    )
}