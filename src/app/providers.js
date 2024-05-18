'use client';
import {createContext, useEffect, useReducer} from "react";
import {userReducer} from "@/app/reducers/userReducer";
import {persistUserIfNotExists} from "@/app/lib/firebase/firestore";

export const CurrentUserContext = createContext(undefined);

export default function Providers({ children }) {
    const [currentUser, dispatchUser] = useReducer(userReducer, undefined);

    // Default effect: obtener usuario de LocalStorage
    useEffect(() => {
        // Dispatch login si el el usuario existe en local storage
        if (localStorage.getItem("user")) {
            dispatchUser({
                type: "LOGIN",
                user: JSON.parse(localStorage.getItem("user")),
            });
        }
    }, []);

    useEffect(() => {
        // Si el usuario cambio y no es nulo asignarlo al localstorage
        if (currentUser) {
            // Persistir usuario en la base de datos si no existe
            persistUserIfNotExists(currentUser).catch(console.error);
            localStorage.setItem("user", JSON.stringify(currentUser));
        } else { // Si el usuario es nulo o no se desasigno eliminar del local storage
            localStorage.removeItem("user");
        }
    }, [currentUser]);

    return (
        <CurrentUserContext.Provider value={{
            currentUser,
            dispatchUser
        }}>
            {children}
        </CurrentUserContext.Provider>
    );
}