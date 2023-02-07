import React, { FC, useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import Service from '../../../Services/Service'

interface IRequestWhitelist {
    address: string
}

export const RequestWhitelist: FC<IRequestWhitelist> = ({ address }) => {

    const [arrayData, setArrayData] = useState<Array<string>>([]);

    const ApproveButtonHandler = async (idx: number, solution: boolean) => {
        const data = await Service.takeRequest(idx, solution, address);
        console.log(data);
    }

    const RequestWhitelistFormHandler = async () => {
        const data = await Service.getRequests(address);
        setArrayData(data)
    }

    return (
        <>
            <Button variant="dark" onClick={RequestWhitelistFormHandler}>Посмотреть запросы</Button>
            <ListGroup style={{ width: "100%", }} as="ol" numbered>
                <h2>Список запросов в вайтлист</h2>
                {arrayData?.map((el: any, idx: number) => {
                    if (el.includes("000000")) return;
                    return <ListGroup.Item as="li" key={idx}>
                        {el}
                        <Button style={{ marginLeft: "1rem" }} variant="success" onClick={() => ApproveButtonHandler(idx, true)}>Подтвердить</Button>
                        <Button style={{ marginLeft: "1rem" }} variant="danger" onClick={() => ApproveButtonHandler(idx, false)}>Отклонить</Button>
                    </ListGroup.Item>
                })}
            </ListGroup>
        </>
    )
}
