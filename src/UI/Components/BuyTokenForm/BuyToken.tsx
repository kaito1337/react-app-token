import React, { FC, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Service from '../../../Services/Service';

interface BuyTokenForm {
    address: string;
}

export const BuyToken: FC<BuyTokenForm> = ({ address }) => {

    const [tokenPrice, setTokenPrice] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const tokenPrice = await Service.getTokenPrice(address);
            setTokenPrice(tokenPrice);
        })()
    }, [tokenPrice])

    const buyTokenHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Service.buyToken(target[0].value, tokenPrice, address)
        console.log(data)
    }

    return (
        <Form onSubmit={buyTokenHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h2 className="text-center mb-4">Купить токены по {tokenPrice/10**18} ETH</h2>

            <Form.Group className="mb-3">
                <Form.Label>Количество CMT</Form.Label>
                <Form.Control type="number" placeholder="Введите количество токенов" required />
            </Form.Group>

            <Button variant="dark" type="submit">
                Подтвердить
            </Button>
        </Form>
    )
}
