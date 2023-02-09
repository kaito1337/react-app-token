import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context/ContextWrapper";
import Service from "../../Services/Service";

const Login = () => {

    const wallet = 'd'
    
    const { getUser } = useContext(Context);
    const navigation = useHistory();

    const loginUserHandler = async (e:any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Service.auth(target[0].value, target[1].value, wallet)
        if(data){
            getUser({wallet, ...data});
            navigation.push('/home');
        }
        console.log(data)
    }

    return (
        <Form onSubmit={loginUserHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h1 className="text-center mb-4">Авторизация</h1>

            <Form.Group className="mb-3">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Подтвердить
            </Button>
        </Form>
    )
}
export default Login;
