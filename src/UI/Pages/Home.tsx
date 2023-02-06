import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../Context/ContextWrapper";
import Service from "../../Services/Service";
import { BuyToken } from "../Components/BuyTokenForm/BuyToken";
import { TakeToken } from "../Components/TakeTokensForm/TakeToken";

const Home = () => {

    const { user } = useContext(Context);

    const [balance, setBalance] = useState<number>(0);
    const [ethBalance, setEthBalance] = useState<number>(0);

    const balanceUserHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.balanceOf(user.wallet);
        const ethData = await Service.getBalance(user.wallet);
        const balance = data / 10 ** 18;
        const ethBalance = ethData / 10 ** 18;
        setBalance(balance);
        setEthBalance(ethBalance);
    }
    return (
        <div className="text-center mt-5" style={{fontSize: "1.5rem"}}>
            {
                user.role === "3" ? (
                    <h2>Вы администратор</h2>
                ) : undefined
            }
            {
                <>
                    <p>Ваш логин: {user.login}</p>
                    <p>Ваш адрес: {user.wallet}</p>
                    <span>У вас: {balance} CMT   </span>
                    <p>Ваш баланс: {ethBalance} ETH </p>
                    <p>Вы находитесь в вайтлисте: {user.role === "1" ? "Да" : "Нет"}</p>
                    <Button onClick={balanceUserHandler} variant='dark'>Узнать баланс</Button>
                    <BuyToken address={user.wallet}></BuyToken>
                    
                </>
            }
            {
                user.role === "2" ?
                    (
                        <TakeToken address={user.wallet}></TakeToken>
                    ) : undefined
            }
        </div>
    )
}
export default Home;