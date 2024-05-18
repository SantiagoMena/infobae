'use client'
import React, {useContext, useEffect, useState} from "react";

import {CurrentUserContext} from "@/app/providers";
import Header from "@/components/Header";
import {getAllUsers} from "@/lib/firebase/firestore";
import User from "@/components/User";

export default function Users() {
    const { currentUser, dispatchUser } = useContext(CurrentUserContext);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        async function getUsers() {
            try {
                const usersDB = await getAllUsers();
                setUsers(usersDB);
            } catch (e) {
                console.error(e);
            }
        }

        getUsers().catch(console.error);

    }, []);

    return (
        <>
            <Header />
            <section className={"grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center"}>
                {
                    currentUser ?
                        users && users.map((user) => <User key={user.uid} user={user} />)
                        : <>LOGIN TO SEE THIS SECTION</>
                }
            </section>
        </>
    );
}