import {MaterialReactTable, type MRT_ColumnDef, type MRT_TableState, useMaterialReactTable} from "material-react-table";
import {useMemo} from "react";
import {type User} from "../../client";
import {useQuery} from "@tanstack/react-query";
import {getUsersOptions} from "../../client/@tanstack/react-query.gen.ts";

export function MRUserTable() {
    const {data = []} = useQuery(getUsersOptions());
    const columns = useMemo<MRT_ColumnDef<User>[]>(
        () => [
            {
                accessorKey: 'readDateTime',
                header: 'Read Date Time',
            },
            {
                accessorKey: 'pesel',
                header: 'PESEL',
            },
            {
                accessorKey: 'name',
                header: 'Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            }
        ],
        [],
    );

    const state: Partial<MRT_TableState<User>> = {
        density: "compact"
    }

    const table = useMaterialReactTable({
        columns,
        data,
        state,
        enableDensityToggle: false,
        layoutMode: 'semantic'
    });

    const mrt = <MaterialReactTable
        table={table}
    />

    return (
        <>
            <h2>OpenApi + ReactQuery + MaterialReactTable - Users</h2>
            {mrt}
        </>
    );
}


