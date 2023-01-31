import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/registration">Sign up</Link>
                    <Link to="/login">Sign in</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}