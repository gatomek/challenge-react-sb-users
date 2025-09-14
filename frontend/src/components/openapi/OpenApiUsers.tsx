import {useEffect, useState} from "react";
import {getUsers, type User} from "../../client";

export function OpenApiUsers() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers()
            .then(({data}) => {
                if (data)
                    setUsers(data);
            });
    }, []);

    return (
        <>
            <h2>OpenApi - Users</h2>
            <ul>{
                users.map((u) =>
                    <li key={u.pesel}>@{u.readDateTime?.toString()} | {u.pesel} | {u.name} {u.lastName}</li>
                )
            }
            </ul>
        </>
    )
}