import { ReactNode } from "react"

interface IValues {
    user: IUser;
    getUser(user: IUser): void;
    getBalance(): Promise<void>;
}

interface IProps {
    children: ReactNode
}

interface IUser {
    wallet: string,
    login: string,
    white: boolean,
    dev: boolean,
    balance: number,
}

export type {
    IValues,
    IProps,
    IUser
}