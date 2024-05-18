'use client';
import {createContext, useReducer} from "react";
import {userReducer} from "@/app/reducers/userReducer";

export const CurrentUserContext = createContext(undefined);

export default function Providers({ children }) {
    const [currentUser, dispatchUser] = useReducer(userReducer, undefined);

    return (
        <CurrentUserContext.Provider value={{
            currentUser,
            dispatchUser
        }}>
            {children}
        </CurrentUserContext.Provider>
    );
}