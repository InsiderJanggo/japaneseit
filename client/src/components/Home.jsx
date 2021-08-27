import React, {useEffect, useState, useMemo} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import './styles/Home.css'
import '../../node_modules/bulma/css/bulma.min.css'
import kanjiIcon from '../assets/kanji.png'

export default function Home() {
    const [kanjis, setKanjis] = useState([]);
    const [value, setValue] = useState("")

    const listAll = () => {
        axios.get('http://localhost:5000/api/kanji')
        .then((res) => {
            setKanjis(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    /**
     * 
     * @param {Array} rows 
     * @param {String} filterKeys 
     * @returns 
     */
   const searchKanji = (rows, filterKeys) => {
        return rows.filter((row) => JSON.stringify(row).includes(filterKeys));
   }

    useEffect(() => {
        listAll();
    }, [])

    return(
        <>
            <Header />
            <section id="home-page">
                <header>
                    <Container>
                            <div className="columns reverse-row-order  p-2">
                                <div className="column is-8">
                                        <h1>漢字を探す</h1>
                                        <h2>ここに漢字を探すことがあります</h2>
                                        <div className="relative search-wrapper" style={{ maxWidth: '640px' }}>
                                            <div className="input-with-btn">
                                                    <form onSubmit={searchKanji}>
                                                        <input type="search" autoComplete="off" placeholder="検索" value={value} onChange={(e) => setValue(e.target.value)}/>
                                                        <button aria-label="search">
                                                                <i className="search icon"></i>           
                                                        </button>
                                                    </form>
                                            </div>
                                        </div>
                                </div>
                                <div className="column">
                                    <div id="kanji-logo">
                                        <img src={kanjiIcon} alt="kanji-logo-irasuto" />
                                    </div>
                                </div>
                            </div>
                    </Container>
                </header>
            </section>

                <div id="contentsTopIndexArea">
                    <div id="aiueoListInner">
                        <ul className="cf">
                        {searchKanji(kanjis, value).map((text, index) => (
                            <li className="bdTopLine ml0" key={index}>
                                <a href={"/kanji/" + text.id} style={{ height: "119px" }}>
                                      <span className="hiragana">
                                           読み方:{text.reading}
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