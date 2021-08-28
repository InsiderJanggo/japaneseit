import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bulma/css/bulma.min.css'

var styles = {
    fontFamily: 'Kaisei Tokumin'
}

export default function Header({ user }) {

    return(
        <Navbar style={styles} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ marginTop: '1rem' }}>漢字辞書</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">ホーム</Nav.Link>
                    <Nav.Link href="/user">ユーザーリスト</Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    {user ? 
                    <>  
                            <span>{user.username}さん，<a href="http://localhost:5000/auth/logout">ログアウト</a></span> 
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