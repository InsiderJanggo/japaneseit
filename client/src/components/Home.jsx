import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import './styles/Home.css'

export default function Home() {
    const [kanjis, setKanjis] = useState([]);

    const listAll = () => {
        axios.get('http://localhost:5000/api/kanji')
        .then((res) => {
            setKanjis(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    useEffect(() => {
        listAll();
    }, [])

    return(
        <>
            <Header />
            
                <div id="contentsTopIndexArea">
                    <div id="aiueoListInner">
                        <ul className="cf">
                        {kanjis.map((text, index) => (
                            <li className="bdTopLine ml0" key={index}>
                                <a href={"/kanji/" + text.id} style={{ height: "119px" }}>
                                      <span className="hiragana">
                                           {text.reading}
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
           
            <Footer />
        </>
    )
}