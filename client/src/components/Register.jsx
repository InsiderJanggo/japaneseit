import React, { useState } from 'react'
import {Form, Button, Container, Alert} from 'react-bootstrap'
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    var [usernameError, setUsernameError] = useState(undefined)
    var [emailError, setEmailError] = useState(undefined)
    var [passwordError, setPasswordError] = useState(undefined)
    var [status, setStatus] = useState()

    const validate = () => {
        if(!username || !password || !email) {
            setUsernameError('Username can`t be empty')
            setPasswordError('Password can`t be empty')
            setEmailError('Email can`t be empty')
            return false
        } else if(!email.includes('@')) {
            setEmailError('Invalid Email')
            return false
        }
        
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate()
        if(isValid) {
            axios.post('http://localhost:5000/auth/register', {
                username: username,
                email: email,
                password: password
            })
            .then((res) => {
                setStatus('SUCCESSFULLY REGISTER')
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }

    return(
        <>
            <Container>
                {status ?  
                <Alert variant="success">    
                    {status}
                </Alert>
                :
                ""
                }
               
                 
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <div style={{ fontSize: '12px', color: 'red' }}>
                        {usernameError}
                    </div>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                    <div style={{ fontSize: '12px', color: 'red' }}>
                        {emailError}
                    </div>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
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
                            Already Have An Account? <a href="/login">Login Now</a>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </>
    )
}