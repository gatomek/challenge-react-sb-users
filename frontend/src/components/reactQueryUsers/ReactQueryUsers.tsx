import {useQuery, useQueryClient} from "@tanstack/react-query";
import {type User} from "../../client";
import {getUsersOptions, getUsersQueryKey} from "../../client/@tanstack/react-query.gen.ts";

export default function ReactQueryUsers() {

    const queryClient = useQueryClient();
    const {data = [], status} = useQuery(getUsersOptions());

    return (
        <>
            <h2>OpenApi + ReactQuery - Users</h2>
            {status && <span>Status: {status}</span>}
            <ul>{
                data.map((u: User) =>
                    <li key={u.pesel}>@{u.readDateTime} | {u.pesel} | {u.name} {u.lastName}</li>
                )
            }
            </ul>
            <button onClick={() =>
                queryClient.invalidateQueries({queryKey: getUsersQueryKey()})}>Refresh Users
            </button>
        </>
    )
}