/* eslint-disable */
import React, { useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bulma/css/bulma.min.css'

var styles = {
    fontFamily: 'Kaisei Tokumin'
}

export default function Header() {

    const getUser = localStorage.getItem('user');
    const loadUser = JSON.parse(getUser)
    const [user, setUser] = useState(loadUser)

    const destroyStorage = () => {
        return localStorage.removeItem('user');
    }
    
    return(
        <Navbar style={styles} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ marginTop: '1rem' }}>漢字辞書</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">ホーム</Nav.Link>
                    <Nav.Link href="/kana">仮名リスト</Nav.Link>
                    <Nav.Link href="/machi">町リスト</Nav.Link>
                    {user ? (
                        <>
                            <Nav.Link href="/api/kanji/add">漢字を追加</Nav.Link>
                            <Nav.Link href="/profile">アカウント設定</Nav.Link>
                            <Nav.Link href="/api/machi/add">町を追加</Nav.Link>
                        </>
                    )
                    : 
                        ""
                    }
                </Nav>
                
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    {user ? 
                    <>  
                            <span>{user.username}さん，<a onClick={destroyStorage} href="http://localhost:5000/auth/logout">ログアウト</a></span> 
                    </>
                    : 
                    <>                     
                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href="/login">
                                    ログイン
                                </a>
                            </div>
                        </div>
                        </div>
                    </>
                    }
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}