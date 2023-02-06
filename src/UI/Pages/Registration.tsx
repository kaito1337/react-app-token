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
            <h1 className="text-center mb-4">Sign up</h1>

            <Form.Group className="mb-3">
                <Form.Label>Login</Form.Label>
                <Form.Control type="text" placeholder="Enter login" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default RegisterForm;