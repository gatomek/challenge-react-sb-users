import {useQuery, useQueryClient} from "@tanstack/react-query";
import {type UserDto} from "../../client";
import {getUsersOptions, getUsersQueryKey} from "../../client/@tanstack/react-query.gen";

export default function ReactQueryUsers() {

    const queryClient = useQueryClient();
    const {data = [], status} = useQuery(getUsersOptions());

    return (
        <>
            <h2>OpenApi + ReactQuery - Users</h2>
            {status && <span>Status: {status}</span>}
            <ul>{
                data.map((u: UserDto) =>
                    <li key={u.id}>{u.id} | {u.name} {u.lastName} | {u.cardId} | @{u.readDateTime}</li>
                )
            }
            </ul>
            <button onClick={() =>queryClient.invalidateQueries({queryKey: getUsersQueryKey()})}>
                Refresh Users
            </button>
        </>
    )
}