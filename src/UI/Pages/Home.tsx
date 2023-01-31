import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../Context/ContextWrapper";
import Service from "../../Services/Service";
import { BuyToken } from "../Components/BuyTokenForm/BuyToken";
import { TakeToken } from "../Components/TakeTokensForm/TakeToken";

const Home = () => {

    const { user } = useContext(Context);

    const [balance, setBalance] = useState<number>(0);

    const balanceUserHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.balanceOf(user.wallet);
        const balance = data / 10 ** 18;
        setBalance(balance);
    }
    return (
        <div className="text-center mt-5">
            {
                <>
                    <p>Ваш логин: {user.login}</p>
                    <p>Ваш адрес: {user.wallet}</p>
                    <span>Ваш баланс: {balance} токенов   </span>
                    <Button onClick={balanceUserHandler} variant='dark'>Узнать баланс</Button>
                    <BuyToken address={user.wallet}></BuyToken>
                    
                </>
            },
            {
                user.dev ?
                    (
                        <TakeToken address={user.wallet}></TakeToken>
                    ) : undefined
            }
        </div>
    )
}
export default Home;