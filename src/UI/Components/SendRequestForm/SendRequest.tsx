import React, { FC } from 'react'
import { Button } from 'react-bootstrap';
import Service from '../../../Services/Service';

interface ISendRequest {
    address: string;
}

export const SendRequest: FC<ISendRequest> = ({ address }) => {

    const SendRequestHandler = async () => {
        const data = await Service.sendRequest(address);
        console.log(data);
    }

    return (
        <>
            <h3>Отправить запрос в вайтлист</h3>
            <Button variant="dark" onClick={SendRequestHandler}>Отправить</Button>
        </>
    )
}
