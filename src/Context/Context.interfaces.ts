import { ReactNode } from "react"

interface IValues {
    user: IUser;
    getUser(user: IUser): void;
    getBalance(): Promise<void>;
    logoutUser(): void;
    whitelist: Array<string>;
    getWhitelist(array: []): void;
}

interface IProps {
    children: ReactNode
}

interface IUser {
    wallet: string,
    login: string,
    role: string,
    balance: number,
    ethBalance: number;
}

export type {
    IValues,
    IProps,
    IUser
}