import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../Context/ContextWrapper";
import Service from "../../Services/Service";
import { Approve } from "../Components/ApproveForm/Approve";
import { BuyToken } from "../Components/BuyTokenForm/BuyToken";
import { MinusMinute } from "../Components/MinusMinuteForm/MinusMinute";
import { RequestWhitelist } from "../Components/RequestWhitelistForm/RequestWhitelist";
import { SendRequest } from "../Components/SendRequestForm/SendRequest";
import { TakeToken } from "../Components/TakeTokensForm/TakeToken";
import { Whitelist } from "../Components/WhitelistForm/Whitelist";

const Home = () => {

    const { user } = useContext(Context);

    const [balance, setBalance] = useState<number>(0);
    const [ethBalance, setEthBalance] = useState<number>(0);
    const [tokenPrice, setTokenPrice] = useState<number>(0);

    const balanceUserHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.balanceOf(user.wallet);
        const ethData = await Service.getBalance(user.wallet);
        const balance = data / 10 ** 18;
        const ethBalance = ethData / 10 ** 18;
        setBalance(balance);
        setEthBalance(ethBalance);
        setTokenPrice(await Service.getTokenPrice(user.wallet));
    }
    return (
        <div className="text-center mt-5" style={{ fontSize: "1.5rem" }}>
            {
                    <>
                        <p>Ваш логин: {user.login}</p>
                        <p>Ваш адрес: {user.wallet}</p>
                        <p>Ваша роль: {user.role === "0" || user.role === "1" ? "Пользователь" : user.role === "2" ? "Разработчик" : "Администратор"}</p>
                        <span>У вас: {balance} CMT   </span>
                        <p>Ваш баланс: {ethBalance} ETH </p>
                        <p>Цена токена: {tokenPrice / 10 ** 18} ETH</p>
                        <p>Вы находитесь в вайтлисте: {user.role === "1" ? "Да" : "Нет"}</p>
                        <Button onClick={balanceUserHandler} variant='dark'>Узнать баланс</Button>
                        {(user.role !== "3" && user.role !== "1") ? 
                        (
                            <>
                            <SendRequest address={user.wallet}/>
                            </>
                        ) : undefined }
                        {user.role !== "3" ? 
                        (
                            <BuyToken address={user.wallet}/>
                        ) : undefined }

                    </>
            }
            {
                user.role === "3" ?
                    (
                        <>
                        <MinusMinute address={user.wallet}/>
                        <RequestWhitelist address={user.wallet}/>
                        <Whitelist address={user.wallet}/>
                        </>
                    ) : undefined
            }
            {
                user.role === "2" ?
                    (
                        <TakeToken address={user.wallet}/>
                    ) : undefined
            }
        </div>
    )
}
export default Home;