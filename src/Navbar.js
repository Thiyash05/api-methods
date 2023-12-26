import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navsection(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Movie</Navbar.Brand>
                <Nav className="me-auto nav-list">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#topmovies">Top Movies</Nav.Link>
                    <Nav.Link href="#90'smovie">90's Movies</Nav.Link>
                    <Nav.Link href="#rating">Rating</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navsection;