import { createContext, FC, useState } from "react";
import Service from "../Services/Service";
import { IProps, IUser, IValues } from "./Context.interfaces";


export const Context = createContext({} as IValues);

export const ContextWrapper: FC<IProps> = ({children}) => {
    
    const initialState = {
        wallet: "",
        login: "",
        role: "",
        balance: 0,
        ethBalance: 0,
    }

    const [user, setUser] = useState(initialState);

    const getUser = (user: IUser) => {
        setUser(user);
    }

    const logoutUser = () => {
        setUser(initialState);
    }

    const getBalance = async () => {
        await Service.balanceOf(user.wallet);
    }

    const values = {
        user,
        getUser,
        getBalance,
        logoutUser
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
    
}