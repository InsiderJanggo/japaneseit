/* eslint-disable */
import React from 'react';
import Header from '../Header';
import { Container, Table } from 'react-bootstrap'
import Footer from '../Footer'

var h1Styles = { 
    fontSize: '500%', 
    marginBottom: '1rem', 
    marginTop: '1rem', 
    textAlign: 'center',
    fontFamily: 'Kaisei Tokumin' 
}

var fontStyles = {
    fontFamily: 'Kaisei Tokumin',
    fontSize: '20px'
}

function HiraganaList() {
    const hiraganas = [
        { kana: 'あ', reading: 'a' },
        { kana: 'い', reading: 'i' },
        { kana: 'う', reading: 'u' },
        { kana: 'え', reading: 'e' },
        { kana: 'お', reading: 'o' },
        { kana: 'か', reading: 'ka' },
        { kana: 'き', reading: 'ki' },
        { kana: 'く', reading: 'ku' },
        { kana: 'け', reading: 'ke' },
        { kana: 'こ', reading: 'ko' },
        { kana: 'さ', reading: 'sa' },
        { kana: 'し', reading: 'shi' },
        { kana: 'す', reading: 'su' },
        { kana: 'せ', reading: 'se' },
        { kana: 'そ', reading: 'so' },
        { kana: 'た', reading: 'ta' },
        { kana: 'ち', reading: 'chi' },
        { kana: 'つ', reading: 'tsu' },
        { kana: 'て', reading: 'te' },
        { kana: 'と', reading: 'to' },
        { kana: 'な', reading: 'na' },
        { kana: 'に', reading: 'ni' },
        { kana: 'ぬ', reading: 'nu' },
        { kana: 'ね', reading: 'ne' },
        { kana: 'の', reading: 'no' },
        { kana: 'は', reading: 'ha' },
        { kana: 'ひ', reading: 'hi' },
        { kana: 'ふ', reading: 'fu/hu' },
        { kana: 'へ', reading: 'he/e' },
        { kana: 'ほ', reading: 'ho' },
        { kana: 'ま', reading: 'ma' },
        { kana: 'み', reading: 'mi' },
        { kana: 'む', reading: 'mu' },
        { kana: 'め', reading: 'me' },
        { kana: 'も', reading: 'mo' },
        { kana: 'や', reading: 'ya' },
        { kana: 'ゆ', reading: 'yu' },
        { kana: 'よ', reading: 'yo' },
        { kana: 'ら', reading: 'ra' },
        { kana: 'り', reading: 'ri' },
        { kana: 'る', reading: 'ru' },
        { kana: 'れ', reading: 're' },
        { kana: 'ろ', reading: 'ro' },
        { kana: 'わ', reading: 'wa' },
        { kana: 'を', reading: 'wo/o' },
        { kana: 'ん', reading: 'n/m' },
    ]

    return(
        <Container>
            <h1 style={h1Styles}>ひらがな</h1>
                <Table style={fontStyles} striped bordered hover>
                    <thead>
                        <tr>
                        <th>平仮名</th>
                        <th>読み方</th>
                        </tr>
                    </thead>
                    <tbody>
                          {hiraganas.map((kana, index) => (
                               <tr key={index}>
                                    <td>{kana.kana}</td>
                                    <td>{kana.reading}</td> 
                                </tr>
                          ))}
                    </tbody>
                </Table>
        </Container>
    )
}

function KatakanaList() {
    const katakanas = [
        { kana: 'ア', reading: 'a' },
        { kana: 'イ', reading: 'i' },
        { kana: 'ウ', reading: 'u' },
        { kana: 'エ', reading: 'e' },
        { kana: 'オ', reading: 'o' },
        { kana: 'カ', reading: 'ka' },
        { kana: 'キ', reading: 'ki' },
        { kana: 'ク', reading: 'ku' },
        { kana: 'ケ', reading: 'ke' },
        { kana: 'コ', reading: 'ko' },
        { kana: 'サ', reading: 'sa' },
        { kana: 'シ', reading: 'shi' },
        { kana: 'ス', reading: 'su' },
        { kana: 'セ', reading: 'se' },
        { kana: 'ソ', reading: 'so' },
        { kana: 'タ', reading: 'ta' },
        { kana: 'チ', reading: 'chi' },
        { kana: 'ツ', reading: 'tsu' },
        { kana: 'テ', reading: 'te' },
        { kana: 'ト', reading: 'to' },
        { kana: 'ナ', reading: 'na' },
        { kana: 'ニ', reading: 'ni' },
        { kana: 'ヌ', reading: 'nu' },
        { kana: 'ネ', reading: 'ne' },
        { kana: 'ノ', reading: 'no' },
        { kana: 'ハ', reading: 'ha' },
        { kana: 'ヒ', reading: 'hi' },
        { kana: 'フ', reading: 'fu/hu' },
        { kana: 'ヘ', reading: 'he/e' },
        { kana: 'ホ', reading: 'ho' },
        { kana: 'マ', reading: 'ma' },
        { kana: 'ミ', reading: 'mi' },
        { kana: 'ム', reading: 'mu' },
        { kana: 'メ', reading: 'me' },
        { kana: 'モ', reading: 'mo' },
        { kana: 'ヤ', reading: 'ya' },
        { kana: 'ユ', reading: 'yu' },
        { kana: 'ヨ', reading: 'yo' },
        { kana: 'ラ', reading: 'ra' },
        { kana: 'リ', reading: 'ri' },
        { kana: 'ル', reading: 'ru' },
        { kana: 'レ', reading: 're' },
        { kana: 'ロ', reading: 'ro' },
        { kana: 'ワ', reading: 'wa' },
        { kana: 'ヲ', reading: 'wo/o' },
        { kana: 'ン', reading: 'n/m' },
    ]

    return(
        <Container>
        <h1 style={h1Styles}>カタカナ</h1>
            <Table style={fontStyles} striped bordered hover>
                <thead>
                    <tr>
                    <th>片仮名</th>
                    <th>読み方</th>
                    </tr>
                </thead>
                <tbody>
                      {katakanas.map((kana, index) => (
                           <tr key={index}>
                                <td>{kana.kana}</td>
                                <td>{kana.reading}</td> 
                            </tr>
                      ))}
                </tbody>
            </Table>
    </Container>
    )
}

export default function KanaHome() {
    
    return(
        <>
            <Header />
            <HiraganaList />
            <KatakanaList />
            <Footer />
        </>
    )
}