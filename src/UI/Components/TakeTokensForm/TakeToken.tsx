import React, { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Service from '../../../Services/Service';
import { IProps } from '../Props.interfaces';


export const TakeToken: FC<IProps> = ({ address }) => {
    const TakeTokenHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.takeToken(address)
        console.log(data)
    }

    const [tokenDev, setTokenDev] = useState<number>(0);

    const tokenDevHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.viewDevTokens(address);
        const balance = data / 10 ** 18;
        setTokenDev(balance);
    }

    return (
        <Form onSubmit={TakeTokenHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h2 className="text-center mb-4">Взять доступные токены</h2>
            <p>Вам доступно: {tokenDev} CMT </p>
            <Button onClick={tokenDevHandler} variant='dark'>Узнать количество</Button>
            <Button variant="dark" type="submit">
                Взять токены
            </Button>
        </Form>
    )
}
