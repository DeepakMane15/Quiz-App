import React from 'react'
import './App.css';
import {Navbar,Nav, Container, Row,Col} from 'react-bootstrap';

function Header() {
    return (
        <div>
            <header>
<Navbar expand="lg" bg="light" variant="light" fixed="top" >
  <Container>
    <Navbar.Brand href="/" style={{fontSize: '25px', fontWeight: '500'}}>QUIZOO</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav>
      <Nav.Link href="/join" style={{color: 'black'}}>Join Quiz</Nav.Link>
      <Nav.Link eventKey={2} href="/createGame" style={{color: 'black'}}>
        Create Quiz
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
        </div>
    )
}
export default Header;