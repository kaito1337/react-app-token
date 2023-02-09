import React, { FC } from 'react'
import { Button } from 'react-bootstrap';
import Service from '../../../Services/Service';
import { IProps } from '../Props.interfaces';


export const SendRequest: FC<IProps> = ({ address }) => {

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
