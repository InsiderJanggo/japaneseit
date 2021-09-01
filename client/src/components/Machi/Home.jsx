import React, { useEffect, useState, Suspense } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import Header from '../Header';
import machiIcon from '../../assets/machi.jpg'
import Footer from '../Footer';

export default function MachiHome() {
    const [machi, setMachi] = useState([]);
    const [value, setValue] = useState('');

    const getAllMachi = () => {
            axios.get('http://localhost:5000/api/machi')
            .then((res) => {
                setMachi(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getAllMachi();
    }, [])

    /**
     * @param {Array} rows 
     * @param {String} filterKeys 
     * @returns 
     */
    const filterMachi = (rows, filterKeys) => {
        return rows.filter((row) => JSON.stringify(row).includes(filterKeys));
    }
    
    return(
        <>
            <Header />
            <section id="home-page">
                <header>
                    <Container>
                            <div className="columns reverse-row-order  p-2">
                                <div className="column is-8">
                                        <h1>色々町を探す</h1>
                                        <h2>ここに町を探すことがあります</h2>
                                        <div className="relative search-wrapper" style={{ maxWidth: '640px' }}>
                                            <div className="input-with-btn">
                                                    <form>
                                                        <input type="search" autoComplete="off" placeholder="検索" value={value} onChange={(e) => setValue(e.target.value)}/>
                                                    {/**<button aria-label="search">
                                                                <i className="search icon"></i>           
                                                        </button> */}
                                                    </form>
                                            </div>
                                        </div>
                                </div>
                                <div className="column">
                                    <div id="kanji-logo">
                                        <img src={machiIcon} alt="kanji-logo-irasuto" />
                                    </div>
                                </div>
               
                            </div>
                    </Container>
                </header>
            </section>

            
            <div id="contentsTopIndexArea">
                    <div id="aiueoListInner">
                        <ul className="cf">
                        <Suspense fallback={<div>Sedang memuat...</div>}>
                        {filterMachi(machi, value).map((city, index) => (
                            <li className="bdTopLine ml0" key={index}>
                                <a href={"/machi/" + city.id} style={{ height: "119px" }}>
                                      <span className="hiragana">
                                           読み方:{city.reading}
                                      </span>
                                      <span className="kanji">
                                        {city.machi}
                                      </span>  
                                </a>
                            </li>
                         ))}
                         </Suspense>
                        </ul>
                    </div>
                </div>

                <Footer />
        </>
    )
}