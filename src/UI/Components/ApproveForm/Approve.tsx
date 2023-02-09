import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import Service from '../../../Services/Service';
import { IProps } from '../Props.interfaces';

export const Approve: FC<IProps> = ({address}) => {

    const approveHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.approve(address);
        console.log(data)
    } 

    return (
        <>
        <h3 className="text-center mt-4">Дать пользование своими токенами</h3>
        <Form onSubmit={approveHandler} style={{ width: "15rem", margin: "0 auto", marginTop: "2rem" }}>
            <Button variant="dark" type="submit">
                Подтвердить
            </Button>
        </Form>
        </>
    )
}
