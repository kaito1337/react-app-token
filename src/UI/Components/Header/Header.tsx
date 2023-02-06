import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/login">Sign in</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}