import { FC, ReactNode } from "react";
import { Header } from "../Header/Header";

interface ILayout {
    children: ReactNode;
}

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}