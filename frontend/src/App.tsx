import './App.css'
import {OpenApiUsers} from "./components/openapi/OpenApiUsers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ReactQueryUsers from "./components/reactQueryUsers/ReactQueryUsers";
import {MRUserTable} from "./components/tableUsers/MRUserTable";
import {FetchedUsers} from "./components/fetched/FetchedUsers";

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
