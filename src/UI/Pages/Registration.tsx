import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Service from "../../Services/Service";


const RegisterForm = () => {

    const navigation = useHistory();

    const registerUserHandler = async (e:any) => {
        e.preventDefault();
        const { target } = e;
        const reg = await Service.register(target[0].value, target[1].value, target[2].value);
        console.log(reg)
        navigation.push('/login')
    }

    return (
        <Form onSubmit={registerUserHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h1 className="text-center mb-4">Регистрация</h1>

            <Form.Group className="mb-3">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Адрес в сети блокчейн</Form.Label>
                <Form.Control type="text" placeholder="Введите адрес" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Подтвердить
            </Button>
        </Form>
    )
}
export default RegisterForm;