import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="/">Навигационная панель</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Главная страница</Link>
                    <Link to="/login">Авторизироваться</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}