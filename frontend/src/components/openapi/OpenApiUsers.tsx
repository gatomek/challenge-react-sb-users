import {useEffect, useState} from "react";
import {getUsers, type UserDto} from "../../client";

export function OpenApiUsers() {

    const [users, setUsers] = useState<UserDto[]>([]);

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
                users.map((u:UserDto) =>
                    <li key={u.id}>{u.id} | {u.name} {u.lastName} | {u.cardId} | @{u.readDateTime}</li>
                )
            }
            </ul>
        </>
    )
}