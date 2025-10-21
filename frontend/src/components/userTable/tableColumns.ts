import type {UserDto} from "../../client";
import type {MRT_ColumnDef} from "material-react-table";

const tableColumns : MRT_ColumnDef<UserDto>[] =
    [
        {
            accessorKey: 'id',
            header: 'Id',
            size: 80
        },
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'lastName',
            header: 'Last Name',
        },
        {
            accessorKey: 'cardId',
            header: 'CardID',
        },
        {
            accessorKey: 'readDateTime',
            header: 'Read Date Time',
        },
    ];

export function getTableColumns() {
    return tableColumns;
}