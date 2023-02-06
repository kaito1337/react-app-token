import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import Service from '../../../Services/Service'

interface IMinusMinute{
    address:string
}
export const MinusMinute: FC<IMinusMinute> = ({address}) => {
    
const MinusMinuteHandler = async (e:any) => {
    e.preventDefault()
    const data = await Service.minusMinute(address);
    console.log(data);
}
  return (
    <>
        <h2>Отнять минуту</h2>
        <Button variant="dark" onClick={MinusMinuteHandler}>Подтвердить</Button>
    </>
  )
}
