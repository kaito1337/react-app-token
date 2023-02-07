import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { Context } from "../../../Context/ContextWrapper";

export const Header = () => {

    const { logoutUser, user } = useContext(Context);

    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand>                
                    <Link to='/'>Навигационная панель</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    {user.login ? '' :
                        <>
                            <Link to="/registration">Зарегистрироваться</Link>
                            <Link to="/login">Авторизоваться</Link>
                        </>
                    }
                    {!user.login ? '' :
                        <>
                            <Link to='/home'>Личный кабинет</Link>
                            <Link to="/" onClick={() => logoutUser()}>Выход</Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}