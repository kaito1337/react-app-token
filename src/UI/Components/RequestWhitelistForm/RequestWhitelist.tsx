import React, { FC, useContext, useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { Context } from '../../../Context/ContextWrapper'
import Service from '../../../Services/Service'
import { IProps } from '../Props.interfaces'


export const RequestWhitelist: FC<IProps> = ({ address }) => {

    const [arrayData, setArrayData] = useState<Array<string>>([]);
    const { getWhitelist } = useContext(Context);

    const ApproveButtonHandler = async (idx: number, solution: boolean) => {
        const data = await Service.takeRequest(idx, solution, address);
        const whitelist = await Service.getWhitelist(address);
        getWhitelist(whitelist);
        RequestWhitelistFormHandler();
    }

    const RequestWhitelistFormHandler = async () => {
        const data = await Service.getRequests(address);
        setArrayData(data)
    }

    return (
        <>
            <div className="m-auto" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <h3>Список запросов в вайтлист</h3>
                    <Button style={{marginLeft: "1rem"}} variant="dark" onClick={RequestWhitelistFormHandler}>Посмотреть запросы</Button>
            </div>
            <ListGroup style={{ width: "100%", }} as="ol" numbered>
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
