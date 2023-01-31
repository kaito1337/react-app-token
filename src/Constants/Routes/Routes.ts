import Home from "../../UI/Pages/Home";
import Login from "../../UI/Pages/Login";
import Registration from "../../UI/Pages/Registration";

interface IRoutes{
    path: string;
    page: () => JSX.Element;
}

export const Routes: IRoutes[] = [
    {
        path: '/login',
        page: Login
    },
    {
        path: '/',
        page: Home
    },
    {
        path: '/registration',
        page: Registration
    }
]