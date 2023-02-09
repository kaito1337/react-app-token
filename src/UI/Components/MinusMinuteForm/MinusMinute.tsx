import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import Service from '../../../Services/Service'
import { IProps } from '../Props.interfaces'

export const MinusMinute: FC<IProps> = ({address}) => {
    
const MinusMinuteHandler = async (e:any) => {
    e.preventDefault()
    const data = await Service.minusMinute(address);
    console.log(data);
}
  return (
    <>
        <h3>Отнять минуту</h3>
        <Button variant="dark" onClick={MinusMinuteHandler}>Подтвердить</Button>
    </>
  )
}
