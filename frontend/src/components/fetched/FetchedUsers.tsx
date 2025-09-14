import {useEffect, useState} from "react";
import type {FetchedUser} from "./FetchedUser.tsx";

const usersUrl: string = import.meta.env.VITE_API_URL + "/api/users";

export function FetchedUsers() {
    const [users, setUsers] = useState<FetchedUser[]>([])

    useEffect(() => {
        fetch(usersUrl)
            .then(rsp => rsp.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <>
            <h2>Fetch - Users</h2>
            <ul> {
                users?.map((u) =>
                    <li key={u.pesel}>@{u.readDateTime} | {u.pesel} | {u.name} {u.lastName}</li>
                )
            }
            </ul>
        </>
    )
}