import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

var styles = {
    fontFamily: 'Kaisei Tokumin'
}

export default function Header() {
    var data = localStorage.getItem('user');
    var user = JSON.parse(data);

    return(
        <Navbar style={styles} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">漢字辞書</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">ホーム</Nav.Link>
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
                            <a href="/login">ログイン</a>
                    </>
                    }
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}