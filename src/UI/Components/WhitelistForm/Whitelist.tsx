import React, { FC, useContext, useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { Context } from '../../../Context/ContextWrapper';
import Service from '../../../Services/Service'
import { IProps } from '../Props.interfaces';


export const Whitelist: FC <IProps> = ({address}) => {

    const { whitelist, getWhitelist } = useContext(Context);
    const [style, setStyle] = useState<string>('');
    const whitelistHandler = async () => {
        const data = await Service.getWhitelist(address);
        getWhitelist(data);
        setStyle('none');
    }

    return (
        <>

            <div style={{marginTop:"2rem", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <h3>Список пользователей в вайтлисте</h3>
                <Button style={{ marginLeft: "1rem", display: `${style}` }} onClick={whitelistHandler} variant="dark">Посмотреть список</Button>
            </div>
            <ListGroup as="ol" style={{ width: "100%" }} numbered>
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
