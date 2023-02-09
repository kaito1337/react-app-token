import React, { FC, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Service from '../../../Services/Service';
import { IProps } from '../Props.interfaces';


export const BuyToken: FC<IProps> = ({ address }) => {

    const [tokenPrice, setTokenPrice] = useState<number>(0);
    const [allowance, setAllowance] = useState<string>('');
    useEffect(() => {
        (async () => {
            const tokenPriceData = await Service.getTokenPrice(address);
            const allowanceData = await Service.getAllowance(address);
            setTokenPrice(tokenPriceData);
            setAllowance(allowanceData);
        })()
    }, [tokenPrice])

    const buyTokenHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Service.buyToken(target[0].value, tokenPrice, address)
        console.log(data)
    }

    const approveHandler = async (e: any) => {
        e.preventDefault();
        const data = await Service.approve(address);
        const newAllowance = await Service.getAllowance(address);
        setAllowance(newAllowance);
        console.log(data)
    }

    return (
        <Form style={{ width: "15rem", margin: "0 auto", marginTop: "5rem" }}>
            <h2 className="text-center mb-4">Купить токены по {tokenPrice / 10 ** 18} ETH</h2>

            <Form.Group className="mb-3">
                <Form.Label>Количество CMT</Form.Label>
                <Form.Control type="number" placeholder="Введите количество токенов" required />
            </Form.Group>

            {allowance !== "0" ?
                (

                    <Button variant="dark" onClick={buyTokenHandler} type="submit">
                        Купить
                    </Button>
                ) :
                (
                    <Button variant="dark" onClick={approveHandler} type="submit">
                        Подтвердить
                    </Button>
                )
            }
        </Form>
    )
}
