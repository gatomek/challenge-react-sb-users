import './App.css'
import {OpenApiUsers} from "./components/openapi/OpenApiUsers.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ReactQueryUsers from "./components/reactQueryUsers/ReactQueryUsers.tsx";
import {MRUserTable} from "./components/tableUsers/MRUserTable.tsx";
import {FetchedUsers} from "./components/fetched/FetchedUsers.tsx";

export const queryClient = new QueryClient();

export default function App() {
    return (
        <>
            <FetchedUsers/>
            <OpenApiUsers/>
            <QueryClientProvider client={queryClient}>
                <ReactQueryUsers/>
                <MRUserTable/>
            </QueryClientProvider>
        </>
    )
}
