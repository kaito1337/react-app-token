import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import Service from '../../../Services/Service';

interface BuyTokenForm {
    address: string;
}

export const BuyToken: FC<BuyTokenForm> = ({ address }) => {

    const buyTokenHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Service.buyToken(target[0].value, address)
        console.log(data)
    }

    return (
        <Form onSubmit={buyTokenHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h2 className="text-center mb-4">Купить токены</h2>

            <Form.Group className="mb-3">
                <Form.Label>Количество</Form.Label>
                <Form.Control type="number" placeholder="Введите количество" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Подтвердить
            </Button>
        </Form>
    )
}
