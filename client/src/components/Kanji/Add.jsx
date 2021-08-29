import React, { useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'
import axios from 'axios'

var styles = {
    fontFamily: 'Kaisei Tokumin'
}

function AddForm() {
    const [kanji, setKanji] = useState('');
    const [reading, setReading] = useState('');
    const [onyomi, setOnyomi] = useState('');
    const [kunyomi, setKunyomi] = useState('');
    const [meaning, setMeaning] = useState('');
    const [error, setError] = useState(undefined)
    const [show, setShow] = useState(false);

    const clearState = () => {
        setKanji('')
        setReading('')
        setOnyomi('')
        setKunyomi('')
        setMeaning('')
    }

    
    const validate = () => {
        if(!kanji || !reading || !onyomi || !kunyomi || !meaning) {
            setError('Field cant be empty')
            setShow(true)
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();

        if(isValid) {
            axios.post('http://localhost:5000/api/kanji/add', {
                kanji: kanji,
                reading: reading,
                onyomi: onyomi,
                kunyomi: kunyomi,
                meaning: meaning
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
            //CLEAR THE FORM
            clearState();
        }
    }

    return(
        <>
        {show ?
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>エラーメッセージ</Alert.Heading>
                    <p>
                        {error}
                    </p>
            </Alert>
        : 
            ""
        }
            <Form style={styles} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>漢字:</Form.Label>
                        <Form.Control  type="text" value={kanji} onChange={(e) => setKanji(e.target.value)} name="kanji" placeholder="漢字を入力" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>読み方:</Form.Label>
                        <Form.Control type="text" value={reading} onChange={(e) => setReading(e.target.value)} name="reading" placeholder="読み方を入力" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>音読み:</Form.Label>
                        <Form.Control type="text" value={onyomi} onChange={(e) => setOnyomi(e.target.value)} name="onyomi" placeholder="音読みを入力" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>訓読み:</Form.Label>
                        <Form.Control type="text" value={kunyomi} onChange={(e) => setKunyomi(e.target.value)} name="kunyomi" placeholder="訓読みを入力" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>意味:</Form.Label>
                        <Form.Control type="text" value={meaning} onChange={(e) => setMeaning(e.target.value)} name="meaning" placeholder="意味を入力" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={styles}>
                        追加
                    </Button>
            </Form>
            <div className="mb-3">
                <Button variant="info" onClick={() => location.href = 'http://localhost:3000/'} style={styles}>
                            ←戻る
                </Button>
            </div>    
        </>
    )
}

export default function Add() {
    return(
        <>
            <AddForm />
        </>
    )
}