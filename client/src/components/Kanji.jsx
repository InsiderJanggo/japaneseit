import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap'
import './styles/Kanji.css'
import axios from 'axios'
import {
    useParams
} from "react-router-dom";
import onyomi from '../assets/icon_on.png'
import kunyomi from '../assets/icon_kun.png'
import Header from './Header';

export default function Kanji() {
    let { id } = useParams();
    const [kanji, setKanji] = useState({})

    const getOne = (id) => {
        axios.get(`http://localhost:5000/api/kanji/get/${id}`)
        .then((res) => {
            setKanji(res.data)
        })
        .catch(err => {
            console.error(err);
        }) 
    }

    useEffect(() => {
        getOne(id)
        document.title = `${kanji.kanji} - 漢字辞書`;
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
                        意味：{kanji.meaning}
                    </p>
                    <ul id="onkunList">
                        <li id="yomulist">
                            <p className="onKunYomi txtColorRed">
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
            </Container>
       </>
    )
}