import React, { useState } from 'react'
import { Alert, Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import Login from '../Login'

var styles = {
    fontFamily: 'Kaisei Tokumin'
}

function MachiForm() {
    const [machi, setMachi] = useState('');
    const [reading, setReading] = useState('');
    const [romaji, setRomaji] = useState('');
    const [error, setError] = useState(undefined)

    const clearState = () => {
        setMachi('')
        setReading('')
        setRomaji('')
    }

    const validate = () => {
        if(!machi || !reading || !romaji) {
            setError('Field cant be empty')
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();

        if(isValid) {
            axios.post('http://localhost:5000/api/machi/create', {
                machi: machi,
                reading: reading,
                romaji: romaji
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
            }) 
            clearState();
        }
    }

    return(
        <>
            <Container>
            {error ?
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                <Alert.Heading>エラーメッセージ</Alert.Heading>
                        <p>
                            {error}
                        </p>
                </Alert>
            : (
                ""
            )}


            <Form style={styles} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>町名:</Form.Label>
                        <Form.Control  type="text" value={machi} onChange={(e) => setMachi(e.target.value)} name="kanji" placeholder="漢字を入力" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>読み方:</Form.Label>
                        <Form.Control type="text" value={reading} onChange={(e) => setReading(e.target.value)} name="reading" placeholder="読み方を入力" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>ローマ字:</Form.Label>
                        <Form.Control type="text" value={romaji} onChange={(e) => setRomaji(e.target.value)} name="onyomi" placeholder="音読みを入力" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={styles}>
                        追加
                    </Button>
            </Form>

            </Container>
            <div className="mb-3">
                <Button variant="info" onClick={() => location.href = 'http://localhost:3000/machi'} style={styles}>
                            ←戻る
                </Button>
            </div>    
        </>
    )
}

export default function AddMachi() {
    const getuser = localStorage.getItem('user');
    let user = JSON.parse(getuser)
    return(
        <>
            { user ?
                <MachiForm />
            : 
                <Login />
            }
        </>
    )
}