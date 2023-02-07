import React, { FC, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import Service from '../../../Services/Service'

interface IWhitelist {
    address: string
}

export const Whitelist: FC<IWhitelist> = ({ address }) => {

    const [whitelist, setWhitelist] = useState<Array<string>>([]);
    useEffect(() => {
        (async () => {
            const data = await Service.getWhitelist(address);
            setWhitelist(data)
        })()
    }, [])

    return (
        <>
            <ListGroup as="ol" style={{ width: "100%" }} numbered>
                <h2>Список пользователей в вайтлисте</h2>
                {whitelist?.map((el: any, idx: number) => {
                    if (el.includes("000000")) return;
                    return <ListGroup.Item as="li" key={idx}>
                        {el}
                    </ListGroup.Item>
                })}
            </ListGroup>
        </>
    )
}
