import React, { useEffect, useState } from 'react';
import { Button, Container, Alert, Modal } from 'react-bootstrap'
import './styles/Kanji.css'
import axios from 'axios'
import {
    useParams
} from "react-router-dom";
import onyomi from '../assets/icon_on.png'
import kunyomi from '../assets/icon_kun.png'
import Header from './Header';
import './styles/Home.css'
import Footer from './Footer'

export default function Kanji() {
    let { id } = useParams();
    const [kanji, setKanji] = useState({})
    const [kanjis, setKanjis] = useState([]);

    const [showDeleteForm ,setShowDeleteForm] = useState(false);

    const getUser = localStorage.getItem('user')
    let user = JSON.parse(getUser);

    const [meaning, setMeaning] = useState('');
    const [error, setError] = useState(null)

    const getOne = (id) => {
        axios.get(`http://localhost:5000/api/kanji/get/${id}`)
        .then((res) => {
            setKanji(res.data)
        })
        .catch(err => {
            console.error(err);
        }) 
    }

    const randomKanjis = () => {
        axios.get('http://localhost:5000/api/kanji/rand')
        .then((res) => {
            setKanjis(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const validate = () => {
        if(!meaning) {
            setError('Field cant be empty')
            return false
        }

        return true
    }

    const updateMeaning = (e) => {
        e.preventDefault();
        const isValid = validate()
        if(isValid) {
            axios.put(`http://localhost:5000/api/kanji/add/translation/${id}`, {
                meaning: meaning
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
        }
    }

    const deleteKanji = () => {
            axios.delete(`http://localhost:5000/api/kanji/delete/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        getOne(id)
        randomKanjis()
        document.title = `${kanji.kanji} - ????????????`;
    }, [kanji.kanji])

    return(
       <>
       <Header />
            <Container>
                <div>
                    <p id="kanjiOyaji" itemID={kanji.id} className="txtColorRed">
                        {kanji.kanji}
                    </p>
                    <p id="imi" className="Chiyaji">
                        ?????????{kanji.meaning}    
                    </p>
                    <div>
                    {user ? (
                           <>
                                 <form onSubmit={updateMeaning} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                                    <label htmlFor="meaning">??????????????????</label>
                                    {error ? (
                                        <Alert variant="danger" onClose={() => setError('')} dismissible>
                                            {error}
                                        </Alert>
                                    ): (
                                        ""
                                    )}
                                    <input type="text" id="meaning" value={meaning} onChange={(e) => setMeaning(e.target.value)} name="meaning" placeholder="???????????????" />
                                    <Button type="submit" variant="primary">??????</Button>
                                </form>
                                <Button type="button" variant="danger" onClick={() => setShowDeleteForm(true)}>???????????????</Button>
                                {showDeleteForm? (
                                    <>
                                        <Modal show={() => setShowDeleteForm(true)} onHide={() => setShowDeleteForm(false)}>
                                            <Modal.Title>??????????????????????????????</Modal.Title>
                                            <Modal.Body>
                                                <form onSubmit={deleteKanji}>
                                                        <Button type="button" variant="danger">???????????????</Button>
                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" onClick={() => setShowDeleteForm(false)}>???????????????</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ): (
                                    ""
                                )}
                           </>
                        ): (
                            ""
                        )
                    }
                    </div>
                    <ul id="onkunList">
                        <li id="yomulist">
                            <p className="onKunYomi">
                                <img src={onyomi} alt="onyomi-img" width={50} height={50} />
                                {kanji.onyomi}
                            </p>
                        </li>
                        <li id="yomulist">
                            <p className="onKunYomi txtColorRed">
                                <img src={kunyomi} alt="kunyomi-img" width={50} height={50} />
                                {kanji.kunyomi}
                            </p>
                        </li>
                    </ul>
                </div>
                <div id="contentsTopIndexArea">
                    <div id="aiueoListInner">
                        <ul className="cf">
                        <h1 style={{ marginBottom: '2rem', fontSize: '50px' }}>????????????</h1>
                        {kanjis.map((text, index) => (
                            <li className="bdTopLine ml0" key={index}>
                                <a href={"/kanji/" + text.id} style={{ height: "119px" }}>
                                      <span className="hiragana">
                                           ?????????:{text.reading}
                                      </span>
                                      <span className="kanji">
                                        {text.kanji}
                                      </span>  
                                </a>
                            </li>
                         ))}
                         
                        </ul>
                    </div>
                </div>
            </Container>
            <Footer />
       </>
    )
}