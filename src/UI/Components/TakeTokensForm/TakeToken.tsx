import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import Service from '../../../Services/Service';

interface TakeTokenForm {
    address: string;
}

export const TakeToken: FC<TakeTokenForm> = ({ address }) => {

    const TakeTokenHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.takeToken(address)
        console.log(data)
    }

    return (
        <Form onSubmit={TakeTokenHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h2 className="text-center mb-4">Взять доступные токены</h2>
            <p>Вам доступно:</p>
            <Button variant="dark" type="submit">
                Взять токены
            </Button>
        </Form>
    )
}
