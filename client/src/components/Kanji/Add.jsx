import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import axios from 'axios'

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
        <form onSubmit={handleSubmit}>
            <h1>漢字を追加</h1>
            <input type="text" value={kanji} onChange={(e) => setKanji(e.target.value)} name="kanji" placeholder="漢字を入力" />
            <input type="text" value={reading} onChange={(e) => setReading(e.target.value)} name="reading" placeholder="読み方を入力" />
            <input type="text" value={onyomi} onChange={(e) => setOnyomi(e.target.value)} name="onyomi" placeholder="音読みを入力" />
            <input type="text" value={kunyomi} onChange={(e) => setKunyomi(e.target.value)} name="kunyomi" placeholder="訓読みを入力"/>
            <input type="text" value={meaning} onChange={(e) => setMeaning(e.target.value)} name="meaning" placeholder="意味を入力" />
            <button type="submit">追加</button>
        </form>
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